<svelte:options runes={true} />

<script>
	import { contact, education } from '$lib/resumes.js';

	let { variant } = $props();
</script>

<article class="resume-view max-w-[850px] mx-auto p-6 sm:p-8 bg-white text-slate-800 print:p-6 print:max-w-none">
	<!-- Header -->
	<header class="border-b border-slate-300 pb-3 mb-3">
		<h1 class="text-2xl font-bold text-slate-900 poppins">{variant.title}</h1>
		<p class="text-sm text-slate-600">{variant.subtitle}</p>
		<div class="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-600">
			<a href="mailto:{contact.email}" class="print:text-slate-800">{contact.email}</a>
			<span>{contact.phone}</span>
			<span>{contact.location}</span>
			<a href="https://{contact.github}" target="_blank" rel="noopener noreferrer" class="print:text-slate-800">{contact.github}</a>
			<a href="https://{contact.linkedin}" target="_blank" rel="noopener noreferrer" class="print:text-slate-800">LinkedIn</a>
		</div>
	</header>

	<!-- Summary -->
	<section class="mb-3">
		<h2 class="text-xs font-bold uppercase tracking-wider text-violet-700 mb-1">Summary</h2>
		<p class="text-sm leading-snug">{variant.summary}</p>
	</section>

	<!-- Skills -->
	<section class="mb-3">
		<h2 class="text-xs font-bold uppercase tracking-wider text-violet-700 mb-1">Skills</h2>
		<ul class="text-sm space-y-0.5">
			{#each variant.skills as skill}
				<li class="leading-tight">• {skill}</li>
			{/each}
		</ul>
		<div class="flex flex-wrap gap-1.5 mt-1.5">
			{#each variant.highlights as tag}
				<span class="px-2 py-0.5 bg-slate-100 rounded text-xs">{tag}</span>
			{/each}
		</div>
	</section>

	<!-- Experience -->
	<section class="mb-3">
		<h2 class="text-xs font-bold uppercase tracking-wider text-violet-700 mb-1">Experience</h2>
		<p class="text-xs font-semibold text-slate-700 mb-1">Frontend & Blockchain Developer · Freelance / Independent · 2022 – Present</p>
		<ul class="text-sm space-y-0.5">
			{#each variant.experience as exp}
				<li class="leading-tight">• {exp}</li>
			{/each}
		</ul>
	</section>

	<!-- Education -->
	<section>
		<h2 class="text-xs font-bold uppercase tracking-wider text-violet-700 mb-1">Education</h2>
		<p class="text-sm font-semibold">{education.degree}</p>
		<p class="text-sm text-slate-700">{education.school} · {education.year}</p>
		<p class="text-xs text-slate-600 italic">{education.note}</p>
	</section>
</article>
