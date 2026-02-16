import { createServerClient } from '@supabase/ssr';
import { env } from '$env/dynamic/public';

function getSupabaseEnv() {
	const url = env.PUBLIC_SUPABASE_URL;
	const key = env.PUBLIC_SUPABASE_ANON_KEY;
	if (!url || !key) {
		throw new Error('Missing PUBLIC_SUPABASE_URL or PUBLIC_SUPABASE_ANON_KEY');
	}
	return { url, key };
}

/**
 * Create a Supabase client for server-side code (routes, hooks).
 * Use this in +server.js and hooks.server.js so the server can read/write auth cookies
 * (e.g. for OAuth code exchange and session refresh).
 * @param {import('@sveltejs/kit').RequestEvent['cookies']} cookies - SvelteKit cookies from the request event
 * @returns {import('@supabase/supabase-js').SupabaseClient}
 */
export function createSupabaseServerClient(cookies) {
	const { url, key } = getSupabaseEnv();
	return createServerClient(url, key, {
		cookies: {
			getAll: () => cookies.getAll(),
			setAll: (cookiesToSet) => {
				cookiesToSet.forEach(({ name, value, options }) => {
					cookies.set(name, value, { ...options, path: '/' });
				});
			}
		}
	});
}
