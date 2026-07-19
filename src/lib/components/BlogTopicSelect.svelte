<svelte:options runes={true} />

<script>
	import { supabase } from '$lib/supabase';
	import { uniqueTopics } from '$lib/blog.js';

	let { value = $bindable(''), id = 'topic-select' } = $props();

	let topics = $state([]);
	let loading = $state(true);
	let useNewTopic = $state(false);
	let newTopicName = $state('');

	$effect(() => {
		(async () => {
			loading = true;
			const { data } = await supabase.from('articles').select('topic');
			topics = uniqueTopics(data ?? []);
			loading = false;
		})();
	});

	$effect(() => {
		if (loading || !value) return;
		if (topics.includes(value)) {
			useNewTopic = false;
			newTopicName = '';
		} else {
			useNewTopic = true;
			newTopicName = value;
		}
	});

	function onSelectChange(e) {
		const selected = e.currentTarget.value;
		if (selected === '__new__') {
			useNewTopic = true;
			newTopicName = '';
			value = '';
		} else {
			useNewTopic = false;
			newTopicName = '';
			value = selected;
		}
	}

	$effect(() => {
		if (useNewTopic) {
			value = newTopicName.trim();
		}
	});
</script>

<div class="space-y-2">
	{#if loading}
		<p class="text-sm text-slate-500">Loading topics…</p>
	{:else}
		<select
			{id}
			class="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-600 text-slate-100"
			value={useNewTopic ? '__new__' : value}
			onchange={onSelectChange}
		>
			<option value="">— Select topic —</option>
			{#each topics as name (name)}
				<option value={name}>{name}</option>
			{/each}
			<option value="__new__">+ Add new topic…</option>
		</select>
	{/if}

	{#if useNewTopic}
		<div>
			<label for="topic-new-name" class="block text-slate-400 text-sm mb-1">New topic name</label>
			<input
				id="topic-new-name"
				bind:value={newTopicName}
				class="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-600 text-slate-100"
				placeholder="e.g. Cybersecurity"
			/>
		</div>
	{/if}

	<p class="text-xs text-slate-500">One topic per article. Pick an existing topic or add a new one.</p>
</div>
