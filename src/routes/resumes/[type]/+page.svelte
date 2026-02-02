<svelte:options runes={true} />

<script>
	import { onMount } from 'svelte';
	import ResumeView from '../../../components/ResumeView.svelte';

	let { data } = $props();

	function downloadPdf() {
		window.print();
	}

	onMount(() => {
		const params = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '');
		if (params.get('print') === '1') {
			window.print();
		}
	});
</script>

<svelte:head>
	<title>{data.variant.title} Resume | Osuwo Odongo John Frederick</title>
</svelte:head>

<div class="min-h-screen bg-slate-900 py-8 px-4">
	<div class="no-print flex flex-wrap items-center justify-center gap-4 mb-6">
		<a
			href="/resumes"
			class="px-4 py-2 rounded-full bg-slate-800 text-slate-200 text-sm font-medium border border-violet-700 hover:border-violet-500 transition-colors"
		>
			← All Resumes
		</a>
		<button
			type="button"
			onclick={downloadPdf}
			class="px-4 py-2 rounded-full bg-white text-slate-950 text-sm font-medium hover:border-violet-500 border border-transparent transition-colors"
		>
			Download PDF
		</button>
	</div>
	<p class="no-print text-center text-slate-400 text-sm mb-4">Use “Download PDF” then choose “Save as PDF” in the print dialog.</p>

	<div class="resume-print-wrapper">
		<ResumeView variant={data.variant} />
	</div>
</div>
