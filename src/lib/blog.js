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
