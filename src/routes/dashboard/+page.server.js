import { redirect } from '@sveltejs/kit';

export async function load({ locals }) {
	const supabase = locals.supabase;
	const { data: { session } } = await supabase.auth.getSession();
	if (!session?.user) {
		throw redirect(303, '/auth/signin?redirect=/dashboard');
	}
	const { data: requests } = await supabase
		.from('service_requests')
		.select('id, request_type, service_category, service_detail, description, budget_preference, timeline, example_link, meeting_preference, status, admin_quote, admin_requirements, created_at, updated_at')
		.eq('user_id', session.user.id)
		.order('created_at', { ascending: false });
	return {
		user: session.user,
		requests: requests ?? []
	};
}
