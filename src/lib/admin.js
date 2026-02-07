import { supabase } from '$lib/supabase';

export async function isAdmin() {
	try {
		const {
			data: { user }
		} = await supabase.auth.getUser();
		if (!user?.email) return false;
		const { data, error } = await supabase
			.from('admin_emails')
			.select('email')
			.eq('email', user.email)
			.maybeSingle();
		if (error) return false;
		return !!data;
	} catch {
		return false;
	}
}
