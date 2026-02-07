<svelte:options runes={true} />

<script>
	import { supabase } from '$lib/supabase';
	import { goto } from '$app/navigation';

	let { data } = $props();
	let article = $state(null);
	let loading = $state(true);
	let title = $state('');
	let slug = $state('');
	let excerpt = $state('');
	let body = $state('');
	let topic = $state('');
	let published = $state(true);
	let saving = $state(false);
	let error = $state('');

	$effect(() => {
		const id = data.id;
		(async () => {
			loading = true;
			const { data: row } = await supabase.from('articles').select('*').eq('id', id).maybeSingle();
			article = row ?? null;
			if (article) {
				title = article.title ?? '';
				slug = article.slug ?? '';
				excerpt = article.excerpt ?? '';
				body = article.body ?? '';
				topic = article.topic ?? '';
				published = article.published ?? true;
			}
			loading = false;
		})();
	});

	function slugFromTitle() {
		slug = title
			.toLowerCase()
			.replace(/[^a-z0-9]+/g, '-')
			.replace(/^-|-$/g, '');
	}

	async function save() {
		if (!title.trim()) {
			error = 'Title is required';
			return;
		}
		if (!article) return;
		if (!slug.trim()) slugFromTitle();
		const finalSlug =
			slug.trim() ||
			title
				.toLowerCase()
				.replace(/[^a-z0-9]+/g, '-')
				.replace(/^-|-$/g, '') ||
			'article-' + Date.now();
		saving = true;
		error = '';
		const { error: err } = await supabase
			.from('articles')
			.update({
				title: title.trim(),
				slug: finalSlug,
				excerpt: excerpt.trim() || null,
				body: body.trim(),
				topic: topic.trim() || null,
				published,
				updated_at: new Date().toISOString()
			})
			.eq('id', article.id);
		saving = false;
		if (err) {
			error = err.message;
			return;
		}
		goto('/admin/blog');
	}

	async function remove() {
		if (!article || !confirm('Delete this article? This cannot be undone.')) return;
		saving = true;
		error = '';
		const { error: err } = await supabase.from('articles').delete().eq('id', article.id);
		saving = false;
		if (err) {
			error = err.message;
			return;
		}
		goto('/admin/blog');
	}
</script>

<svelte:head>
	<title>Edit article | Admin</title>
</svelte:head>

{#if loading}
	<p class="text-slate-400">Loading…</p>
{:else if !article}
	<p class="text-slate-400">Article not found.</p>
{:else}
	<h1 class="text-2xl font-bold text-slate-100 mb-4">Edit article</h1>
	<form
		onsubmit={(e) => {
			e.preventDefault();
			save();
		}}
		class="space-y-4"
	>
		<div>
			<label class="block text-slate-300 mb-1">Title</label>
			<input
				bind:value={title}
				oninput={slugFromTitle}
				class="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-600 text-slate-100"
			/>
		</div>
		<div>
			<label class="block text-slate-300 mb-1">Slug (URL)</label>
			<input
				bind:value={slug}
				class="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-600 text-slate-100"
			/>
		</div>
		<div>
			<label class="block text-slate-300 mb-1">Topic</label>
			<input
				bind:value={topic}
				class="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-600 text-slate-100"
				placeholder="e.g. SEO, Frontend, Product Design"
			/>
		</div>
		<div>
			<label class="block text-slate-300 mb-1">Excerpt</label>
			<textarea
				bind:value={excerpt}
				class="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-600 text-slate-100"
				rows="2"
			></textarea>
		</div>
		<div>
			<label class="block text-slate-300 mb-1">Body</label>
			<textarea
				bind:value={body}
				class="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-600 text-slate-100"
				rows="12"
				required
			></textarea>
		</div>
		<label class="flex items-center gap-2 text-slate-300">
			<input type="checkbox" bind:checked={published} />
			Published
		</label>
		{#if error}
			<p class="text-red-400">{error}</p>
		{/if}
		<div class="flex gap-3">
			<button
				type="submit"
				disabled={saving}
				class="px-4 py-2 rounded-lg bg-violet-600 text-white hover:bg-violet-500 disabled:opacity-50"
			>
				{saving ? 'Saving…' : 'Save changes'}
			</button>
			<button
				type="button"
				disabled={saving}
				onclick={remove}
				class="px-4 py-2 rounded-lg bg-red-900/80 text-red-200 hover:bg-red-800 disabled:opacity-50"
			>
				Delete article
			</button>
		</div>
	</form>
{/if}
