<svelte:options runes={true} />

<script lang="ts">
	let { data, children }: { data: { isAdmin: boolean; userEmail: string }; children: any } = $props();
</script>

<div class="max-w-3xl mx-auto px-6 py-8">
	<nav class="mb-6">
		<a href="/admin" class="text-violet-400 hover:underline mr-4">Dashboard</a>
		<a href="/admin/blog" class="text-violet-400 hover:underline">Blog</a>
	</nav>
	{@render children?.()}
</div>
