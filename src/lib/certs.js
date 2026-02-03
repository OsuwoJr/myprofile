/**
 * Public certificates data. Each cert has a slug for shareable/embeddable URLs.
 * Use /certificates/{slug} for preview pages (Open Graph, embed-friendly).
 */
export const certs = [
	{
		slug: 'token-creation-spillover-hackathon-icp',
		title: 'Token Creation – Spillover Hackathon (ICP)',
		file: '/files/Token%20Creation%20Cert.pdf',
		description: 'Awarded at the Spillover Hackathon on Internet Computer (ICP). Built Dust Coin, a meme coin that won the hackathon. Also participated as a successful Product and Project Manager.',
		issuer: 'ICP Spillover Hackathon',
		icon: 'fa-solid fa-trophy'
	},
	{
		slug: 'building-on-blockchain',
		title: 'Building On Blockchain',
		file: '/files/Building%20On%20Blockchain.pdf',
		description: 'Gained foundational skills and started building on the Internet Computer (ICP) blockchain.',
		issuer: 'ICP',
		icon: 'fa-solid fa-link'
	},
	{
		slug: 'eth-safari-hackathon',
		title: 'ETH Safari Hackathon',
		file: '/files/ETHSAFARI-HACKATHON-CERTIFICATE-2.pdf',
		description: 'Participated as Canister Smart Contracts builder, consultant, and supervisor to 8 projects.',
		issuer: 'ETH Safari',
		icon: 'fa-solid fa-file-contract'
	},
	{
		slug: 'hashgraph-developer-course',
		title: 'Hashgraph Developer Course',
		file: '/files/HashgraphDeveloperCourse%20Cert.pdf',
		description: 'Hedera Hashgraph developer certification.',
		issuer: 'Hedera',
		icon: 'fa-solid fa-certificate'
	},
	{
		slug: 'critical-thinking-in-the-ai-era',
		title: 'Critical Thinking in the AI Era',
		file: '/files/Critical%20Thinking%20in%20the%20AI%20Era.pdf',
		description: 'HP Foundation certification in critical thinking for the AI era.',
		issuer: 'HP Foundation',
		icon: 'fa-solid fa-brain'
	}
];

/** Get certificate by slug (for route load). */
export function getCertBySlug(slug) {
	return certs.find((c) => c.slug === slug) ?? null;
}

/** Shareable URL for a cert (use for View certificate links and embeds). */
export function certUrl(cert) {
	return `/certificates/${cert.slug}`;
}
