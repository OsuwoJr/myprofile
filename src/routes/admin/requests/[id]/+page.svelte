<svelte:options runes={true} />

<script>
	import { supabase } from '$lib/supabase';
	import { goto } from '$app/navigation';

	let { data } = $props();
	let request = $state(null);
	let loading = $state(true);
	let adminQuote = $state('');
	let adminRequirements = $state('');
	let status = $state('new');
	let saving = $state(false);
	let error = $state('');

	$effect(() => {
		const id = data.id;
		(async () => {
			loading = true;
			const { data: row } = await supabase
				.from('service_requests')
				.select('*')
				.eq('id', id)
				.maybeSingle();
			request = row ?? null;
			if (request) {
				adminQuote = request.admin_quote ?? '';
				adminRequirements = request.admin_requirements ?? '';
				status = request.status ?? 'new';
			}
			loading = false;
		})();
	});

	async function save() {
		if (!request) return;
		saving = true;
		error = '';
		const { error: err } = await supabase
			.from('service_requests')
			.update({
				admin_quote: adminQuote.trim() || null,
				admin_requirements: adminRequirements.trim() || null,
				status,
				updated_at: new Date().toISOString()
			})
			.eq('id', request.id);
		saving = false;
		if (err) {
			error = err.message;
			return;
		}
		goto('/admin/requests');
	}
</script>

<svelte:head>
	<title>Request #{data.id?.slice(0, 8)} | Admin</title>
</svelte:head>

{#if loading}
	<p class="text-slate-400">Loading…</p>
{:else if !request}
	<p class="text-slate-400">Request not found.</p>
{:else}
	<div class="space-y-6">
		<p><a href="/admin/requests" class="text-violet-400 hover:underline">← Back to requests</a></p>

		<div class="rounded-lg bg-slate-800/80 border border-slate-700 p-4">
			<h2 class="text-lg font-semibold text-slate-100 mb-3">Client request</h2>
			<dl class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
				<dt class="text-slate-500">Type</dt>
				<dd class="text-slate-200">{request.request_type}</dd>
				<dt class="text-slate-500">Email</dt>
				<dd class="text-slate-200"><a href="mailto:{request.client_email}" class="text-violet-400 hover:underline">{request.client_email}</a></dd>
				<dt class="text-slate-500">Name</dt>
				<dd class="text-slate-200">{request.client_name || '—'}</dd>
				{#if request.service_category}
					<dt class="text-slate-500">Category</dt>
					<dd class="text-slate-200">{request.service_category}</dd>
				{/if}
				{#if request.service_detail}
					<dt class="text-slate-500">Service</dt>
					<dd class="text-slate-200">{request.service_detail}</dd>
				{/if}
				{#if request.example_link}
					<dt class="text-slate-500">Example / reference link</dt>
					<dd class="text-slate-200">
						<a href={request.example_link} target="_blank" rel="noopener noreferrer" class="text-violet-400 hover:underline break-all">{request.example_link}</a>
					</dd>
				{/if}
				{#if request.meeting_preference}
					<dt class="text-slate-500">Meeting preference</dt>
					<dd class="text-slate-200">{request.meeting_preference}</dd>
				{/if}
				{#if request.budget_preference}
					<dt class="text-slate-500">Budget</dt>
					<dd class="text-slate-200">{request.budget_preference}</dd>
				{/if}
				{#if request.timeline}
					<dt class="text-slate-500">Timeline</dt>
					<dd class="text-slate-200">{request.timeline}</dd>
				{/if}
				<dt class="text-slate-500">Created</dt>
				<dd class="text-slate-200">{new Date(request.created_at).toLocaleString()}</dd>
			</dl>
			{#if request.description}
				<div class="mt-3 pt-3 border-t border-slate-700">
					<dt class="text-slate-500 text-sm mb-1">Details / message</dt>
					<dd class="text-slate-300 whitespace-pre-wrap">{request.description}</dd>
				</div>
			{/if}
		</div>

		<form onsubmit={(e) => { e.preventDefault(); save(); }} class="space-y-4">
			<h2 class="text-lg font-semibold text-slate-100">Your response (quote & requirements)</h2>
			<div>
				<label for="admin-quote" class="block text-slate-300 mb-1">Quote / price & summary</label>
				<textarea
					id="admin-quote"
					bind:value={adminQuote}
					rows="4"
					class="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-600 text-slate-100 placeholder-slate-500 focus:border-violet-500"
					placeholder="e.g. KES 50,000 for logo design; 1 round of revisions included."
				></textarea>
			</div>
			<div>
				<label for="admin-requirements" class="block text-slate-300 mb-1">Requirements / scope / next steps</label>
				<textarea
					id="admin-requirements"
					bind:value={adminRequirements}
					rows="6"
					class="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-600 text-slate-100 placeholder-slate-500 focus:border-violet-500"
					placeholder="What you need from them, deliverables, timeline, etc."
				></textarea>
			</div>
			<div>
				<label for="status" class="block text-slate-300 mb-1">Status</label>
				<select
					id="status"
					bind:value={status}
					class="w-full max-w-xs px-4 py-2 rounded-lg bg-slate-800 border border-slate-600 text-slate-100 focus:border-violet-500"
				>
					<option value="new">New</option>
					<option value="quoted">Quoted</option>
					<option value="accepted">Accepted</option>
					<option value="closed">Closed</option>
				</select>
			</div>
			{#if error}
				<p class="text-red-400 text-sm">{error}</p>
			{/if}
			<button
				type="submit"
				disabled={saving}
				class="px-4 py-2 rounded-lg bg-violet-600 text-white hover:bg-violet-500 disabled:opacity-50"
			>
				{saving ? 'Saving…' : 'Save response'}
			</button>
		</form>
	</div>
{/if}
