/** Split topic string by comma for multiple tag pills; trim and filter empty. */
export function topicTags(topic) {
	if (!topic || typeof topic !== 'string') return [];
	return topic.split(',').map((t) => t.trim()).filter(Boolean);
}

export function formatDate(iso) {
	return new Date(iso).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'short',
		day: 'numeric'
	});
}

/** Estimate read time from markdown/plain body (~200 wpm). */
export function estimateReadTime(body) {
	if (!body || typeof body !== 'string') return 1;
	const words = body.trim().split(/\s+/).filter(Boolean).length;
	return Math.max(1, Math.ceil(words / 200));
}

/** Collect unique topic labels across articles, sorted alphabetically. */
export function uniqueTopics(articles) {
	const set = new Set();
	for (const article of articles) {
		for (const tag of topicTags(article.topic)) {
			set.add(tag);
		}
	}
	return [...set].sort((a, b) => a.localeCompare(b));
}

/** True if article matches a topic chip (case-insensitive). */
export function articleMatchesTopic(article, topic) {
	if (!topic || topic === 'All') return true;
	const needle = topic.toLowerCase();
	return topicTags(article.topic).some((t) => t.toLowerCase() === needle);
}

/** True if article matches a search query against title, excerpt, or topic. */
export function articleMatchesSearch(article, query) {
	const q = query.trim().toLowerCase();
	if (!q) return true;
	const haystack = [article.title, article.excerpt, article.topic]
		.filter(Boolean)
		.join(' ')
		.toLowerCase();
	return haystack.includes(q);
}

/** Insert topic into blog_topics if it does not exist yet (admin save). */
export async function ensureTopicSaved(supabase, topicName) {
	const name = topicName?.trim();
	if (!name) return null;

	const { data: existing } = await supabase
		.from('blog_topics')
		.select('name')
		.eq('name', name)
		.maybeSingle();

	if (existing) return name;

	const { error } = await supabase.from('blog_topics').insert({ name });
	if (error && !/duplicate|unique/i.test(error.message)) {
		throw error;
	}
	return name;
}

/** Remove blog_topics rows not referenced by any article (draft or published). */
export async function deleteOrphanedTopics(supabase) {
	const [{ data: topicRows }, { data: articles }] = await Promise.all([
		supabase.from('blog_topics').select('name'),
		supabase.from('articles').select('topic')
	]);

	if (!topicRows?.length) return;

	const used = new Set();
	for (const article of articles ?? []) {
		for (const tag of topicTags(article.topic)) {
			used.add(tag.toLowerCase());
		}
	}

	const orphanedNames = topicRows
		.map((row) => row.name)
		.filter((name) => !used.has(name.toLowerCase()));

	if (orphanedNames.length === 0) return;

	const { error } = await supabase.from('blog_topics').delete().in('name', orphanedNames);
	if (error) throw error;
}
