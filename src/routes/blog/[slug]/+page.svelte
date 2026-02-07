<svelte:options runes={true} />

<script>
	import { supabase } from '$lib/supabase';
	import CommentSection from './CommentSection.svelte';

	let { data } = $props();
	let article = $state(null);
	let loading = $state(true);

	$effect(() => {
		const slug = data.slug;
		(async () => {
			loading = true;
			const { data: row } = await supabase
				.from('articles')
				.select('*')
				.eq('slug', slug)
				.eq('published', true)
				.maybeSingle();
			article = row ?? null;
			loading = false;
		})();
	});
</script>

<svelte:head>
	<title>{article?.title ?? 'Article'} | Blog</title>
</svelte:head>

<div class="max-w-3xl mx-auto px-6 py-12">
	{#if loading}
		<p class="text-slate-400">Loading…</p>
	{:else if !article}
		<p class="text-slate-400">Article not found.</p>
	{:else}
		<article>
			{#if article.topic}
				<span class="text-sm text-violet-400 uppercase tracking-wide">{article.topic}</span>
			{/if}
			<h1 class="text-3xl font-bold text-slate-100 mt-2">{article.title}</h1>
			<time class="text-slate-500 block mt-2" datetime={article.created_at}>
				{new Date(article.created_at).toLocaleDateString()}
			</time>
			<div class="prose prose-invert mt-6 text-slate-300 whitespace-pre-wrap">{article.body}</div>
		</article>
		<CommentSection articleId={article.id} />
	{/if}
</div>
