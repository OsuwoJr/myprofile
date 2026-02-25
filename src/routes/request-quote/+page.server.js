import { redirect } from '@sveltejs/kit';
import { env } from '$env/dynamic/public';

export async function load({ locals }) {
	const supabase = locals.supabase;
	const { data: { session } } = await supabase.auth.getSession();
	if (!session?.user) {
		throw redirect(303, '/auth/signin?redirect=/request-quote');
	}
	const formspreeEndpoint = env.PUBLIC_FORMSPREE_ENDPOINT || '';
	return {
		user: session.user,
		formspreeEndpoint
	};
}
