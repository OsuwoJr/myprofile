<svelte:options runes={true} />

<script>
	import { supabase } from '$lib/supabase';
	import { goto } from '$app/navigation';

	let title = $state('');
	let slug = $state('');
	let excerpt = $state('');
	let body = $state('');
	let topic = $state('');
	let published = $state(true);
	let loading = $state(false);
	let error = $state('');

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
		if (!slug.trim()) slugFromTitle();
		const finalSlug =
			slug.trim() ||
			title
				.toLowerCase()
				.replace(/[^a-z0-9]+/g, '-')
				.replace(/^-|-$/g, '') ||
			'article-' + Date.now();
		loading = true;
		error = '';
		const { error: err } = await supabase.from('articles').insert({
			title: title.trim(),
			slug: finalSlug,
			excerpt: excerpt.trim() || null,
			body: body.trim(),
			topic: topic.trim() || null,
			published
		});
		loading = false;
		if (err) {
			error = err.message;
			return;
		}
		goto('/admin/blog');
	}
</script>

<svelte:head>
	<title>New article | Admin</title>
</svelte:head>

<h1 class="text-2xl font-bold text-slate-100 mb-4">New article</h1>
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
			placeholder="auto from title"
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
	<button
		type="submit"
		disabled={loading}
		class="px-4 py-2 rounded-lg bg-violet-600 text-white hover:bg-violet-500 disabled:opacity-50"
	>
		Save article
	</button>
</form>
