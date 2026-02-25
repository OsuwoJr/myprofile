<svelte:options runes={true} />

<script>
	import { supabase } from '$lib/supabase';

	let requests = $state([]);
	let loading = $state(true);
	let filter = $state('all');

	$effect(() => {
		(async () => {
			loading = true;
			let q = supabase
				.from('service_requests')
				.select('id, client_email, client_name, request_type, service_category, service_detail, status, created_at')
				.order('created_at', { ascending: false });
			if (filter === 'quote') q = q.eq('request_type', 'quote');
			if (filter === 'meeting') q = q.eq('request_type', 'meeting');
			if (filter === 'new') q = q.eq('status', 'new');
			const { data } = await q;
			requests = data ?? [];
			loading = false;
		})();
	});
</script>

<svelte:head>
	<title>Service requests | Admin</title>
</svelte:head>

<h1 class="text-2xl font-bold text-slate-100 mb-4">Service requests</h1>
<p class="text-slate-400 text-sm mb-4">Quote and meeting requests from the site. Open one to add your quote and requirements.</p>

<div class="flex flex-wrap gap-2 mb-4">
	<button
		type="button"
		onclick={() => (filter = 'all')}
		class="px-3 py-1 rounded-lg text-sm {filter === 'all' ? 'bg-violet-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}"
	>
		All
	</button>
	<button
		type="button"
		onclick={() => (filter = 'quote')}
		class="px-3 py-1 rounded-lg text-sm {filter === 'quote' ? 'bg-violet-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}"
	>
		Quotes
	</button>
	<button
		type="button"
		onclick={() => (filter = 'meeting')}
		class="px-3 py-1 rounded-lg text-sm {filter === 'meeting' ? 'bg-violet-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}"
	>
		Meetings
	</button>
	<button
		type="button"
		onclick={() => (filter = 'new')}
		class="px-3 py-1 rounded-lg text-sm {filter === 'new' ? 'bg-violet-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}"
	>
		New only
	</button>
</div>

{#if loading}
	<p class="text-slate-400">Loading…</p>
{:else if requests.length === 0}
	<p class="text-slate-400">No requests yet.</p>
{:else}
	<ul class="space-y-2">
		{#each requests as r (r.id)}
			<li>
				<a
					href="/admin/requests/{r.id}"
					class="block p-4 rounded-lg bg-slate-800/80 border border-slate-700 hover:border-violet-600 transition-colors"
				>
					<div class="flex flex-wrap items-center gap-2">
						<span class="font-medium text-slate-200">{r.client_name || r.client_email}</span>
						<span class="text-slate-500">·</span>
						<span class="text-slate-400 text-sm">{r.client_email}</span>
						<span class="text-slate-500">·</span>
						<span class="text-xs px-2 py-0.5 rounded {r.request_type === 'meeting' ? 'bg-amber-900/50 text-amber-300' : 'bg-violet-900/50 text-violet-300'}">
							{r.request_type}
						</span>
						{#if r.service_detail}
							<span class="text-slate-500 text-sm truncate max-w-[200px]" title={r.service_detail}>
								{r.service_detail}
							</span>
						{/if}
						<span class="ml-auto text-xs px-2 py-0.5 rounded bg-slate-700 text-slate-300">
							{r.status}
						</span>
					</div>
					<p class="text-xs text-slate-500 mt-1">{new Date(r.created_at).toLocaleString()}</p>
				</a>
			</li>
		{/each}
	</ul>
{/if}
