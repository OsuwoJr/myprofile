<svelte:options runes={true} />

<script>
	let { topics, activeTopic, onSelect } = $props();
</script>

<div class="flex flex-wrap items-center gap-2" role="group" aria-label="Filter by topic">
	<button
		type="button"
		class="topic-chip min-h-[44px] rounded-full px-4 py-2 text-sm font-medium transition-colors {activeTopic === 'All'
			? 'bg-violet-600 text-white border border-violet-500'
			: 'bg-slate-800/80 text-slate-300 border border-slate-700 hover:border-violet-700/50 hover:text-violet-300'}"
		aria-pressed={activeTopic === 'All'}
		onclick={() => onSelect('All')}
	>
		All
	</button>
	{#each topics as topic (topic)}
		<button
			type="button"
			class="topic-chip min-h-[44px] rounded-full px-4 py-2 text-sm font-medium transition-colors {activeTopic === topic
				? 'bg-violet-600 text-white border border-violet-500'
				: 'bg-slate-800/80 text-slate-300 border border-slate-700 hover:border-violet-700/50 hover:text-violet-300'}"
			aria-pressed={activeTopic === topic}
			onclick={() => onSelect(topic)}
		>
			{topic}
		</button>
	{/each}
</div>
