import { error } from '@sveltejs/kit';
import { resumeVariants } from '$lib/resumes.js';

const validTypes = Object.keys(resumeVariants);

export function load({ params }) {
	const type = params.type?.toLowerCase();
	if (!type || !validTypes.includes(type)) {
		error(404, 'Resume type not found');
	}
	return {
		variant: resumeVariants[type]
	};
}
