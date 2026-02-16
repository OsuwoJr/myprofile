import { createBrowserClient } from '@supabase/ssr';
import { env } from '$env/dynamic/public';

function getSupabaseEnv() {
	const url = env.PUBLIC_SUPABASE_URL;
	const key = env.PUBLIC_SUPABASE_ANON_KEY;
	if (!url || !key) {
		throw new Error('Missing PUBLIC_SUPABASE_URL or PUBLIC_SUPABASE_ANON_KEY');
	}
	return { url, key };
}

/** Browser Supabase client. Uses cookies for PKCE (required for OAuth callback on server). */
export const supabase = (() => {
	const { url, key } = getSupabaseEnv();
	return createBrowserClient(url, key);
})();
