import { redirect } from '@sveltejs/kit';
import { createSupabaseServerClient } from '$lib/supabase-server.js';

/**
 * OAuth callback route (server). Supabase redirects here after Google sign-in with ?code=...
 * We MUST use a server route (not a client page) so that:
 * - createServerClient can read cookies (including the PKCE code_verifier set by the browser)
 * - The code is exchanged on the server and session cookies are set correctly
 */
export async function GET({ url, cookies }) {
	const code = url.searchParams.get('code');
	const next = url.searchParams.get('next') ?? '/blog';

	if (!code) {
		redirect(303, '/auth/signin?error=missing_code');
	}

	const supabase = createSupabaseServerClient(cookies);
	const { error } = await supabase.auth.exchangeCodeForSession(code);

	if (error) {
		console.error('[auth/callback] exchangeCodeForSession error:', error.message);
		redirect(303, `/auth/signin?error=${encodeURIComponent(error.message)}`);
	}

	redirect(303, next);
}
