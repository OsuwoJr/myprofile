<svelte:options runes={true} />

<script>
	import { formatDate, topicTags } from '$lib/blog.js';

	let { article } = $props();

	const tags = $derived(topicTags(article.topic));
	const primaryTag = $derived(tags[0] ?? null);
</script>

<a
	href="/blog/{article.slug}"
	class="featured-hero group block rounded-2xl border border-violet-700/50 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-violet-950/40 p-6 sm:p-8 md:p-10 hover-lift no-underline text-inherit relative overflow-hidden"
>
	<div
		class="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-violet-600 to-violet-400"
		aria-hidden="true"
	></div>

	<div class="relative z-[1] flex flex-col gap-4">
		<div class="flex flex-wrap items-center gap-2">
			<span class="text-xs font-bold uppercase tracking-widest text-violet-300">Latest</span>
			{#if primaryTag}
				<span
					class="rounded-full border border-violet-700/60 bg-violet-900/40 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-violet-300"
				>
					{primaryTag}
				</span>
			{/if}
		</div>

		<h2 class="poppins text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-slate-100 group-hover:text-white transition-colors">
			{article.title}
		</h2>

		{#if article.excerpt}
			<p class="text-base sm:text-lg text-slate-400 leading-relaxed line-clamp-3 max-w-3xl">
				{article.excerpt}
			</p>
		{/if}

		<div class="flex flex-wrap items-center justify-between gap-3 pt-1">
			<div class="flex flex-wrap items-center gap-3 text-sm text-slate-500">
				<time datetime={article.created_at}>{formatDate(article.created_at)}</time>
				<span aria-hidden="true">·</span>
				<span>{article.readTime} min read</span>
			</div>
			<span class="text-sm font-semibold text-violet-400 group-hover:text-violet-300 transition-colors">
				Read latest →
			</span>
		</div>
	</div>
</a>
