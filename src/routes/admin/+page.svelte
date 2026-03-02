<svelte:options runes={true} />

<svelte:head>
	<title>Admin | Dashboard</title>
</svelte:head>

<div class="space-y-6">
	<div>
		<h1 class="text-2xl font-bold text-slate-100">Dashboard</h1>
		<p class="text-slate-400 mt-1">Manage your site from here.</p>
	</div>

	<div class="grid gap-4 sm:grid-cols-3 max-w-3xl">
		<a
			href="/admin/blog"
			class="block rounded-lg border border-slate-600/60 bg-slate-800/40 p-4 transition-colors hover:border-violet-500/50 hover:bg-slate-800/70"
		>
			<span class="font-medium text-slate-100">Blog</span>
			<p class="text-sm text-slate-400 mt-1">Create and edit articles.</p>
		</a>
		<a
			href="/admin/comments"
			class="block rounded-lg border border-slate-600/60 bg-slate-800/40 p-4 transition-colors hover:border-violet-500/50 hover:bg-slate-800/70"
		>
			<span class="font-medium text-slate-100">Comments</span>
			<p class="text-sm text-slate-400 mt-1">View comments on your blog posts.</p>
		</a>
		<a
			href="/admin/requests"
			class="block rounded-lg border border-slate-600/60 bg-slate-800/40 p-4 transition-colors hover:border-violet-500/50 hover:bg-slate-800/70"
		>
			<span class="font-medium text-slate-100">Requests</span>
			<p class="text-sm text-slate-400 mt-1">View and manage contact requests.</p>
		</a>
	</div>
</div>
