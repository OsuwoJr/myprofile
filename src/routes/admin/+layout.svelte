<svelte:options runes={true} />

<script>
	import { isAdmin } from '$lib/admin.js';
	import { supabase } from '$lib/supabase';
	import { goto } from '$app/navigation';

	let admin = $state(false);
	let checking = $state(true);
	let signedIn = $state(false);

	$effect(() => {
		let cancelled = false;
		const timeoutId = setTimeout(() => {
			if (cancelled) return;
			checking = false;
			goto('/');
		}, 8000);
		(async () => {
			try {
				const {
					data: { user }
				} = await supabase.auth.getUser();
				if (cancelled) return;
				if (!user) {
					checking = false;
					goto('/auth/signin?redirect=/admin');
					return;
				}
				signedIn = true;
				const isAdminUser = await isAdmin();
				if (cancelled) return;
				admin = isAdminUser;
			} catch (e) {
				if (!cancelled) admin = false;
			} finally {
				if (!cancelled) {
					clearTimeout(timeoutId);
					checking = false;
				}
			}
		})();
		return () => {
			cancelled = true;
			clearTimeout(timeoutId);
		};
	});

	$effect(() => {
		if (checking || !signedIn) return;
		if (!admin) goto('/');
	});
</script>

{#if checking}
	<p class="p-8 text-slate-400">Checking access…</p>
{:else if admin}
	<div class="max-w-3xl mx-auto px-6 py-8">
		<nav class="mb-6">
			<a href="/admin" class="text-violet-400 hover:underline mr-4">Dashboard</a>
			<a href="/admin/blog" class="text-violet-400 hover:underline">Blog</a>
		</nav>
		{@render children?.()}
	</div>
{/if}
