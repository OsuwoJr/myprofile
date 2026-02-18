<svelte:options runes={true} />

<script>
	import { supabase } from '$lib/supabase';

	let email = $state('');
	let loading = $state(false);
	let error = $state('');
	let success = $state(false);

	async function handleSubmit(e) {
		e.preventDefault();
		error = '';
		success = false;
		loading = true;
		const redirectTo =
			typeof window !== 'undefined' ? `${window.location.origin}/auth/reset-password` : '';
		const { error: err } = await supabase.auth.resetPasswordForEmail(email, {
			redirectTo
		});
		loading = false;
		if (err) {
			error = err.message;
			return;
		}
		success = true;
	}
</script>

<svelte:head>
	<title>Forgot password | Blog</title>
</svelte:head>

<div class="max-w-md mx-auto px-6 py-12">
	<h1 class="text-2xl font-bold text-slate-100 mb-2">Forgot password</h1>
	<p class="text-slate-400 text-sm mb-6">
		Enter the email you use to sign in. We’ll send you a link to reset your password.
	</p>
	{#if success}
		<div class="rounded-lg bg-green-900/30 border border-green-600/50 p-4 text-green-300 text-sm space-y-2">
			<p class="font-medium text-green-400">Check your email</p>
			<p>
				If an account exists for <strong class="text-slate-200">{email}</strong>, you’ll receive a link to
				reset your password. Check your spam folder if you don’t see it.
			</p>
			<p class="pt-2">
				<a href="/auth/signin" class="text-violet-400 hover:underline">Back to sign in</a>
			</p>
		</div>
	{:else}
		<form onsubmit={handleSubmit} class="space-y-4">
			<input
				type="email"
				bind:value={email}
				placeholder="Email"
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
				{loading ? 'Sending…' : 'Send reset link'}
			</button>
		</form>
		<p class="mt-4 text-slate-400 text-sm">
			<a href="/auth/signin" class="text-violet-400 hover:underline">Back to sign in</a>
		</p>
	{/if}
</div>
