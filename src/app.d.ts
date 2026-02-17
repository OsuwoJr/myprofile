// See https://svelte.dev/docs/kit/types#app.d.ts
// for the global type declarations that configure the SvelteKit app.

declare global {
	namespace App {
		interface Locals {
			supabase: import('@supabase/supabase-js').SupabaseClient;
		}
	}
}

export {};
