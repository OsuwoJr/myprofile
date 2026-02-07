<svelte:options runes={true} />

<script>
	import { supabase } from '$lib/supabase';
	import { goto } from '$app/navigation';

	let email = $state('');
	let password = $state('');
	let username = $state('');
	let loading = $state(false);
	let error = $state('');
	let message = $state('');

	async function handleSubmit(e) {
		e.preventDefault();
		error = '';
		message = '';
		loading = true;
		const { error: err } = await supabase.auth.signUp({
			email,
			password,
			options: { data: { username: username || undefined } }
		});
		loading = false;
		if (err) {
			error = err.message;
			return;
		}
		message =
			'You’re registered! If email confirmation is enabled, check your inbox (and spam) and click the link before signing in. Otherwise you can sign in now.';
		// Redirect after 4 seconds so the user can read the message
		setTimeout(() => goto('/auth/signin'), 4000);
	}
</script>

<svelte:head>
	<title>Sign up | Blog</title>
</svelte:head>

<div class="max-w-md mx-auto px-6 py-12">
	<h1 class="text-2xl font-bold text-slate-100 mb-6">Sign up</h1>
	<form onsubmit={handleSubmit} class="space-y-4">
		<input
			type="email"
			bind:value={email}
			placeholder="Email"
			required
			class="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-600 text-slate-100"
		/>
		<input
			type="text"
			bind:value={username}
			placeholder="Username (for comments)"
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
		{#if message}
			<div class="rounded-lg bg-green-900/30 border border-green-600/50 p-4 text-green-300 text-sm">
				<p class="font-medium text-green-400 mb-1">Successfully registered</p>
				<p>{message}</p>
				<p class="mt-2">
					<a href="/auth/signin" class="text-violet-400 hover:underline">Sign in now</a>
					<span class="text-slate-500"> (or you’ll be redirected in a few seconds)</span>
				</p>
			</div>
		{/if}
		<button
			type="submit"
			disabled={loading}
			class="w-full py-2 rounded-lg bg-violet-600 text-white hover:bg-violet-500 disabled:opacity-50"
		>
			{loading ? 'Signing up…' : 'Sign up'}
		</button>
	</form>
	<p class="mt-4 text-slate-400 text-sm">
		Already have an account? <a href="/auth/signin" class="text-violet-400 hover:underline">Sign in</a>
	</p>
</div>
