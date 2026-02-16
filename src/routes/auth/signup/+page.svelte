<svelte:options runes={true} />

<script>
	import { supabase } from '$lib/supabase';
	import { goto } from '$app/navigation';

	let email = $state('');
	let password = $state('');
	let username = $state('');
	let loading = $state(false);
	let oauthLoading = $state(false);
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

	async function signInWithGoogle() {
		error = '';
		message = '';
		oauthLoading = true;
		const redirectTo = typeof window !== 'undefined' ? `${window.location.origin}/auth/callback` : '';
		const { data, error: err } = await supabase.auth.signInWithOAuth({
			provider: 'google',
			options: { redirectTo }
		});
		oauthLoading = false;
		if (err) {
			error = err.message;
			return;
		}
		if (data?.url) window.location.href = data.url;
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

		<div class="relative my-4">
			<span class="absolute inset-0 flex items-center"><span class="w-full border-t border-slate-600"></span></span>
			<span class="relative flex justify-center text-xs uppercase text-slate-500">Or</span>
		</div>
		<button
			type="button"
			disabled={oauthLoading}
			onclick={signInWithGoogle}
			class="w-full py-2 rounded-lg border border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700 disabled:opacity-50 flex items-center justify-center gap-2"
		>
			<svg class="w-5 h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
			{oauthLoading ? 'Redirecting…' : 'Continue with Google'}
		</button>
	</form>
	<p class="mt-4 text-slate-400 text-sm">
		Already have an account? <a href="/auth/signin" class="text-violet-400 hover:underline">Sign in</a>
	</p>
</div>
