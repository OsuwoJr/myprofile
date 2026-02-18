<svelte:options runes={true} />

<script>
	import { supabase } from '$lib/supabase';
	import { goto } from '$app/navigation';
	import { marked } from 'marked';
	import { browser } from '$app/environment';

	let title = $state('');
	let slug = $state('');
	let excerpt = $state('');
	let body = $state('');
	let topic = $state('');
	let published = $state(true);
	let loading = $state(false);
	let error = $state('');
	let previewHtml = $state('');
	let showPreview = $state(false);

	marked.use({ gfm: true, breaks: false });

	function slugFromTitle() {
		slug = title
			.toLowerCase()
			.replace(/[^a-z0-9]+/g, '-')
			.replace(/^-|-$/g, '');
	}

	// Rebuild the preview whenever body changes (only in browser)
	$effect(() => {
		if (!browser || !showPreview) return;
		const src = body;
		(async () => {
			const parsed = await Promise.resolve(marked.parse(src));
			const { default: DOMPurify } = await import('dompurify');
			previewHtml = DOMPurify.sanitize(parsed, { USE_PROFILES: { html: true } });
		})();
	});

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
		<label for="new-title" class="block text-slate-300 mb-1">Title</label>
		<input
			id="new-title"
			bind:value={title}
			oninput={slugFromTitle}
			class="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-600 text-slate-100"
		/>
	</div>
	<div>
		<label for="new-slug" class="block text-slate-300 mb-1">Slug (URL)</label>
		<input
			id="new-slug"
			bind:value={slug}
			class="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-600 text-slate-100"
			placeholder="auto from title"
		/>
	</div>
	<div>
		<label for="new-topic" class="block text-slate-300 mb-1">Topic</label>
		<input
			id="new-topic"
			bind:value={topic}
			class="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-600 text-slate-100"
			placeholder="e.g. SEO, Frontend, Product Design"
		/>
	</div>
	<div>
		<label for="new-excerpt" class="block text-slate-300 mb-1">Excerpt</label>
		<textarea
			id="new-excerpt"
			bind:value={excerpt}
			class="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-600 text-slate-100"
			rows="2"
		></textarea>
	</div>

	<!-- Body + preview -->
	<div>
		<div class="flex items-center justify-between mb-1">
			<label for="new-body" class="text-slate-300">
				Body
				<span class="ml-2 text-xs text-slate-500 font-normal">Supports Markdown — # Heading, **bold**, *italic*, - list, `code`, ```block```</span>
			</label>
			<button
				type="button"
				onclick={() => (showPreview = !showPreview)}
				class="text-xs px-3 py-1 rounded-md border border-slate-600 text-slate-300 hover:border-violet-500 hover:text-violet-400 transition-colors"
			>
				{showPreview ? 'Hide preview' : 'Show preview'}
			</button>
		</div>

		{#if showPreview}
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
				<textarea
					id="new-body"
					bind:value={body}
					class="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-600 text-slate-100 font-mono text-sm leading-relaxed resize-y"
					rows="20"
					required
					placeholder="Write your article in Markdown…"
				></textarea>
				<div class="rounded-lg bg-slate-900 border border-slate-700 px-5 py-4 overflow-y-auto max-h-[520px]">
					<p class="text-xs text-slate-500 mb-3 uppercase tracking-wide font-semibold">Preview</p>
					<div class="blog-body text-slate-300 text-sm">{@html previewHtml}</div>
				</div>
			</div>
		{:else}
			<textarea
				id="new-body"
				bind:value={body}
				class="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-600 text-slate-100 font-mono text-sm leading-relaxed"
				rows="16"
				required
				placeholder="Write your article in Markdown…"
			></textarea>
		{/if}

		<!-- Quick reference -->
		<details class="mt-2">
			<summary class="text-xs text-slate-500 cursor-pointer hover:text-slate-400 select-none">Markdown quick reference</summary>
			<div class="mt-2 rounded-lg bg-slate-900 border border-slate-800 p-4 grid grid-cols-2 gap-x-6 gap-y-1 text-xs font-mono text-slate-400">
				<span><span class="text-slate-300"># Heading 1</span></span>         <span>→ large heading</span>
				<span><span class="text-slate-300">## Heading 2</span></span>        <span>→ section heading</span>
				<span><span class="text-slate-300">**bold text**</span></span>       <span>→ <strong class="text-slate-200">bold text</strong></span>
				<span><span class="text-slate-300">*italic text*</span></span>       <span>→ <em>italic text</em></span>
				<span><span class="text-slate-300">- item</span></span>              <span>→ bullet list</span>
				<span><span class="text-slate-300">1. item</span></span>             <span>→ numbered list</span>
				<span><span class="text-slate-300">`inline code`</span></span>      <span>→ <code class="text-amber-400">inline code</code></span>
				<span><span class="text-slate-300">```lang ... ```</span></span>    <span>→ code block</span>
				<span><span class="text-slate-300">---</span></span>                 <span>→ horizontal divider</span>
				<span><span class="text-slate-300">[text](url)</span></span>        <span>→ hyperlink</span>
			</div>
		</details>
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
		{loading ? 'Saving…' : 'Save article'}
	</button>
</form>

<style>
	.blog-body :global(h1), .blog-body :global(h2), .blog-body :global(h3),
	.blog-body :global(h4), .blog-body :global(h5), .blog-body :global(h6) {
		color: #f1f5f9; font-weight: 700; line-height: 1.3;
		margin-top: 1.25rem; margin-bottom: 0.5rem;
	}
	.blog-body :global(h2) { font-size: 1.2rem; }
	.blog-body :global(h3) { font-size: 1.05rem; }
	.blog-body :global(p)  { margin-bottom: 0.75rem; line-height: 1.7; }
	.blog-body :global(strong) { color: #e2e8f0; font-weight: 700; }
	.blog-body :global(em) { font-style: italic; color: #cbd5e1; }
	.blog-body :global(ul) { list-style-type: disc; padding-left: 1.25rem; margin-bottom: 0.75rem; }
	.blog-body :global(ol) { list-style-type: decimal; padding-left: 1.25rem; margin-bottom: 0.75rem; }
	.blog-body :global(li) { margin-bottom: 0.25rem; line-height: 1.6; }
	.blog-body :global(code) {
		background: rgba(148,163,184,0.1); color: #fbbf24;
		padding: 0.1em 0.35em; border-radius: 0.2rem; font-size: 0.85em;
	}
	.blog-body :global(pre) {
		background: #0f172a; border: 1px solid #334155; border-radius: 0.4rem;
		padding: 0.75rem 1rem; overflow-x: auto; margin-bottom: 1rem;
	}
	.blog-body :global(pre code) { background: transparent; color: #e2e8f0; padding: 0; }
	.blog-body :global(blockquote) {
		border-left: 3px solid #7c3aed; padding: 0.4rem 0.75rem;
		margin: 1rem 0; color: #94a3b8; background: rgba(124,58,237,0.06); border-radius: 0 0.2rem 0.2rem 0;
	}
	.blog-body :global(hr) { border: none; border-top: 1px solid #1e293b; margin: 1.25rem 0; }
	.blog-body :global(a) { color: #a78bfa; text-decoration: underline; text-underline-offset: 2px; }
</style>
