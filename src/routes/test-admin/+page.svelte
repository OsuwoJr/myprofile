<svelte:options runes={true} />

<script>
	import { supabase } from '$lib/supabase';
	import { isAdmin } from '$lib/admin.js';

	let user = $state(null);
	let admin = $state(null);
	let loading = $state(true);
	let error = $state('');
	let sessionInfo = $state(null);
	let dbQueryResult = $state(null);

	$effect(() => {
		(async () => {
			try {
				// First check local session
				const {
					data: { session }
				} = await supabase.auth.getSession();
				console.log('[Test] Session:', session ? 'exists' : 'none');
				if (session) {
					const info = {
						expiresAt: new Date(session.expires_at * 1000).toLocaleString(),
						expiresIn: Math.floor((session.expires_at * 1000 - Date.now()) / 1000),
						hasAccessToken: !!session.access_token
					};
					sessionInfo = info;
					console.log('[Test] Session info:', JSON.stringify(info));
				}

				// Then verify with server
				const {
					data: { user: u }
				} = await supabase.auth.getUser();
				user = u;
				console.log('[Test] User:', u?.email ?? 'none');

				if (u) {
					// Direct DB query test
					const { data: dbData, error: dbError } = await supabase
						.from('admin_emails')
						.select('email')
						.eq('email', u.email)
						.maybeSingle();
					
					const queryResult = {
						data: dbData,
						error: dbError ? dbError.message : null,
						foundMatch: !!dbData
					};
					dbQueryResult = queryResult;
					console.log('[Test] Direct query result:', JSON.stringify(queryResult));

					// Then run isAdmin()
					const result = await isAdmin();
					admin = result;
					console.log('[Test] isAdmin result:', result);
				}
			} catch (e) {
				console.error('[Test] Error:', e);
				error = e.message;
			} finally {
				loading = false;
			}
		})();
	});
</script>

<svelte:head>
	<title>Test Admin</title>
</svelte:head>

<div class="max-w-3xl mx-auto px-6 py-12">
	<h1 class="text-2xl font-bold text-slate-100 mb-4">Admin Check Test</h1>
	{#if loading}
		<p class="text-slate-400">Loading...</p>
	{:else}
		<div class="space-y-2 text-slate-300">
			<p><strong>Signed in:</strong> {user ? 'Yes' : 'No'}</p>
			{#if sessionInfo}
				<p><strong>Session expires at:</strong> {sessionInfo.expiresAt}</p>
				<p><strong>Session expires in:</strong> {sessionInfo.expiresIn}s</p>
				<p><strong>Has access token:</strong> {sessionInfo.hasAccessToken ? 'Yes' : 'No'}</p>
			{/if}
			{#if user}
				<p><strong>Email:</strong> {user.email}</p>
				<p><strong>User ID:</strong> {user.id}</p>
				
				{#if dbQueryResult}
					<div class="mt-3 p-3 bg-slate-800 rounded text-sm">
						<p class="font-bold mb-1">Direct DB Query Test:</p>
						<p><strong>Found in admin_emails:</strong> {dbQueryResult.foundMatch ? 'Yes' : 'No'}</p>
						{#if dbQueryResult.error}
							<p class="text-red-400"><strong>DB Error:</strong> {dbQueryResult.error}</p>
						{/if}
						{#if dbQueryResult.data}
							<p><strong>Returned email:</strong> {dbQueryResult.data.email}</p>
						{/if}
					</div>
				{/if}

				<p class="text-lg font-bold mt-2">
					<strong>Is Admin (via helper):</strong>
					{#if admin === null}
						<span class="text-slate-400">Checking...</span>
					{:else if admin}
						<span class="text-green-400">Yes ✓</span>
					{:else}
						<span class="text-red-400">No ✗</span>
					{/if}
				</p>
			{/if}
			{#if error}
				<p class="text-red-400"><strong>Error:</strong> {error}</p>
			{/if}
		</div>
		<p class="mt-4 text-slate-400 text-sm">
			Check the browser console (F12) for detailed logs.
		</p>
	{/if}
</div>
