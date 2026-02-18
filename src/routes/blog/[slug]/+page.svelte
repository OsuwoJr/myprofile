<svelte:options runes={true} />

<script>
	import CommentSection from './CommentSection.svelte';

	let { data } = $props();

	// Article and bodyHtml come from server load — already parsed, no client race
	const article = $derived(data.article);
	const bodyHtml = $derived(data.bodyHtml ?? '');
</script>

<svelte:head>
	<title>{article?.title ?? 'Article'} | Blog</title>
</svelte:head>

<div class="max-w-3xl mx-auto px-6 py-12">
	{#if !article}
		<p class="text-slate-400">Article not found.</p>
	{:else}
		<article>
			{#if article.topic}
				<span class="text-sm text-violet-400 uppercase tracking-wide font-semibold">{article.topic}</span>
			{/if}
			<h1 class="text-3xl font-bold text-slate-100 mt-2 leading-tight">{article.title}</h1>
			<time class="text-slate-500 block mt-2 text-sm" datetime={article.created_at}>
				{new Date(article.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
			</time>
			<div class="blog-body mt-8 text-slate-300">{@html bodyHtml}</div>
		</article>
		<hr class="border-slate-800 my-10" />
		<CommentSection articleId={article.id} />
	{/if}
</div>

<style>
	/* Markdown typography — applied without needing @tailwindcss/typography plugin */
	.blog-body :global(h1),
	.blog-body :global(h2),
	.blog-body :global(h3),
	.blog-body :global(h4),
	.blog-body :global(h5),
	.blog-body :global(h6) {
		color: #f1f5f9;
		font-weight: 700;
		line-height: 1.3;
		margin-top: 2rem;
		margin-bottom: 0.75rem;
	}
	.blog-body :global(h2) { font-size: 1.5rem; }
	.blog-body :global(h3) { font-size: 1.25rem; }
	.blog-body :global(h4) { font-size: 1.1rem; }

	.blog-body :global(p) {
		margin-top: 0;
		margin-bottom: 1.25rem;
		line-height: 1.8;
	}

	.blog-body :global(strong) {
		color: #e2e8f0;
		font-weight: 700;
	}

	.blog-body :global(em) {
		font-style: italic;
		color: #cbd5e1;
	}

	.blog-body :global(ul),
	.blog-body :global(ol) {
		padding-left: 1.5rem;
		margin-bottom: 1.25rem;
	}
	.blog-body :global(ul) { list-style-type: disc; }
	.blog-body :global(ol) { list-style-type: decimal; }
	.blog-body :global(li) {
		margin-bottom: 0.4rem;
		line-height: 1.75;
	}
	.blog-body :global(li > ul),
	.blog-body :global(li > ol) {
		margin-top: 0.25rem;
		margin-bottom: 0.25rem;
	}

	.blog-body :global(code) {
		background: rgba(148, 163, 184, 0.1);
		color: #fbbf24;
		padding: 0.15em 0.4em;
		border-radius: 0.25rem;
		font-family: 'Fira Code', 'Cascadia Code', 'Consolas', monospace;
		font-size: 0.875em;
	}

	.blog-body :global(pre) {
		background: #1e293b;
		border: 1px solid #334155;
		border-radius: 0.5rem;
		padding: 1rem 1.25rem;
		overflow-x: auto;
		margin-bottom: 1.5rem;
	}
	.blog-body :global(pre code) {
		background: transparent;
		color: #e2e8f0;
		padding: 0;
		font-size: 0.875rem;
		line-height: 1.7;
	}

	.blog-body :global(blockquote) {
		border-left: 3px solid #7c3aed;
		padding: 0.5rem 1rem;
		margin: 1.5rem 0;
		color: #94a3b8;
		background: rgba(124, 58, 237, 0.06);
		border-radius: 0 0.25rem 0.25rem 0;
	}

	.blog-body :global(hr) {
		border: none;
		border-top: 1px solid #1e293b;
		margin: 2rem 0;
	}

	.blog-body :global(a) {
		color: #a78bfa;
		text-decoration: underline;
		text-underline-offset: 2px;
	}
	.blog-body :global(a:hover) {
		color: #c4b5fd;
	}

	.blog-body :global(table) {
		width: 100%;
		border-collapse: collapse;
		margin-bottom: 1.5rem;
		font-size: 0.9rem;
	}
	.blog-body :global(th) {
		background: #1e293b;
		color: #f1f5f9;
		font-weight: 600;
		text-align: left;
		padding: 0.6rem 0.8rem;
		border: 1px solid #334155;
	}
	.blog-body :global(td) {
		padding: 0.5rem 0.8rem;
		border: 1px solid #334155;
		color: #cbd5e1;
	}
	.blog-body :global(tr:nth-child(even) td) {
		background: rgba(30, 41, 59, 0.4);
	}
</style>
