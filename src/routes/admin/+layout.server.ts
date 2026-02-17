import { redirect } from '@sveltejs/kit';
import type { ServerLoad } from '@sveltejs/kit';
import type { SupabaseClient } from '@supabase/supabase-js';

export const load: ServerLoad = async ({ locals }) => {
	const supabase = (locals as { supabase: SupabaseClient }).supabase;
	const session = await supabase.auth.getSession();
	
	if (!session.data.session) {
		throw redirect(303, '/auth/signin?redirect=/admin');
	}

	const user = session.data.session.user;
	
	if (!user?.email) {
		throw redirect(303, '/');
	}

	// Check if user is admin
	const { data, error } = await supabase
		.from('admin_emails')
		.select('email')
		.eq('email', user.email)
		.maybeSingle();

	if (error || !data) {
		console.error('Admin check failed:', error);
		throw redirect(303, '/');
	}

	return {
		isAdmin: true,
		userEmail: user.email
	};
};
