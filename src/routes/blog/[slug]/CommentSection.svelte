<svelte:options runes={true} />

<script>
	import { supabase } from '$lib/supabase';

	let { articleId } = $props();
	const MAX_LENGTH = 500;

	let user = $state(null);
	let comments = $state([]);
	let body = $state('');
	let loading = $state(false);
	let error = $state('');

	$effect(() => {
		(async () => {
			const {
				data: { user: u }
			} = await supabase.auth.getUser();
			user = u;
		})();
	});

	$effect(() => {
		if (!articleId) return;
		(async () => {
			const { data } = await supabase
				.from('comments')
				.select(`
          id,
          body,
          created_at,
          profiles!inner(username)
        `)
				.eq('article_id', articleId)
				.order('created_at', { ascending: true });
			comments = (data ?? []).map((c) => ({
				id: c.id,
				body: c.body,
				created_at: c.created_at,
				username: c.profiles?.username ?? 'Anonymous'
			}));
		})();
	});

	async function submitComment() {
		if (!user) return;
		const text = body.trim();
		if (text.length === 0 || text.length > MAX_LENGTH) {
			error =
				text.length > MAX_LENGTH ? `Comment must be ${MAX_LENGTH} characters or less.` : 'Write something.';
			return;
		}
		error = '';
		loading = true;
		const { error: err } = await supabase.from('comments').insert({
			article_id: articleId,
			user_id: user.id,
			body: text
		});
		loading = false;
		if (err) {
			error = err.message;
			return;
		}
		body = '';
		const { data } = await supabase
			.from('comments')
			.select(`
        id,
        body,
        created_at,
        profiles!inner(username)
      `)
			.eq('article_id', articleId)
			.order('created_at', { ascending: false })
			.limit(1)
			.maybeSingle();
		if (data) {
			comments = [
				...comments,
				{
					id: data.id,
					body: data.body,
					created_at: data.created_at,
					username: data.profiles?.username ?? 'Anonymous'
				}
			];
		}
	}
</script>

<section class="mt-12 pt-8 border-t border-slate-700">
	<h2 class="text-xl font-semibold text-slate-100 mb-4">Comments</h2>

	{#if !user}
		<p class="text-slate-400">
			<a href="/auth/signin" class="text-violet-400 hover:underline">Sign in</a> to comment.
		</p>
	{:else}
		<form
			onsubmit={(e) => {
				e.preventDefault();
				submitComment();
			}}
			class="mb-6"
		>
			<textarea
				bind:value={body}
				maxlength={MAX_LENGTH}
				placeholder="Your comment (max {MAX_LENGTH} characters)"
				class="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-600 text-slate-100 placeholder-slate-500 focus:border-violet-500 focus:outline-none"
				rows="3"
			></textarea>
			<p class="text-sm text-slate-500 mt-1">{body.length}/{MAX_LENGTH}</p>
			{#if error}
				<p class="text-red-400 text-sm mt-2">{error}</p>
			{/if}
			<button
				type="submit"
				disabled={loading}
				class="mt-2 px-4 py-2 rounded-lg bg-violet-600 text-white hover:bg-violet-500 disabled:opacity-50"
			>
				{loading ? 'Posting…' : 'Post comment'}
			</button>
		</form>
	{/if}

	<ul class="space-y-4">
		{#each comments as comment (comment.id)}
			<li class="pl-4 border-l-2 border-slate-700">
				<p class="text-sm text-violet-400 font-medium">{comment.username}</p>
				<p class="text-slate-300 text-sm mt-1">
					{comment.created_at ? new Date(comment.created_at).toLocaleString() : ''}
				</p>
				<p class="text-slate-300 mt-1">{comment.body}</p>
			</li>
		{/each}
	</ul>
</section>
