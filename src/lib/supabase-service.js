import { createClient } from '@supabase/supabase-js';
import { env } from '$env/dynamic/private';

/**
 * Server-only Supabase client using the service role key.
 * Bypasses RLS — use only for trusted server actions (e.g. saving meeting requests from contact form).
 * Requires SUPABASE_SERVICE_ROLE_KEY in .env.
 */
export function createSupabaseServiceClient() {
	const url = env.PUBLIC_SUPABASE_URL;
	const key = env.SUPABASE_SERVICE_ROLE_KEY;
	if (!url || !key) throw new Error('Missing PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY');
	return createClient(url, key);
}
