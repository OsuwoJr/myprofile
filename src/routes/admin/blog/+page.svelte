<svelte:options runes={true} />

<script>
	import { supabase } from '$lib/supabase';

	let articles = $state([]);

	function formatDate(iso) {
		if (!iso) return '—';
		return new Date(iso).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'short',
			day: 'numeric'
		});
	}

	$effect(() => {
		(async () => {
			const { data } = await supabase
				.from('articles')
				.select('id, slug, title, published, created_at')
				.order('created_at', { ascending: false });
			articles = data ?? [];
		})();
	});
</script>

<svelte:head>
	<title>Admin – Blog</title>
</svelte:head>

<h1 class="text-2xl font-bold text-slate-100 mb-4">Blog posts</h1>
<p><a href="/admin/blog/new" class="text-violet-400 hover:underline">+ New article</a></p>
<p class="text-slate-400 text-sm mt-1 mb-4">Numbered by publication date (newest first).</p>
<ol class="mt-4 space-y-2 list-decimal list-inside">
	{#each articles as a, index (a.id)}
		<li class="flex flex-wrap items-baseline gap-x-2 gap-y-1">
			<span class="text-slate-500 text-sm tabular-nums">{String(index + 1).padStart(2, '0')}.</span>
			<a href="/admin/blog/{a.id}" class="text-violet-400 hover:underline">{a.title}</a>
			<span class="text-slate-500 text-sm">{formatDate(a.created_at)}</span>
			{#if !a.published}<span class="text-amber-400 text-sm">(draft)</span>{/if}
		</li>
	{/each}
</ol>

<section class="mt-10 pt-8 border-t border-slate-700">
	<h2 class="text-xl font-bold text-slate-100 mb-2">Playlists</h2>
	<p class="text-slate-400 text-sm mb-4">Curate reading order (e.g. &quot;Introduction to software engineering&quot;, &quot;Cyber security&quot;) so readers can follow blogs systematically.</p>
	<p><a href="/admin/blog/playlists" class="text-violet-400 hover:underline">Manage playlists</a></p>
</section>
