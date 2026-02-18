import { marked } from 'marked';

marked.use({ gfm: true, breaks: false });

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, locals }) {
	const supabase = locals.supabase;
	const { data: row } = await supabase
		.from('articles')
		.select('*')
		.eq('slug', params.slug)
		.eq('published', true)
		.maybeSingle();

	const article = row ?? null;

	// Explicitly pass async:false so marked always returns a plain string (not Promise)
	const bodyHtml = article?.body
		? marked.parse(article.body, { async: false })
		: '';

	return { article, bodyHtml };
}
