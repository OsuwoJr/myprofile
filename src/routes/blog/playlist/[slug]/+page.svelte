<svelte:options runes={true} />

<script>
	import { supabase } from '$lib/supabase';

	let { data } = $props();
	let playlist = $state(null);
	let items = $state([]);
	let loading = $state(true);

	$effect(() => {
		const slug = data.slug;
		(async () => {
			loading = true;
			const { data: pl } = await supabase
				.from('blog_playlists')
				.select('id, title, slug, description, youtube_link')
				.eq('slug', slug)
				.maybeSingle();
			playlist = pl ?? null;
			if (!playlist) {
				loading = false;
				return;
			}
			const { data: rows } = await supabase
				.from('blog_playlist_items')
				.select('id, position, articles(id, title, slug, excerpt, youtube_link, published)')
				.eq('playlist_id', playlist.id)
				.order('position', { ascending: true });
			items = (rows ?? [])
				.filter((r) => r.articles && r.articles.published === true)
				.map((r) => ({
					...r.articles,
					position: r.position
				}));
			loading = false;
		})();
	});
</script>

<svelte:head>
	<title>{playlist?.title ?? 'Playlist'} | Blog | Osuwo Odongo John Frederick</title>
</svelte:head>

<div class="playlist-page">
	<p class="mb-4">
		<a href="/blog/playlists" class="text-violet-400 hover:underline text-sm">← Playlists</a>
		<span class="text-slate-500 mx-2">|</span>
		<a href="/blog" class="text-violet-400 hover:underline text-sm">All articles</a>
	</p>

	{#if loading}
		<p class="text-slate-400">Loading…</p>
	{:else if !playlist}
		<p class="text-slate-400">Playlist not found.</p>
		<a href="/blog/playlists" class="text-violet-400 hover:underline">Browse playlists</a>
	{:else}
		<header class="playlist-header">
			<h1 class="playlist-title">{playlist.title}</h1>
			{#if playlist.description}
				<p class="playlist-desc">{playlist.description}</p>
			{/if}
			{#if playlist.youtube_link}
				<a
					href={playlist.youtube_link}
					target="_blank"
					rel="noopener noreferrer"
					class="playlist-youtube-header-link"
				>
					Watch on YouTube →
				</a>
			{/if}
			<p class="playlist-instruction text-slate-400 text-sm mt-2">Read in order for a systematic path.</p>
		</header>

		<ol class="playlist-articles">
			{#each items as item, index (item.id)}
				<li class="playlist-article-item">
					<span class="playlist-num" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
					<div class="playlist-article-wrap">
						<a href="/blog/{item.slug}" class="playlist-article-link">
							<span class="playlist-article-title">{item.title}</span>
							{#if item.excerpt}
								<span class="playlist-article-excerpt">{item.excerpt}</span>
							{/if}
							<span class="playlist-article-cta">Read →</span>
						</a>

						{#if item.youtube_link}
							<a
								href={item.youtube_link}
								target="_blank"
								rel="noopener noreferrer"
								class="playlist-youtube-link"
							>
								Watch on YouTube →
							</a>
						{/if}
					</div>
				</li>
			{/each}
		</ol>
	{/if}
</div>

<style>
	.playlist-page {
		max-width: 42rem;
		margin: 0 auto;
		padding: 2.5rem 1.5rem 4rem;
	}
	.playlist-header {
		margin-bottom: 2rem;
	}
	.playlist-title {
		font-size: clamp(1.5rem, 3vw, 2rem);
		font-weight: 700;
		color: #f1f5f9;
		line-height: 1.25;
		margin-bottom: 0.5rem;
	}
	.playlist-title::after {
		content: '';
		display: block;
		width: 3rem;
		height: 3px;
		margin: 0.75rem 0 0;
		background: linear-gradient(90deg, #7c3aed, #a78bfa);
		border-radius: 2px;
	}
	.playlist-desc {
		font-size: 1rem;
		color: #94a3b8;
		line-height: 1.55;
		margin: 0;
	}
	.playlist-instruction {
		margin-bottom: 0;
	}
	.playlist-articles {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}
	.playlist-article-item {
		display: flex;
		gap: 1rem;
		align-items: flex-start;
	}

	.playlist-article-wrap {
		flex: 1;
		min-width: 0;
		display: flex;
		flex-direction: column;
		gap: 0.55rem;
	}
	.playlist-num {
		flex-shrink: 0;
		font-size: 1.25rem;
		font-weight: 700;
		color: rgba(167, 139, 250, 0.5);
		font-variant-numeric: tabular-nums;
		min-width: 2rem;
		text-align: right;
	}
	.playlist-article-link {
		flex: 1;
		display: block;
		padding: 1rem 1.25rem;
		background: rgba(30, 41, 59, 0.5);
		border: 1px solid rgba(71, 85, 105, 0.4);
		border-radius: 0.75rem;
		text-decoration: none;
		color: inherit;
		transition: border-color 0.2s ease, background 0.2s ease;
	}
	.playlist-article-link:hover {
		border-color: rgba(139, 92, 246, 0.5);
		background: rgba(30, 41, 59, 0.75);
	}
	.playlist-article-title {
		display: block;
		font-size: 1.05rem;
		font-weight: 600;
		color: #f1f5f9;
		margin-bottom: 0.25rem;
	}
	.playlist-article-excerpt {
		display: block;
		font-size: 0.85rem;
		color: #94a3b8;
		line-height: 1.45;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
	.playlist-article-cta {
		display: inline-block;
		font-size: 0.8rem;
		font-weight: 500;
		color: #a78bfa;
		margin-top: 0.35rem;
	}

	.playlist-youtube-link {
		display: inline-flex;
		align-items: center;
		gap: 0.35rem;
		color: #a78bfa;
		font-weight: 600;
		text-decoration: underline;
		text-underline-offset: 3px;
		font-size: 0.85rem;
	}

	.playlist-youtube-link:hover {
		color: #c4b5fd;
	}

	.playlist-youtube-header-link {
		display: inline-flex;
		align-items: center;
		gap: 0.35rem;
		color: #a78bfa;
		font-weight: 700;
		text-decoration: underline;
		text-underline-offset: 3px;
		font-size: 0.95rem;
		margin-top: 0.5rem;
	}

	.playlist-youtube-header-link:hover {
		color: #c4b5fd;
	}
</style>
