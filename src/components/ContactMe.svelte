<svelte:options runes={true} />

<script>
	let { formspreeEndpoint = '' } = $props();
	let meetingName = $state('');
	let meetingEmail = $state('');
	let meetingPreference = $state('google_meet');
	let meetingMessage = $state('');
	let meetingLoading = $state(false);
	let meetingError = $state('');
	let meetingSuccess = $state(false);

	const MEETING_OPTIONS = [
		{ value: 'google_meet', label: 'Google Meet (30 min)' },
		{ value: 'phone', label: 'Phone call' },
		{ value: 'whatsapp', label: 'WhatsApp call/chat' },
		{ value: 'other', label: 'Other (specify in message)' }
	];

	async function submitMeetingRequest(e) {
		e.preventDefault();
		meetingError = '';
		meetingSuccess = false;
		meetingLoading = true;
		const payload = {
			_service: 'meeting',
			name: meetingName,
			email: meetingEmail,
			meeting_preference: meetingPreference,
			message: meetingMessage,
			subject: '30-min meeting request'
		};
		try {
			if (formspreeEndpoint) {
				const res = await fetch(formspreeEndpoint, {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(payload)
				});
				if (!res.ok) throw new Error('Failed to send');
			}
			const apiRes = await fetch('/api/meeting-request', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					name: meetingName.trim(),
					email: meetingEmail.trim(),
					meeting_preference: meetingPreference,
					message: meetingMessage.trim() || null
				})
			});
			const data = await apiRes.json().catch(() => ({}));
			if (!apiRes.ok) {
				// Email may have been sent; still show success and mention admin might not show it yet
				if (formspreeEndpoint) {
					meetingSuccess = true;
					meetingName = '';
					meetingEmail = '';
					meetingMessage = '';
				} else {
					throw new Error(data.error || 'Failed to save request');
				}
			} else {
				meetingSuccess = true;
				meetingName = '';
				meetingEmail = '';
				meetingMessage = '';
			}
		} catch (err) {
			meetingError = err.message || 'Something went wrong. Please try again.';
		} finally {
			meetingLoading = false;
		}
	}
</script>

<section class="py-20 lg:py-32">
	<div class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4 mb-12">
		<h6 class="text-lg sm:text-xl md:text-2xl">Get in touch</h6>
		<h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
			Connect with me <span class="poppins text-violet-400">↓</span>
		</h3>
	</div>

	<div class="max-w-xl mx-auto flex flex-col gap-6">
		<div class="flex flex-col sm:flex-row sm:items-center gap-2 p-4 rounded-lg bg-slate-900/50 border border-violet-800/50 hover:border-violet-600 transition-colors">
			<b class="text-slate-300 sm:w-24 shrink-0">Email</b>
			<a href="mailto:johnfredosuwo@gmail.com" class="text-violet-400 hover:text-violet-300">
				johnfredosuwo@gmail.com
			</a>
		</div>

		<div class="flex flex-col sm:flex-row sm:items-center gap-2 p-4 rounded-lg bg-slate-900/50 border border-violet-800/50 hover:border-violet-600 transition-colors">
			<b class="text-slate-300 sm:w-24 shrink-0">Phone</b>
			<a href="tel:+254790932575" class="text-violet-400 hover:text-violet-300">
				+254 790932575
			</a>
		</div>

		<div class="flex flex-col sm:flex-row sm:items-center gap-2 p-4 rounded-lg bg-slate-900/50 border border-violet-800/50 hover:border-violet-600 transition-colors">
			<b class="text-slate-300 sm:w-24 shrink-0">WhatsApp</b>
			<a href="https://wa.me/254790932575" target="_blank" rel="noopener noreferrer" class="text-violet-400 hover:text-violet-300 inline-flex items-center gap-1">
				Chat on WhatsApp
				<i class="fa-solid fa-arrow-up-right-from-square text-xs"></i>
			</a>
		</div>

		<div class="flex flex-col sm:flex-row sm:items-center gap-2 p-4 rounded-lg bg-slate-900/50 border border-violet-800/50 hover:border-violet-600 transition-colors">
			<b class="text-slate-300 sm:w-24 shrink-0">GitHub</b>
			<a href="https://github.com/OsuwoJr" target="_blank" rel="noopener noreferrer" class="text-violet-400 hover:text-violet-300 inline-flex items-center gap-1">
				OsuwoJr
				<i class="fa-solid fa-arrow-up-right-from-square text-xs"></i>
			</a>
		</div>

		<div class="flex flex-col sm:flex-row sm:items-center gap-2 p-4 rounded-lg bg-slate-900/50 border border-violet-800/50 hover:border-violet-600 transition-colors">
			<b class="text-slate-300 sm:w-24 shrink-0">LinkedIn</b>
			<a href="https://www.linkedin.com/in/JohnFrederickOdongoOsuwo" target="_blank" rel="noopener noreferrer" class="text-violet-400 hover:text-violet-300 inline-flex items-center gap-1">
				JohnFrederickOdongoOsuwo
				<i class="fa-solid fa-arrow-up-right-from-square text-xs"></i>
			</a>
		</div>

		<!-- Request a 30-min meeting -->
		<div class="mt-12 p-6 rounded-xl bg-slate-900/50 border border-violet-800/50">
			<h4 class="text-xl font-semibold text-violet-400 mb-2">Request a 30‑min meeting</h4>
			<p class="text-slate-300 text-sm mb-4">Book a short call via Google Meet, phone, WhatsApp, or your preferred channel.</p>
			{#if meetingSuccess}
				<p class="text-green-400 text-sm">Request sent. I’ll get back to you shortly to confirm the time.</p>
			{:else}
				<form onsubmit={submitMeetingRequest} class="space-y-4">
					<div>
						<label for="meeting-name" class="block text-sm text-slate-400 mb-1">Name</label>
						<input
							id="meeting-name"
							type="text"
							bind:value={meetingName}
							required
							class="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-600 text-slate-100 placeholder-slate-500 focus:border-violet-500"
							placeholder="Your name"
						/>
					</div>
					<div>
						<label for="meeting-email" class="block text-sm text-slate-400 mb-1">Email</label>
						<input
							id="meeting-email"
							type="email"
							bind:value={meetingEmail}
							required
							class="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-600 text-slate-100 placeholder-slate-500 focus:border-violet-500"
							placeholder="you@example.com"
						/>
					</div>
					<div>
						<label for="meeting-pref" class="block text-sm text-slate-400 mb-1">Preferred way to meet</label>
						<select
							id="meeting-pref"
							bind:value={meetingPreference}
							class="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-600 text-slate-100 focus:border-violet-500"
						>
							{#each MEETING_OPTIONS as opt (opt.value)}
								<option value={opt.value}>{opt.label}</option>
							{/each}
						</select>
					</div>
					<div>
						<label for="meeting-msg" class="block text-sm text-slate-400 mb-1">Message (optional)</label>
						<textarea
							id="meeting-msg"
							bind:value={meetingMessage}
							rows="2"
							class="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-600 text-slate-100 placeholder-slate-500 focus:border-violet-500"
							placeholder="Preferred times or topic..."
						></textarea>
					</div>
					{#if meetingError}
						<p class="text-red-400 text-sm">{meetingError}</p>
					{/if}
					<button
						type="submit"
						disabled={meetingLoading}
						class="w-full py-2 rounded-lg bg-violet-600 text-white hover:bg-violet-500 disabled:opacity-50"
					>
						{meetingLoading ? 'Sending…' : 'Send meeting request'}
					</button>
				</form>
			{/if}
		</div>
	</div>
</section>
