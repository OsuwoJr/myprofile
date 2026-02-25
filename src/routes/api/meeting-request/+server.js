import { createSupabaseServiceClient } from '$lib/supabase-service.js';
import { json } from '@sveltejs/kit';

export async function POST({ request }) {
	let body;
	try {
		body = await request.json();
	} catch {
		return json({ error: 'Invalid JSON' }, { status: 400 });
	}
	const { email, name, meeting_preference, message } = body;
	if (!email || typeof email !== 'string' || !email.trim()) {
		return json({ error: 'Email is required' }, { status: 400 });
	}
	try {
		const supabase = createSupabaseServiceClient();
		const { error } = await supabase.from('service_requests').insert({
			user_id: null,
			client_email: email.trim(),
			client_name: (name && typeof name === 'string' ? name.trim() : null) || null,
			request_type: 'meeting',
			service_category: null,
			service_detail: null,
			description: (message && typeof message === 'string' ? message.trim() : null) || null,
			budget_preference: null,
			timeline: null,
			meeting_preference:
				meeting_preference && typeof meeting_preference === 'string'
					? meeting_preference.trim()
					: null,
			status: 'new'
		});
		if (error) {
			console.error('Meeting request insert error:', error);
			return json({ error: error.message }, { status: 500 });
		}
		return json({ ok: true });
	} catch (err) {
		console.error('Meeting request error:', err);
		return json(
			{ error: err.message || 'Server error' },
			{ status: 500 }
		);
	}
}
