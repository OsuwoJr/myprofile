<svelte:options runes={true} />

<script>
	import { resumeList } from '$lib/resumes.js';
</script>

<svelte:head>
	<title>Resumes | Osuwo Odongo John Frederick</title>
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-12 sm:py-16">
	<div class="text-center mb-10">
		<h1 class="text-3xl sm:text-4xl font-bold text-white poppins mb-2">Role-Specific Resumes</h1>
		<p class="text-slate-300">View on the web or download as PDF. Each CV is tailored to win in its focus area.</p>
	</div>

	<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
		{#each resumeList as item}
			<div class="bg-slate-900/50 border border-violet-800/50 rounded-lg p-6 hover:border-violet-600 transition-all">
				<h2 class="text-xl font-semibold text-violet-400 mb-1">{item.label}</h2>
				<p class="text-sm text-slate-300 mb-4">{item.description}</p>
				<div class="flex flex-wrap gap-3">
					<a
						href="/resumes/{item.id}"
						class="px-4 py-2 rounded-full bg-white text-slate-950 text-sm font-medium hover:border-violet-500 border border-transparent transition-colors"
					>
						View Resume
					</a>
					<a
						href="/resumes/{item.id}?print=1"
						target="_blank"
						rel="noopener noreferrer"
						class="px-4 py-2 rounded-full bg-slate-800 text-white text-sm font-medium border border-violet-700 hover:border-violet-500 transition-colors"
					>
						Download PDF
					</a>
				</div>
				<p class="text-xs text-slate-400 mt-2">“Download PDF” opens the resume and the print dialog — choose “Save as PDF”.</p>
			</div>
		{/each}
	</div>
</div>
