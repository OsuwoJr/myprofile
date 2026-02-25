<svelte:options runes={true} />

<script>
	let { data } = $props();
	const user = $derived(data.user);
	const requests = $derived(data.requests);

	const displayName = $derived(
		user?.user_metadata?.username || user?.email?.split('@')[0] || 'You'
	);

	function statusBadge(status) {
		const map = {
			new: { class: 'bg-slate-600 text-slate-200', label: 'New' },
			quoted: { class: 'bg-violet-600 text-white', label: 'Quoted' },
			accepted: { class: 'bg-green-700 text-green-100', label: 'Accepted' },
			closed: { class: 'bg-slate-500 text-slate-300', label: 'Closed' }
		};
		return map[status] || map.new;
	}
</script>

<svelte:head>
	<title>Dashboard | Osuwo Odongo John Frederick</title>
</svelte:head>

<main class="max-w-3xl mx-auto px-6 py-12">
	<div class="flex flex-col gap-2 relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4 mb-8">
		<h6 class="text-lg sm:text-xl md:text-2xl">Your dashboard</h6>
		<h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
			Hello, <span class="poppins text-violet-400">{displayName}</span>
		</h3>
	</div>

	<p class="text-slate-300 mb-8">
		Here are your service requests and their status. When a quote is ready, you’ll see it below.
	</p>

	{#if requests.length === 0}
		<div class="rounded-lg bg-slate-800/80 border border-slate-700 p-6 text-center text-slate-400">
			<p class="font-medium text-slate-300 mb-1">No requests yet</p>
			<p class="text-sm">Submit a <a href="/request-quote" class="text-violet-400 hover:underline">request for a quote</a> to see it here.</p>
		</div>
	{:else}
		<ul class="space-y-4">
			{#each requests as req (req.id)}
				<li class="rounded-lg bg-slate-800/80 border border-slate-700 overflow-hidden">
					<div class="p-4 border-b border-slate-700 flex flex-wrap items-center gap-2">
						<span class="font-medium text-slate-200">
							{req.service_detail || req.service_category || req.request_type}
						</span>
						<span class="text-xs px-2 py-0.5 rounded {statusBadge(req.status).class}">
							{statusBadge(req.status).label}
						</span>
						<span class="text-slate-500 text-sm ml-auto">
							{new Date(req.created_at).toLocaleDateString()}
						</span>
					</div>

					<!-- Your request (for comparison) -->
					<div class="p-4 border-b border-slate-700 bg-slate-900/40">
						<p class="text-xs font-medium text-slate-500 uppercase tracking-wide mb-3">Your request</p>
						<dl class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm">
							{#if req.service_category}
								<dt class="text-slate-500">Category</dt>
								<dd class="text-slate-300">{req.service_category}</dd>
							{/if}
							{#if req.service_detail}
								<dt class="text-slate-500">Service</dt>
								<dd class="text-slate-300">{req.service_detail}</dd>
							{/if}
							{#if req.meeting_preference}
								<dt class="text-slate-500">Meeting preference</dt>
								<dd class="text-slate-300">{req.meeting_preference}</dd>
							{/if}
							{#if req.budget_preference}
								<dt class="text-slate-500">Budget</dt>
								<dd class="text-slate-300">{req.budget_preference}</dd>
							{/if}
							{#if req.timeline}
								<dt class="text-slate-500">Timeline</dt>
								<dd class="text-slate-300">{req.timeline}</dd>
							{/if}
							{#if req.example_link}
								<dt class="text-slate-500 sm:col-span-2">Reference link</dt>
								<dd class="text-violet-400 sm:col-span-2">
									<a href={req.example_link} target="_blank" rel="noopener noreferrer" class="break-all hover:underline">{req.example_link}</a>
								</dd>
							{/if}
						</dl>
						{#if req.description}
							<div class="mt-3 pt-3 border-t border-slate-700/50">
								<dt class="text-slate-500 text-xs font-medium uppercase tracking-wide mb-1">Details</dt>
								<dd class="text-slate-300 whitespace-pre-wrap text-sm">{req.description}</dd>
							</div>
						{/if}
					</div>

					<!-- Admin response (quote) -->
					{#if req.admin_quote || req.admin_requirements}
						<div class="p-4 space-y-3">
							<p class="text-xs font-medium text-violet-400 uppercase tracking-wide mb-2">Response — quote & requirements</p>
							{#if req.admin_quote}
								<div>
									<p class="text-xs font-medium text-slate-500 uppercase tracking-wide mb-1">Quote / summary</p>
									<p class="text-slate-300 whitespace-pre-wrap text-sm">{req.admin_quote}</p>
								</div>
							{/if}
							{#if req.admin_requirements}
								<div>
									<p class="text-xs font-medium text-slate-500 uppercase tracking-wide mb-1">Requirements / next steps</p>
									<p class="text-slate-300 whitespace-pre-wrap text-sm">{req.admin_requirements}</p>
								</div>
							{/if}
						</div>
					{:else}
						<div class="p-4 text-slate-500 text-sm border-t border-slate-700/50">
							No quote yet. You’ll see the response here once it’s sent.
						</div>
					{/if}
				</li>
			{/each}
		</ul>
	{/if}

	<div class="mt-8">
		<a href="/request-quote" class="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 text-sm font-medium">
			<i class="fa-solid fa-plus"></i>
			New quote request
		</a>
	</div>
</main>
