import { error } from '@sveltejs/kit';
import { getCertBySlug } from '$lib/certs.js';

export function load({ params, url }) {
	const cert = getCertBySlug(params.slug ?? '');
	if (!cert) {
		error(404, 'Certificate not found');
	}
	// Full URL for this page (for Open Graph / LinkedIn preview)
	const canonicalUrl = `${url.origin}${url.pathname}`;
	return {
		cert,
		canonicalUrl
	};
}
