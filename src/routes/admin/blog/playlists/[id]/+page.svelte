<svelte:options runes={true} />

<script>
	import { supabase } from '$lib/supabase';
	import { goto } from '$app/navigation';

	let { data } = $props();
	let playlist = $state(null);
	let items = $state([]);
	let allArticles = $state([]);
	let title = $state('');
	let slug = $state('');
	let description = $state('');
	let loading = $state(true);
	let saving = $state(false);
	let error = $state('');
	let dragId = $state(null);
	let addArticleId = $state('');

	function slugFromTitle() {
		slug = title
			.toLowerCase()
			.replace(/[^a-z0-9]+/g, '-')
			.replace(/^-|-$/g, '');
	}

	$effect(() => {
		const id = data.id;
		(async () => {
			loading = true;
			error = '';
			const [playlistRes, itemsRes, articlesRes] = await Promise.all([
				supabase.from('blog_playlists').select('*').eq('id', id).maybeSingle(),
				supabase
					.from('blog_playlist_items')
					.select('id, article_id, position, articles(id, title, slug)')
					.eq('playlist_id', id)
					.order('position', { ascending: true }),
				supabase.from('articles').select('id, title, slug').order('created_at', { ascending: false })
			]);
			playlist = playlistRes.data ?? null;
			items = (itemsRes.data ?? []).map((row) => ({
				id: row.id,
				article_id: row.article_id,
				position: row.position,
				title: row.articles?.title ?? '',
				slug: row.articles?.slug ?? ''
			}));
			allArticles = articlesRes.data ?? [];
			if (playlist) {
				title = playlist.title ?? '';
				slug = playlist.slug ?? '';
				description = playlist.description ?? '';
			}
			loading = false;
		})();
	});

	const itemIds = $derived(items.map((i) => i.article_id));
	const articlesNotInPlaylist = $derived(allArticles.filter((a) => !itemIds.includes(a.id)));

	async function saveMeta() {
		if (!playlist) return;
		saving = true;
		error = '';
		const finalSlug = slug.trim() || title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'playlist';
		const { error: err } = await supabase
			.from('blog_playlists')
			.update({
				title: title.trim(),
				slug: finalSlug,
				description: description.trim() || null
			})
			.eq('id', playlist.id);
		saving = false;
		if (err) {
			error = err.message;
			return;
		}
		playlist = { ...playlist, title: title.trim(), slug: slug.trim(), description: description.trim() || null };
	}

	async function addArticle() {
		if (!playlist || !addArticleId) return;
		const pos = items.length;
		const art = allArticles.find((a) => a.id === addArticleId);
		const { data: row, error: err } = await supabase
			.from('blog_playlist_items')
			.insert({
				playlist_id: playlist.id,
				article_id: addArticleId,
				position: pos
			})
			.select('id, article_id, position')
			.single();
		if (err) {
			error = err.message;
			return;
		}
		items = [...items, { id: row.id, article_id: row.article_id, position: row.position, title: art?.title ?? '', slug: art?.slug ?? '' }];
		addArticleId = '';
	}

	async function removeItem(item) {
		if (!playlist) return;
		const { error: err } = await supabase.from('blog_playlist_items').delete().eq('id', item.id);
		if (err) {
			error = err.message;
			return;
		}
		items = items.filter((i) => i.id !== item.id);
		// Re-number positions
		await persistOrder();
	}

	function moveItem(fromIndex, toIndex) {
		if (toIndex < 0 || toIndex >= items.length) return;
		const next = [...items];
		const [removed] = next.splice(fromIndex, 1);
		next.splice(toIndex, 0, removed);
		items = next.map((it, i) => ({ ...it, position: i }));
		persistOrder();
	}

	async function persistOrder() {
		if (!playlist || items.length === 0) return;
		saving = true;
		for (let i = 0; i < items.length; i++) {
			await supabase.from('blog_playlist_items').update({ position: i }).eq('id', items[i].id);
		}
		items = items.map((it, i) => ({ ...it, position: i }));
		saving = false;
	}

	function handleDragStart(e, item) {
		dragId = item.id;
		e.dataTransfer.effectAllowed = 'move';
		e.dataTransfer.setData('text/plain', item.id);
	}

	function handleDragOver(e) {
		e.preventDefault();
		e.dataTransfer.dropEffect = 'move';
	}

	function handleDrop(e, targetItem) {
		e.preventDefault();
		if (!dragId || dragId === targetItem.id) return;
		const fromIdx = items.findIndex((i) => i.id === dragId);
		const toIdx = items.findIndex((i) => i.id === targetItem.id);
		if (fromIdx === -1 || toIdx === -1) return;
		moveItem(fromIdx, toIdx);
		dragId = null;
	}
</script>

<svelte:head>
	<title>Edit playlist | Admin – Blog</title>
</svelte:head>

<div class="max-w-2xl">
	<p class="mb-4">
		<a href="/admin/blog/playlists" class="text-slate-400 hover:text-slate-200 text-sm">← Playlists</a>
	</p>

	{#if loading}
		<p class="text-slate-400">Loading…</p>
	{:else if !playlist}
		<p class="text-slate-400">Playlist not found.</p>
		<a href="/admin/blog/playlists" class="text-violet-400 hover:underline">Back to playlists</a>
	{:else}
		<div>
		<h1 class="text-2xl font-bold text-slate-100 mb-4">Edit playlist</h1>
		{#if error}
			<p class="text-amber-400 text-sm mb-4">{error}</p>
		{/if}

		<div class="space-y-4 mb-8">
			<div>
				<label for="pl-title" class="block text-slate-300 text-sm mb-1">Title</label>
				<input
					id="pl-title"
					type="text"
					bind:value={title}
					onblur={slugFromTitle}
					class="w-full bg-slate-800 border border-slate-600 rounded px-3 py-2 text-slate-100"
					placeholder="e.g. Introduction to software engineering"
				/>
			</div>
			<div>
				<label for="pl-slug" class="block text-slate-300 text-sm mb-1">Slug (URL)</label>
				<input
					id="pl-slug"
					type="text"
					bind:value={slug}
					class="w-full bg-slate-800 border border-slate-600 rounded px-3 py-2 text-slate-100"
					placeholder="introduction-to-software-engineering"
				/>
			</div>
			<div>
				<label for="pl-desc" class="block text-slate-300 text-sm mb-1">Description (optional)</label>
				<textarea
					id="pl-desc"
					bind:value={description}
					rows="2"
					class="w-full bg-slate-800 border border-slate-600 rounded px-3 py-2 text-slate-100"
					placeholder="A short description for readers"
				></textarea>
			</div>
			<button
				type="button"
				onclick={saveMeta}
				disabled={saving}
				class="px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white rounded text-sm disabled:opacity-50"
			>
				{saving ? 'Saving…' : 'Save title & description'}
			</button>
		</div>

		<h2 class="text-lg font-semibold text-slate-100 mb-2">Articles in this playlist</h2>
		<p class="text-slate-400 text-sm mb-3">Drag to reorder. Readers will see this order.</p>

		<ul class="space-y-1 mb-6" role="list">
			{#each items as item, index (item.id)}
				<li
					class="flex items-center gap-2 py-2 px-3 rounded bg-slate-800/60 border border-slate-700/60 cursor-grab active:cursor-grabbing"
					draggable="true"
					ondragstart={(e) => handleDragStart(e, item)}
					ondragover={handleDragOver}
					ondrop={(e) => handleDrop(e, item)}
				>
					<span class="text-slate-500 select-none" aria-hidden="true">⋮⋮</span>
					<span class="text-slate-400 text-sm tabular-nums w-6">{index + 1}.</span>
					<a href="/blog/{item.slug}" target="_blank" rel="noopener noreferrer" class="text-violet-400 hover:underline flex-1 truncate">
						{item.title}
					</a>
					<button
						type="button"
						onclick={() => removeItem(item)}
						class="text-slate-500 hover:text-red-400 text-sm"
						title="Remove from playlist"
					>
						Remove
					</button>
				</li>
			{/each}
		</ul>

		<div class="flex flex-wrap items-end gap-2">
			<label for="add-article" class="text-slate-300 text-sm">Add article</label>
			<select
				id="add-article"
				bind:value={addArticleId}
				class="bg-slate-800 border border-slate-600 rounded px-3 py-2 text-slate-100 min-w-[200px]"
			>
				<option value="">Select an article…</option>
				{#each articlesNotInPlaylist as a (a.id)}
					<option value={a.id}>{a.title}</option>
				{/each}
			</select>
			<button
				type="button"
				onclick={addArticle}
				disabled={!addArticleId}
				class="px-4 py-2 bg-slate-600 hover:bg-slate-500 text-white rounded text-sm disabled:opacity-50 disabled:cursor-not-allowed"
			>
				Add
			</button>
		</div>
		{#if articlesNotInPlaylist.length === 0 && allArticles.length > 0}
			<p class="text-slate-500 text-sm mt-2">All articles are already in this playlist.</p>
		{/if}
		</div>
	{/if}
</div>
