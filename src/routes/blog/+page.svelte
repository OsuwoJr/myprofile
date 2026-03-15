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

	/** Split topic string by comma for multiple tag pills; trim and filter empty. */
	function topicTags(topic) {
		if (!topic || typeof topic !== 'string') return [];
		return topic.split(',').map((t) => t.trim()).filter(Boolean);
	}

	function formatDate(iso) {
		return new Date(iso).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'short',
			day: 'numeric'
		});
	}
</script>

<svelte:head>
	<title>Blog | Osuwo Odongo John Frederick</title>
</svelte:head>

<div class="blog-page">
	<header class="blog-header">
		<h1 class="blog-title">Blog & Articles</h1>
		<p class="blog-subtitle">Technical insights, guides, and updates on frontend, SEO, and security.</p>
	</header>

	{#if loading}
		<div class="blog-list" role="status" aria-label="Loading articles">
			{#each [1, 2, 3] as i}
				<div class="blog-card blog-card-skeleton">
					<div class="skeleton-number"></div>
					<div class="skeleton-content">
						<div class="skeleton-line short"></div>
						<div class="skeleton-line long"></div>
						<div class="skeleton-line medium"></div>
						<div class="skeleton-line short"></div>
					</div>
				</div>
			{/each}
		</div>
	{:else if articles.length === 0}
		<div class="blog-empty">
			<p class="text-slate-400">No articles yet. Check back soon.</p>
		</div>
	{:else}
		<p class="mb-4">
			<a href="/blog/playlists" class="text-violet-400 hover:underline text-sm">Browse playlists →</a>
			<span class="text-slate-500 text-sm ml-2">Follow curated reading order (e.g. intro to software engineering, cyber security)</span>
		</p>
		<ol class="blog-list">
			{#each articles as article, index (article.id)}
				<li class="blog-list-item">
					<a
						href="/blog/{article.slug}"
						class="blog-card hover-lift"
					>
						<span class="blog-card-number" aria-hidden="true">
							{String(index + 1).padStart(2, '0')}
						</span>
						<div class="blog-card-body">
							{#if article.topic}
								<div class="blog-tags">
									{#each topicTags(article.topic) as tag}
										<span class="blog-tag">{tag}</span>
									{/each}
								</div>
							{/if}
							<h2 class="blog-card-title">{article.title}</h2>
							{#if article.excerpt}
								<p class="blog-card-excerpt">{article.excerpt}</p>
							{/if}
							<div class="blog-card-meta">
								<time class="blog-card-date" datetime={article.created_at}>
									{formatDate(article.created_at)}
								</time>
								<span class="blog-card-cta">Read article →</span>
							</div>
						</div>
					</a>
				</li>
			{/each}
		</ol>
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
		margin-bottom: 3rem;
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

	.blog-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	.blog-card {
		display: flex;
		gap: 1.25rem;
		align-items: flex-start;
		padding: 1.5rem 1.25rem;
		background: rgba(30, 41, 59, 0.5);
		border: 1px solid rgba(71, 85, 105, 0.4);
		border-radius: 1rem;
		text-decoration: none;
		color: inherit;
		transition: border-color 0.2s ease, background 0.2s ease, transform 0.25s ease, box-shadow 0.25s ease;
	}

	.blog-card:hover {
		border-color: rgba(139, 92, 246, 0.5);
		background: rgba(30, 41, 59, 0.75);
		box-shadow: 0 10px 40px -12px rgba(124, 58, 237, 0.25);
	}

	.blog-card-number {
		flex-shrink: 0;
		font-size: 1.5rem;
		font-weight: 700;
		color: rgba(167, 139, 250, 0.5);
		line-height: 1;
		font-variant-numeric: tabular-nums;
		min-width: 2.25rem;
		text-align: right;
	}

	.blog-card:hover .blog-card-number {
		color: #a78bfa;
	}

	.blog-card-body {
		flex: 1;
		min-width: 0;
	}

	.blog-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.35rem 0.5rem;
		margin-bottom: 0.5rem;
	}

	.blog-tag {
		font-size: 0.7rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: #a78bfa;
		background: rgba(139, 92, 246, 0.15);
		padding: 0.2rem 0.5rem;
		border-radius: 0.25rem;
	}

	.blog-card-title {
		font-size: 1.15rem;
		font-weight: 600;
		color: #f1f5f9;
		line-height: 1.35;
		margin: 0 0 0.5rem;
	}

	.blog-card:hover .blog-card-title {
		color: #e2e8f0;
	}

	.blog-card-excerpt {
		font-size: 0.9rem;
		color: #94a3b8;
		line-height: 1.55;
		margin: 0 0 0.75rem;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.blog-card-meta {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.75rem;
		flex-wrap: wrap;
	}

	.blog-card-date {
		font-size: 0.8rem;
		color: #64748b;
	}

	.blog-card-cta {
		font-size: 0.8rem;
		font-weight: 500;
		color: #a78bfa;
		opacity: 0.9;
	}

	.blog-card:hover .blog-card-cta {
		opacity: 1;
	}

	/* Skeleton loading */
	.blog-card-skeleton {
		pointer-events: none;
		cursor: default;
	}

	.blog-card-skeleton .skeleton-number {
		width: 2.25rem;
		height: 1.5rem;
		background: rgba(71, 85, 105, 0.4);
		border-radius: 0.25rem;
		color: transparent;
	}

	.skeleton-content {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.skeleton-line {
		height: 0.875rem;
		background: rgba(71, 85, 105, 0.35);
		border-radius: 0.25rem;
		animation: skeleton-pulse 1.5s ease-in-out infinite;
	}

	.skeleton-line.short {
		width: 40%;
	}

	.skeleton-line.medium {
		width: 65%;
	}

	.skeleton-line.long {
		width: 95%;
	}

	@keyframes skeleton-pulse {
		0%,
		100% {
			opacity: 0.6;
		}
		50% {
			opacity: 1;
		}
	}

	.blog-empty {
		text-align: center;
		padding: 3rem 1rem;
	}

	@media (max-width: 640px) {
		.blog-page {
			padding: 1.5rem 1rem 3rem;
		}

		.blog-card {
			flex-direction: column;
			gap: 0.75rem;
			padding: 1.25rem 1rem;
		}

		.blog-card-number {
			text-align: left;
			min-width: auto;
		}

		.blog-card-title {
			font-size: 1.05rem;
		}

		.blog-card-excerpt {
			-webkit-line-clamp: 2;
			line-clamp: 2;
		}
	}
</style>
