import { env } from '$env/dynamic/public';

export async function load() {
	return {
		formspreeEndpoint: env.PUBLIC_FORMSPREE_ENDPOINT || ''
	};
}
