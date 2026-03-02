<svelte:options runes={true} />

<script lang="ts">
	let { data, children }: { data: { isAdmin: boolean; userEmail: string; pathname: string }; children: any } = $props();

	const navItems = [
		{ label: 'Dashboard', href: '/admin' },
		{ label: 'Blog', href: '/admin/blog' },
		{ label: 'Comments', href: '/admin/comments' },
		{ label: 'Requests', href: '/admin/requests' }
	];

	function isActive(href: string) {
		if (href === '/admin') return data.pathname === '/admin';
		return data.pathname.startsWith(href);
	}
</script>

<div class="flex min-h-[80vh]">
	<aside class="w-52 shrink-0 border-r border-slate-700/60 pr-6 py-8">
		<nav class="flex flex-col gap-1">
			{#each navItems as item}
				<a
					href={item.href}
					class="block py-2 px-3 rounded-md text-sm font-medium transition-colors {isActive(item.href)
						? 'bg-violet-500/20 text-violet-400'
						: 'text-slate-400 hover:text-violet-400 hover:bg-slate-800/50'}"
				>
					{item.label}
				</a>
			{/each}
		</nav>
	</aside>
	<main class="flex-1 min-w-0 max-w-3xl px-6 py-8">
		{@render children?.()}
	</main>
</div>
