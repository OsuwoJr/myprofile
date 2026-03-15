<svelte:options runes={true} />

<script>
	import { supabase } from '$lib/supabase';

	let playlists = $state([]);
	let loading = $state(true);

	$effect(() => {
		(async () => {
			loading = true;
			const { data } = await supabase
				.from('blog_playlists')
				.select('id, title, slug, description, sort_order')
				.order('sort_order', { ascending: true })
				.order('title', { ascending: true });
			playlists = data ?? [];
			loading = false;
		})();
	});
</script>

<svelte:head>
	<title>Blog playlists | Osuwo Odongo John Frederick</title>
</svelte:head>

<div class="blog-page">
	<header class="blog-header">
		<h1 class="blog-title">Playlists</h1>
		<p class="blog-subtitle">Curated reading order. Follow a topic from start to finish.</p>
	</header>

	<p class="mb-6">
		<a href="/blog" class="text-violet-400 hover:underline text-sm">← All articles</a>
	</p>

	{#if loading}
		<p class="text-slate-400">Loading playlists…</p>
	{:else if playlists.length === 0}
		<div class="blog-empty">
			<p class="text-slate-400">No playlists yet. Check back later.</p>
		</div>
	{:else}
		<ul class="playlist-list">
			{#each playlists as p (p.id)}
				<li>
					<a href="/blog/playlist/{p.slug}" class="playlist-card hover-lift">
						<h2 class="playlist-card-title">{p.title}</h2>
						{#if p.description}
							<p class="playlist-card-desc">{p.description}</p>
						{/if}
						<span class="playlist-card-cta">Read in order →</span>
					</a>
				</li>
			{/each}
		</ul>
	{/if}
</div>

<style>
	.blog-page {
		max-width: 42rem;
		margin: 0 auto;
		padding: 2.5rem 1.5rem 4rem;
	}
	.blog-header {
		text-align: center;
		margin-bottom: 2rem;
	}
	.blog-title {
		font-size: clamp(1.75rem, 4vw, 2.25rem);
		font-weight: 700;
		color: #f1f5f9;
		letter-spacing: -0.025em;
		line-height: 1.2;
		margin-bottom: 0.5rem;
	}
	.blog-title::after {
		content: '';
		display: block;
		width: 3rem;
		height: 3px;
		margin: 0.75rem auto 0;
		background: linear-gradient(90deg, #7c3aed, #a78bfa);
		border-radius: 2px;
	}
	.blog-subtitle {
		font-size: 0.95rem;
		color: #94a3b8;
		max-width: 28rem;
		margin: 0 auto;
		line-height: 1.5;
	}
	.playlist-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	.playlist-card {
		display: block;
		padding: 1.25rem 1.25rem;
		background: rgba(30, 41, 59, 0.5);
		border: 1px solid rgba(71, 85, 105, 0.4);
		border-radius: 1rem;
		text-decoration: none;
		color: inherit;
		transition: border-color 0.2s ease, background 0.2s ease, transform 0.25s ease, box-shadow 0.25s ease;
	}
	.playlist-card:hover {
		border-color: rgba(139, 92, 246, 0.5);
		background: rgba(30, 41, 59, 0.75);
		box-shadow: 0 10px 40px -12px rgba(124, 58, 237, 0.25);
	}
	.playlist-card-title {
		font-size: 1.15rem;
		font-weight: 600;
		color: #f1f5f9;
		line-height: 1.35;
		margin: 0 0 0.35rem;
	}
	.playlist-card-desc {
		font-size: 0.9rem;
		color: #94a3b8;
		line-height: 1.5;
		margin: 0 0 0.5rem;
	}
	.playlist-card-cta {
		font-size: 0.8rem;
		font-weight: 500;
		color: #a78bfa;
	}
	.blog-empty {
		text-align: center;
		padding: 3rem 1rem;
	}
</style>
