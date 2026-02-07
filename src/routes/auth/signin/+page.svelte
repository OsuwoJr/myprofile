<svelte:options runes={true} />

<script>
	import { supabase } from '$lib/supabase';
	import { goto } from '$app/navigation';

	let email = $state('');
	let password = $state('');
	let loading = $state(false);
	let error = $state('');

	async function handleSubmit(e) {
		e.preventDefault();
		error = '';
		loading = true;
		const { error: err } = await supabase.auth.signInWithPassword({ email, password });
		loading = false;
		if (err) {
			error = err.message;
			return;
		}
		goto('/blog');
	}
</script>

<svelte:head>
	<title>Sign in | Blog</title>
</svelte:head>

<div class="max-w-md mx-auto px-6 py-12">
	<h1 class="text-2xl font-bold text-slate-100 mb-6">Sign in</h1>
	<form onsubmit={handleSubmit} class="space-y-4">
		<input
			type="email"
			bind:value={email}
			placeholder="Email"
			required
			class="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-600 text-slate-100"
		/>
		<input
			type="password"
			bind:value={password}
			placeholder="Password"
			required
			class="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-600 text-slate-100"
		/>
		{#if error}
			<p class="text-red-400 text-sm">{error}</p>
		{/if}
		<button
			type="submit"
			disabled={loading}
			class="w-full py-2 rounded-lg bg-violet-600 text-white hover:bg-violet-500 disabled:opacity-50"
		>
			{loading ? 'Signing in…' : 'Sign in'}
		</button>
	</form>
	<p class="mt-4 text-slate-400 text-sm">
		No account? <a href="/auth/signup" class="text-violet-400 hover:underline">Sign up</a>
	</p>
</div>
