import { estimateReadTime, uniqueTopics } from '$lib/blog.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
	const supabase = locals.supabase;

	const [articlesRes, topicsRes, playlistsRes] = await Promise.all([
		supabase
			.from('articles')
			.select('id, slug, title, excerpt, topic, body, created_at')
			.eq('published', true)
			.order('created_at', { ascending: false }),
		supabase
			.from('blog_topics')
			.select('name')
			.order('sort_order', { ascending: true })
			.order('name', { ascending: true }),
		supabase
			.from('blog_playlists')
			.select('id, title, slug, description, sort_order')
			.order('sort_order', { ascending: true })
			.order('title', { ascending: true })
	]);

	const articles = (articlesRes.data ?? []).map(({ body, ...rest }) => ({
		...rest,
		readTime: estimateReadTime(body)
	}));

	const topicsFromTable = (topicsRes.data ?? []).map((row) => row.name);
	const topics = topicsFromTable.length > 0 ? topicsFromTable : uniqueTopics(articles);

	return {
		articles,
		topics,
		playlists: playlistsRes.data ?? []
	};
}
