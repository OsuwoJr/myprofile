<svelte:options runes={true} />

<script>
	import { supabase } from '$lib/supabase';

	let articles = $state([]);

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
<ul class="mt-4 space-y-2">
	{#each articles as a (a.id)}
		<li>
			<a href="/admin/blog/{a.id}" class="text-violet-400 hover:underline">{a.title}</a>
			{#if !a.published}<span class="text-amber-400 text-sm ml-2">(draft)</span>{/if}
		</li>
	{/each}
</ul>
