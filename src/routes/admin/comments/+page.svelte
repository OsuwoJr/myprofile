<svelte:options runes={true} />

<script>
	import { supabase } from '$lib/supabase';

	let comments = $state([]);
	let loading = $state(true);

	$effect(() => {
		(async () => {
			loading = true;
			const { data } = await supabase
				.from('comments')
				.select(`
					id,
					body,
					created_at,
					user_id,
					article_id,
					profiles(username),
					articles(id, title, slug)
				`)
				.order('created_at', { ascending: false });
			comments = (data ?? []).map((c) => ({
				id: c.id,
				body: c.body,
				created_at: c.created_at,
				user_id: c.user_id,
				article_id: c.article_id,
				username: c.profiles?.username ?? 'Anonymous',
				article_title: c.articles?.title ?? '(Unknown post)',
				article_slug: c.articles?.slug ?? '',
				article_id: c.articles?.id
			}));
			loading = false;
		})();
	});
</script>

<svelte:head>
	<title>Comments | Admin</title>
</svelte:head>

<h1 class="text-2xl font-bold text-slate-100 mb-4">Comments on blog posts</h1>
<p class="text-slate-400 text-sm mb-4">All comments left on your articles. Click an article to edit it in the Blog section.</p>

{#if loading}
	<p class="text-slate-400">Loading comments…</p>
{:else if comments.length === 0}
	<p class="text-slate-400">No comments yet.</p>
{:else}
	<ul class="space-y-4">
		{#each comments as c (c.id)}
			<li class="p-4 rounded-lg bg-slate-800/60 border border-slate-700">
				<div class="flex flex-wrap items-center gap-2 text-sm mb-2">
					<span class="font-medium text-violet-400">{c.username}</span>
					<span class="text-slate-500">·</span>
					<span class="text-slate-500">{new Date(c.created_at).toLocaleString()}</span>
					{#if c.article_id}
						<span class="text-slate-500">·</span>
						<a
							href="/blog/{c.article_slug}"
							target="_blank"
							rel="noopener noreferrer"
							class="text-violet-400 hover:underline truncate max-w-[200px]"
							title={c.article_title}
						>
							{c.article_title}
						</a>
						<a
							href="/admin/blog/{c.article_id}"
							class="text-slate-400 hover:text-violet-400 text-xs ml-1"
							title="Edit post"
						>
							Edit post
						</a>
					{:else}
						<span class="text-amber-400/90">(post may have been deleted)</span>
					{/if}
				</div>
				<p class="text-slate-300 text-sm whitespace-pre-wrap break-words">{c.body}</p>
			</li>
		{/each}
	</ul>
{/if}
