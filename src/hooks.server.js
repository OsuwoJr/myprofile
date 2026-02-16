import { createSupabaseServerClient } from '$lib/supabase-server.js';

/**
 * Run on every request. Creates a Supabase server client that can read/write auth cookies.
 * Calling getSession() here allows @supabase/ssr to refresh the token if needed and persist
 * it via setAll, keeping the session in sync across client and server.
 */
export async function handle({ event, resolve }) {
	event.locals.supabase = createSupabaseServerClient(event.cookies);
	await event.locals.supabase.auth.getSession();

	return resolve(event, {
		filterSerializedResponseHeaders(name) {
			return name === 'content-range' || name === 'x-supabase-api-version';
		}
	});
}
