import { estimateReadTime } from '$lib/blog.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
	const supabase = locals.supabase;
	const { data } = await supabase
		.from('articles')
		.select('id, slug, title, excerpt, topic, body, created_at')
		.eq('published', true)
		.order('created_at', { ascending: false });

	const articles = (data ?? []).map(({ body, ...rest }) => ({
		...rest,
		readTime: estimateReadTime(body)
	}));

	return { articles };
}
