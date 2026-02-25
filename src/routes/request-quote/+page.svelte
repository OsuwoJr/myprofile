<svelte:options runes={true} />

<script>
	import { supabase } from '$lib/supabase';
	import { SERVICE_CATEGORIES } from '$lib/service-options.js';

	let { data } = $props();
	let categoryId = $state('');
	let detailId = $state('');
	let description = $state('');
	let exampleLink = $state('');
	let budgetPreference = $state('');
	let timeline = $state('');
	let loading = $state(false);
	let error = $state('');
	let success = $state(false);

	const formspreeEndpoint = $derived(data.formspreeEndpoint);
	const user = $derived(data.user);

	const currentOptions = $derived(
		SERVICE_CATEGORIES.find((c) => c.id === categoryId)?.options ?? []
	);

	async function handleSubmit(e) {
		e.preventDefault();
		error = '';
		success = false;
		if (!formspreeEndpoint) {
			error = 'Form is not configured. Please set PUBLIC_FORMSPREE_ENDPOINT.';
			return;
		}
		loading = true;

		const categoryLabel = SERVICE_CATEGORIES.find((c) => c.id === categoryId)?.label ?? categoryId;
		const detailLabel =
			currentOptions.find((o) => o.id === detailId)?.label ?? detailId;

		const payload = {
			_service: 'quote',
			email: user.email,
			name: user.user_metadata?.username || user.email?.split('@')[0],
			service_category: categoryLabel,
			service_detail: detailLabel,
			description,
			example_link: exampleLink.trim() || undefined,
			budget_preference: budgetPreference,
			timeline,
			subject: `Quote request: ${detailLabel}`
		};

		try {
			const [formspreeRes, dbRes] = await Promise.all([
				fetch(formspreeEndpoint, {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(payload)
				}),
				supabase.from('service_requests').insert({
					user_id: user.id,
					client_email: user.email,
					client_name: user.user_metadata?.username || user.email?.split('@')[0] || null,
					request_type: 'quote',
					service_category: categoryLabel,
					service_detail: detailLabel,
					description: description || null,
					example_link: exampleLink.trim() || null,
					budget_preference: budgetPreference || null,
					timeline: timeline || null,
					status: 'new'
				})
			]);

			if (!formspreeRes.ok) {
				throw new Error('Failed to send email notification.');
			}
			if (dbRes.error) {
				throw new Error(dbRes.error.message || 'Failed to save request.');
			}
			success = true;
			description = '';
			exampleLink = '';
			budgetPreference = '';
			timeline = '';
			categoryId = '';
			detailId = '';
		} catch (err) {
			error = err.message || 'Something went wrong. Please try again.';
		} finally {
			loading = false;
		}
	}
</script>

<svelte:head>
	<title>Request a quote | Osuwo Odongo John Frederick</title>
</svelte:head>

<main class="max-w-2xl mx-auto px-6 py-12">
	<div class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4 mb-8">
		<h6 class="text-lg sm:text-xl md:text-2xl">Get a quote</h6>
		<h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
			Request a <span class="poppins text-violet-400">service quote</span>
		</h3>
	</div>

	<p class="text-slate-300 text-center mb-8">
		From logo design and SEO audits to full project quotes—tell me what you need and I’ll respond with a quote and requirements.
	</p>

	{#if success}
		<div class="rounded-lg bg-green-900/30 border border-green-600/50 p-6 text-green-300">
			<p class="font-medium text-green-400">Request sent</p>
			<p class="mt-1">You’ll receive a reply with a quote and requirements. You can also check your request status from the admin side.</p>
		</div>
	{:else}
		<form onsubmit={handleSubmit} class="space-y-6">
			<div>
				<label for="category" class="block text-sm font-medium text-slate-300 mb-2">Service category</label>
				<select
					id="category"
					bind:value={categoryId}
					required
					class="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-600 text-slate-100 focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
				>
					<option value="">Select category</option>
					{#each SERVICE_CATEGORIES as cat (cat.id)}
						<option value={cat.id}>{cat.label}</option>
					{/each}
				</select>
			</div>

			{#if currentOptions.length > 0}
				<div>
					<label for="detail" class="block text-sm font-medium text-slate-300 mb-2">Specific service</label>
					<select
						id="detail"
						bind:value={detailId}
						required
						class="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-600 text-slate-100 focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
					>
						<option value="">Select service</option>
						{#each currentOptions as opt (opt.id)}
							<option value={opt.id}>{opt.label}</option>
						{/each}
					</select>
				</div>
			{/if}

			<div>
				<label for="description" class="block text-sm font-medium text-slate-300 mb-2">Details</label>
				<textarea
					id="description"
					bind:value={description}
					rows="4"
					placeholder="Describe your project or requirements..."
					class="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-600 text-slate-100 placeholder-slate-500 focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
				></textarea>
			</div>

			<div>
				<label for="example-link" class="block text-sm font-medium text-slate-300 mb-2">
					Example website / reference link <span class="text-slate-500 font-normal">(optional)</span>
				</label>
				<input
					id="example-link"
					type="text"
					inputmode="url"
					bind:value={exampleLink}
					placeholder="https://example.com — a site close to what you want, or the exact one to replicate"
					class="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-600 text-slate-100 placeholder-slate-500 focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
				/>
			</div>

			<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
				<div>
					<label for="budget" class="block text-sm font-medium text-slate-300 mb-2">Budget (optional)</label>
					<input
						id="budget"
						type="text"
						bind:value={budgetPreference}
						placeholder="e.g. KES 50,000 or flexible"
						class="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-600 text-slate-100 placeholder-slate-500 focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
					/>
				</div>
				<div>
					<label for="timeline" class="block text-sm font-medium text-slate-300 mb-2">Timeline (optional)</label>
					<input
						id="timeline"
						type="text"
						bind:value={timeline}
						placeholder="e.g. 2 weeks or ASAP"
						class="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-600 text-slate-100 placeholder-slate-500 focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
					/>
				</div>
			</div>

			{#if error}
				<p class="text-red-400 text-sm">{error}</p>
			{/if}

			<button
				type="submit"
				disabled={loading}
				class="w-full py-3 rounded-lg bg-violet-600 text-white font-medium hover:bg-violet-500 disabled:opacity-50 transition-colors"
			>
				{loading ? 'Sending…' : 'Send request'}
			</button>
		</form>
	{/if}
</main>
