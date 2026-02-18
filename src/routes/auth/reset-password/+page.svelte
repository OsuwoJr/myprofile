<svelte:options runes={true} />

<script>
	import { onMount } from 'svelte';
	import { supabase } from '$lib/supabase';
	import { goto } from '$app/navigation';

	let password = $state('');
	let confirmPassword = $state('');
	let loading = $state(false);
	let error = $state('');
	let isRecovery = $state(false);
	let checked = $state(false);

	onMount(() => {
		// Supabase puts recovery tokens in the URL hash; the client establishes session from it and fires PASSWORD_RECOVERY.
		// Subscribe first so we don't miss the event, then getSession() to trigger hash processing.
		const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
			if (event === 'PASSWORD_RECOVERY') {
				isRecovery = true;
			}
			checked = true;
		});

		supabase.auth.getSession().then(({ data: { session } }) => {
			// If hash has type=recovery, we have a valid recovery link (session may exist after hash is processed)
			const hash = typeof window !== 'undefined' ? window.location.hash : '';
			if (hash.includes('type=recovery') && session) {
				isRecovery = true;
			}
			checked = true;
		});

		return () => subscription.unsubscribe();
	});

	async function handleSubmit(e) {
		e.preventDefault();
		error = '';
		if (password !== confirmPassword) {
			error = 'Passwords do not match';
			return;
		}
		if (password.length < 6) {
			error = 'Password should be at least 6 characters';
			return;
		}
		loading = true;
		const { error: err } = await supabase.auth.updateUser({ password });
		loading = false;
		if (err) {
			error = err.message;
			return;
		}
		goto(
			'/auth/signin?message=' +
				encodeURIComponent('Password updated. You can sign in with your new password.')
		);
	}
</script>

<svelte:head>
	<title>Set new password | Blog</title>
</svelte:head>

<div class="max-w-md mx-auto px-6 py-12">
	<h1 class="text-2xl font-bold text-slate-100 mb-6">Set new password</h1>

	{#if !checked}
		<p class="text-slate-400">Checking your reset link…</p>
	{:else if !isRecovery}
		<div class="rounded-lg bg-slate-800/50 border border-slate-600 p-4 text-slate-300 text-sm space-y-2">
			<p class="font-medium text-slate-200">Invalid or expired link</p>
			<p>
				This password reset link is invalid or has expired. Request a new one below.
			</p>
			<p class="pt-2">
				<a href="/auth/forgot-password" class="text-violet-400 hover:underline">Request new reset link</a>
				<span class="text-slate-500"> · </span>
				<a href="/auth/signin" class="text-violet-400 hover:underline">Sign in</a>
			</p>
		</div>
	{:else}
		<form onsubmit={handleSubmit} class="space-y-4">
			<input
				type="password"
				bind:value={password}
				placeholder="New password"
				required
				minlength="6"
				class="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-600 text-slate-100"
			/>
			<input
				type="password"
				bind:value={confirmPassword}
				placeholder="Confirm new password"
				required
				minlength="6"
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
				{loading ? 'Updating…' : 'Update password'}
			</button>
		</form>
		<p class="mt-4 text-slate-400 text-sm">
			<a href="/auth/signin" class="text-violet-400 hover:underline">Back to sign in</a>
		</p>
	{/if}
</div>
