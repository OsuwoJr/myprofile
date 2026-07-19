<svelte:options runes={true} />

<script>
	import BlogArticleCard from '$lib/components/BlogArticleCard.svelte';
	import BlogChaptersSection from '$lib/components/BlogChaptersSection.svelte';
	import BlogFeaturedHero from '$lib/components/BlogFeaturedHero.svelte';
	import BlogTopicFilter from '$lib/components/BlogTopicFilter.svelte';
	import { articleMatchesSearch, articleMatchesTopic } from '$lib/blog.js';

	let { data } = $props();

	const articles = $derived(data.articles ?? []);
	const topics = $derived(data.topics ?? []);
	const playlists = $derived(data.playlists ?? []);
	const featured = $derived(articles[0] ?? null);
	const restArticles = $derived(articles.slice(1));

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
</script>

<svelte:head>
	<title>Blog | Osuwo Odongo John Frederick</title>
</svelte:head>

<div class="mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-10 pb-16">
	{#if articles.length === 0 && playlists.length === 0}
		<div class="rounded-xl border border-slate-700/60 bg-slate-900/40 py-16 text-center">
			<p class="text-slate-400 mb-4">No articles yet. Check back soon.</p>
			<a href="/" class="text-violet-400 hover:text-violet-300 text-sm font-medium no-underline">
				← Back to home
			</a>
		</div>
	{:else}
		<BlogChaptersSection {playlists} />

		<section class="mb-8 space-y-4" aria-label="Browse articles">
			{#if topics.length > 0}
				<div>
					<h2 class="poppins text-lg sm:text-xl font-semibold text-slate-100 mb-3">Topics</h2>
					<BlogTopicFilter
						{topics}
						{activeTopic}
						onSelect={(t) => (activeTopic = t)}
					/>
				</div>
			{/if}

			<label class="relative block w-full sm:max-w-md">
				<span class="sr-only">Search articles</span>
				<input
					type="search"
					bind:value={searchQuery}
					placeholder="Search articles…"
					class="w-full min-h-[44px] rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-2.5 text-sm text-slate-200 placeholder:text-slate-500 focus:border-violet-600 focus:outline-none focus:ring-1 focus:ring-violet-600"
				/>
			</label>
		</section>

		{#if articles.length > 0}
			{#if showFeatured}
				<section class="mb-10 sm:mb-12 fade-in-up" aria-label="Latest article">
					<BlogFeaturedHero article={featured} />
				</section>
			{/if}

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
					<h2 class="poppins text-lg sm:text-xl font-semibold text-slate-100 mb-4">All articles</h2>
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
	{/if}
</div>
