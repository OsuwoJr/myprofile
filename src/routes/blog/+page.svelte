<svelte:options runes={true} />

<script>
	import { supabase } from '$lib/supabase';

	let articles = $state([]);
	let loading = $state(true);

	$effect(() => {
		(async () => {
			loading = true;
			const { data } = await supabase
				.from('articles')
				.select('id, slug, title, excerpt, topic, created_at')
				.eq('published', true)
				.order('created_at', { ascending: false });
			articles = data ?? [];
			loading = false;
		})();
	});
</script>

<svelte:head>
	<title>Blog | Osuwo Odongo John Frederick</title>
</svelte:head>

<div class="max-w-3xl mx-auto px-6 py-12">
	<h1 class="text-3xl font-bold text-slate-100 mb-8">Blog & Articles</h1>
	{#if loading}
		<p class="text-slate-400">Loading…</p>
	{:else if articles.length === 0}
		<p class="text-slate-400">No articles yet.</p>
	{:else}
		<ul class="space-y-6">
			{#each articles as article (article.id)}
				<li>
					<a
						href="/blog/{article.slug}"
						class="block p-4 rounded-lg border border-slate-700 hover:border-violet-500/50 hover:bg-slate-800/50 transition"
					>
						{#if article.topic}
							<span class="text-xs text-violet-400 uppercase tracking-wide">{article.topic}</span>
						{/if}
						<h2 class="text-xl font-semibold text-slate-100 mt-1">{article.title}</h2>
						{#if article.excerpt}
							<p class="text-slate-400 mt-2">{article.excerpt}</p>
						{/if}
						<time class="text-sm text-slate-500 mt-2 block" datetime={article.created_at}>
							{new Date(article.created_at).toLocaleDateString()}
						</time>
					</a>
				</li>
			{/each}
		</ul>
	{/if}
</div>
