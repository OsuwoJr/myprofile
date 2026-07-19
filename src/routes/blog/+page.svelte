<svelte:options runes={true} />

<script>
	import BlogArticleCard from '$lib/components/BlogArticleCard.svelte';
	import BlogFeaturedHero from '$lib/components/BlogFeaturedHero.svelte';
	import BlogTopicFilter from '$lib/components/BlogTopicFilter.svelte';
	import {
		articleMatchesSearch,
		articleMatchesTopic,
		uniqueTopics
	} from '$lib/blog.js';

	let { data } = $props();

	const articles = $derived(data.articles ?? []);
	const featured = $derived(articles[0] ?? null);
	const restArticles = $derived(articles.slice(1));
	const topics = $derived(uniqueTopics(articles));

	let activeTopic = $state('All');
	let searchQuery = $state('');

	const filteredRest = $derived(
		restArticles.filter(
			(a) => articleMatchesTopic(a, activeTopic) && articleMatchesSearch(a, searchQuery)
		)
	);

	const showFeatured = $derived(
		featured &&
			articleMatchesTopic(featured, activeTopic) &&
			articleMatchesSearch(featured, searchQuery)
	);

	const articleCountLabel = $derived(
		articles.length === 1 ? '1 article' : `${articles.length} articles`
	);
</script>

<svelte:head>
	<title>Blog | Osuwo Odongo John Frederick</title>
</svelte:head>

<div class="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-14 pb-16">
	<header class="mb-10 sm:mb-12">
		<p class="mb-2 text-xs font-bold uppercase tracking-widest text-violet-400">Writing</p>
		<h1 class="poppins mb-3 text-3xl sm:text-4xl font-bold text-slate-100 leading-tight">
			Blog
		</h1>
		<p class="max-w-2xl text-slate-400 text-base sm:text-lg leading-relaxed">
			Notes on frontend, security, SEO, and building in production.
		</p>
		<p class="mt-3 text-sm text-slate-500">{articleCountLabel}</p>
	</header>

	{#if articles.length === 0}
		<div class="rounded-xl border border-slate-700/60 bg-slate-900/40 py-16 text-center">
			<p class="text-slate-400 mb-4">No articles yet. Check back soon.</p>
			<a href="/" class="text-violet-400 hover:text-violet-300 text-sm font-medium no-underline">
				← Back to home
			</a>
		</div>
	{:else}
		{#if showFeatured}
			<section class="mb-10 sm:mb-12 fade-in-up" aria-label="Latest article">
				<BlogFeaturedHero article={featured} />
			</section>
		{/if}

		<section class="mb-8 space-y-5" aria-label="Browse articles">
			<div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
				<label class="relative block w-full sm:max-w-xs">
					<span class="sr-only">Search articles</span>
					<input
						type="search"
						bind:value={searchQuery}
						placeholder="Search articles…"
						class="w-full min-h-[44px] rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-2.5 text-sm text-slate-200 placeholder:text-slate-500 focus:border-violet-600 focus:outline-none focus:ring-1 focus:ring-violet-600"
					/>
				</label>
				<a
					href="/blog/playlists"
					class="inline-flex min-h-[44px] shrink-0 items-center justify-center rounded-lg border border-violet-800/50 bg-violet-950/30 px-4 py-2 text-sm font-medium text-violet-300 no-underline hover:border-violet-600/60 hover:bg-violet-950/50 hover:text-violet-200 transition-colors"
				>
					Browse playlists →
				</a>
			</div>

			{#if topics.length > 0}
				<BlogTopicFilter
					{topics}
					{activeTopic}
					onSelect={(t) => (activeTopic = t)}
				/>
			{/if}
		</section>

		{#if filteredRest.length === 0 && !showFeatured}
			<div class="rounded-xl border border-slate-700/60 bg-slate-900/40 py-12 text-center">
				<p class="text-slate-400 mb-4">
					{#if searchQuery.trim()}
						No articles match your search.
					{:else}
						No articles in this topic.
					{/if}
				</p>
				<button
					type="button"
					class="text-violet-400 hover:text-violet-300 text-sm font-medium bg-transparent border-none cursor-pointer"
					onclick={() => {
						activeTopic = 'All';
						searchQuery = '';
					}}
				>
					Clear filters
				</button>
			</div>
		{:else if filteredRest.length > 0}
			<section aria-label="All articles">
				<h2 class="sr-only">More articles</h2>
				<ul class="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 list-none p-0 m-0">
					{#each filteredRest as article, index (article.id)}
						<li>
							<BlogArticleCard {article} {index} />
						</li>
					{/each}
				</ul>
			</section>
		{/if}
	{/if}
</div>
