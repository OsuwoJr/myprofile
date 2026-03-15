<svelte:options runes={true} />

<script>
	import { supabase } from '$lib/supabase';
	import { goto } from '$app/navigation';

	let playlists = $state([]);
	let loading = $state(true);

	$effect(() => {
		(async () => {
			loading = true;
			const { data } = await supabase
				.from('blog_playlists')
				.select('id, title, slug, description, sort_order, created_at')
				.order('sort_order', { ascending: true })
				.order('title', { ascending: true });
			playlists = data ?? [];
			loading = false;
		})();
	});

	async function createNew() {
		const title = 'New playlist';
		const slug =
			'new-playlist-' +
			Date.now()
				.toString(36)
				.toLowerCase();
		const { data, error } = await supabase
			.from('blog_playlists')
			.insert({ title, slug })
			.select('id')
			.single();
		if (error) {
			alert(error.message);
			return;
		}
		goto(`/admin/blog/playlists/${data.id}`);
	}
</script>

<svelte:head>
	<title>Playlists | Admin – Blog</title>
</svelte:head>

<div class="max-w-2xl">
	<p class="mb-4">
		<a href="/admin/blog" class="text-slate-400 hover:text-slate-200 text-sm">← Blog posts</a>
	</p>
	<h1 class="text-2xl font-bold text-slate-100 mb-2">Playlists</h1>
	<p class="text-slate-400 text-sm mb-4">
		Curate reading order so readers can follow blogs systematically (e.g. &quot;Introduction to software engineering&quot;, &quot;Cyber security&quot;).
	</p>
	<button
		type="button"
		onclick={createNew}
		class="text-violet-400 hover:underline mb-6"
	>+ New playlist</button>

	{#if loading}
		<p class="text-slate-400">Loading…</p>
	{:else if playlists.length === 0}
		<p class="text-slate-400">No playlists yet. Create one to get started.</p>
	{:else}
		<ul class="space-y-3">
			{#each playlists as p (p.id)}
				<li class="flex items-center justify-between gap-4 py-2 border-b border-slate-700/60">
					<div>
						<a href="/admin/blog/playlists/{p.id}" class="text-violet-400 hover:underline font-medium">{p.title}</a>
						{#if p.slug}
							<span class="text-slate-500 text-sm ml-2">/{p.slug}</span>
						{/if}
					</div>
					<a href="/admin/blog/playlists/{p.id}" class="text-slate-400 hover:text-slate-200 text-sm">Edit</a>
				</li>
			{/each}
		</ul>
	{/if}
</div>
