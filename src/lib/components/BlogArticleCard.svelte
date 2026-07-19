<svelte:options runes={true} />

<script>
	import { formatDate, topicTags } from '$lib/blog.js';

	let { article, index = 0 } = $props();

	const tags = $derived(topicTags(article.topic));
</script>

<a
	href="/blog/{article.slug}"
	class="article-card group flex h-full flex-col rounded-xl border border-slate-700/60 bg-slate-900/50 p-5 sm:p-6 hover-lift no-underline text-inherit hover:border-violet-700/50 hover:bg-slate-900/80 transition-colors fade-in-up"
	style="animation-delay: {Math.min(index, 8) * 60}ms"
>
	{#if tags.length > 0}
		<div class="mb-3 flex flex-wrap gap-1.5">
			{#each tags.slice(0, 2) as tag}
				<span
					class="rounded-md bg-violet-900/30 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-violet-300"
				>
					{tag}
				</span>
			{/each}
		</div>
	{/if}

	<h3 class="poppins mb-2 text-lg font-semibold leading-snug text-slate-100 line-clamp-2 group-hover:text-white transition-colors">
		{article.title}
	</h3>

	{#if article.excerpt}
		<p class="mb-4 flex-1 text-sm leading-relaxed text-slate-400 line-clamp-2">
			{article.excerpt}
		</p>
	{:else}
		<div class="flex-1"></div>
	{/if}

	<div class="mt-auto flex items-center justify-between gap-2 text-xs text-slate-500">
		<time datetime={article.created_at}>{formatDate(article.created_at)}</time>
		<span>{article.readTime} min read</span>
	</div>
</a>
