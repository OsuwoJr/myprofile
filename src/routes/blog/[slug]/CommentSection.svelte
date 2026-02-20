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
	let editingId = $state(null);
	let editingBody = $state('');
	let savingEdit = $state(false);
	let deletingId = $state(null);

	$effect(() => {
		(async () => {
			const {
				data: { user: u }
			} = await supabase.auth.getUser();
			user = u;
		})();
	});

	async function fetchComments() {
		if (!articleId) return;
		const { data } = await supabase
			.from('comments')
			.select(`
        id,
        body,
        created_at,
        user_id,
        profiles!inner(username)
      `)
			.eq('article_id', articleId)
			.order('created_at', { ascending: true });
		comments = (data ?? []).map((c) => ({
			id: c.id,
			body: c.body,
			created_at: c.created_at,
			user_id: c.user_id,
			username: c.profiles?.username ?? 'Anonymous'
		}));
	}

	$effect(() => {
		if (!articleId) return;
		fetchComments();
	});

	function startEdit(comment) {
		editingId = comment.id;
		editingBody = comment.body;
	}

	function cancelEdit() {
		editingId = null;
		editingBody = '';
	}

	async function saveEdit() {
		if (!user || editingId == null) return;
		const text = editingBody.trim();
		if (text.length === 0 || text.length > MAX_LENGTH) return;
		savingEdit = true;
		const { error: err } = await supabase
			.from('comments')
			.update({ body: text })
			.eq('id', editingId)
			.eq('user_id', user.id);
		savingEdit = false;
		if (err) {
			error = err.message;
			return;
		}
		comments = comments.map((c) =>
			c.id === editingId ? { ...c, body: text } : c
		);
		cancelEdit();
	}

	async function deleteComment(comment) {
		if (!user || user.id !== comment.user_id) return;
		if (!confirm('Delete this comment? This cannot be undone.')) return;
		deletingId = comment.id;
		const { error: err } = await supabase
			.from('comments')
			.delete()
			.eq('id', comment.id)
			.eq('user_id', user.id);
		deletingId = null;
		if (err) {
			error = err.message;
			return;
		}
		comments = comments.filter((c) => c.id !== comment.id);
	}

	function canModify(comment) {
		return user && comment.user_id && user.id === comment.user_id;
	}

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
		await fetchComments();
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
			<li class="pl-4 border-l-2 border-slate-700 group/comment">
				<div class="flex items-start justify-between gap-2">
					<div class="min-w-0 flex-1">
						<p class="text-sm text-violet-400 font-medium">{comment.username}</p>
						<p class="text-slate-300 text-sm mt-1">
							{comment.created_at ? new Date(comment.created_at).toLocaleString() : ''}
						</p>
						{#if editingId === comment.id}
							<div class="mt-2">
								<textarea
									bind:value={editingBody}
									maxlength={MAX_LENGTH}
									class="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-600 text-slate-100 text-sm focus:border-violet-500 focus:outline-none"
									rows="2"
									placeholder="Edit comment..."
								></textarea>
								<p class="text-xs text-slate-500 mt-0.5">{editingBody.length}/{MAX_LENGTH}</p>
								<div class="flex gap-2 mt-2">
									<button
										type="button"
										disabled={savingEdit || !editingBody.trim() || editingBody.length > MAX_LENGTH}
										onclick={saveEdit}
										class="px-3 py-1.5 rounded-lg bg-violet-600 text-white text-sm hover:bg-violet-500 disabled:opacity-50"
									>
										{savingEdit ? 'Saving…' : 'Save'}
									</button>
									<button
										type="button"
										disabled={savingEdit}
										onclick={cancelEdit}
										class="px-3 py-1.5 rounded-lg bg-slate-700 text-slate-300 text-sm hover:bg-slate-600 disabled:opacity-50"
									>
										Cancel
									</button>
								</div>
							</div>
						{:else}
							<p class="text-slate-300 mt-1">{comment.body}</p>
						{/if}
					</div>
					{#if canModify(comment) && editingId !== comment.id}
						<div class="flex items-center gap-1 shrink-0 opacity-70 group-hover/comment:opacity-100 transition-opacity">
							<button
								type="button"
								disabled={deletingId != null}
								onclick={() => startEdit(comment)}
								class="p-1.5 rounded text-slate-400 hover:text-violet-400 hover:bg-slate-700/50 focus:outline-none focus:ring-1 focus:ring-violet-500 disabled:opacity-50"
								title="Edit comment"
								aria-label="Edit comment"
							>
								<i class="fa-solid fa-pen text-sm"></i>
							</button>
							<button
								type="button"
								disabled={deletingId != null}
								onclick={() => deleteComment(comment)}
								class="p-1.5 rounded text-slate-400 hover:text-red-400 hover:bg-slate-700/50 focus:outline-none focus:ring-1 focus:ring-red-500 disabled:opacity-50"
								title="Delete comment"
								aria-label="Delete comment"
							>
								<i class="fa-solid fa-trash text-sm"></i>
							</button>
						</div>
					{/if}
				</div>
			</li>
		{/each}
	</ul>
</section>
