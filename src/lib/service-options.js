/**
 * Service options for quote requests: from specific (e.g. logo design) to general (full project).
 * Used on the request-quote page and can be referenced elsewhere.
 */
export const SERVICE_CATEGORIES = [
	{
		id: 'design-branding',
		label: 'Design & Branding',
		options: [
			{ id: 'logo-design', label: 'Logo design or refinement' },
			{ id: 'brand-identity', label: 'Brand identity (colors, typography, guidelines)' },
			{ id: 'ui-mockups', label: 'UI/UX mockups (Figma)' },
			{ id: 'visual-assets', label: 'Visual assets & graphics for web/social' }
		]
	},
	{
		id: 'frontend',
		label: 'Frontend & Web',
		options: [
			{ id: 'landing-page', label: 'Landing page or marketing site' },
			{ id: 'responsive-refactor', label: 'Responsive design / mobile refinement' },
			{ id: 'spa-app', label: 'Single-page app (React, Svelte, Next.js)' },
			{ id: 'accessibility-audit', label: 'Accessibility audit & fixes (a11y)' },
			{ id: 'performance-frontend', label: 'Frontend performance optimization' }
		]
	},
	{
		id: 'backend-api',
		label: 'Backend & API',
		options: [
			{ id: 'rest-api', label: 'REST API design & implementation' },
			{ id: 'auth-system', label: 'Authentication & authorization system' },
			{ id: 'database-design', label: 'Database design & migrations' },
			{ id: 'integration-third-party', label: 'Third-party integrations (payments, SMS, etc.)' }
		]
	},
	{
		id: 'security',
		label: 'Security',
		options: [
			{ id: 'security-audit', label: 'Security audit / penetration-style review' },
			{ id: 'secure-code-review', label: 'Secure code review' },
			{ id: 'owasp-hardening', label: 'OWASP Top 10 hardening & fixes' },
			{ id: 'devsecops-setup', label: 'DevSecOps (CI/CD security, scanning)' },
			{ id: 'api-security', label: 'API security (rate limiting, auth, validation)' }
		]
	},
	{
		id: 'seo-growth',
		label: 'SEO & Digital Growth',
		options: [
			{ id: 'seo-audit', label: 'SEO audit (technical + on-page)' },
			{ id: 'seo-implementation', label: 'SEO implementation (metadata, structure, sitemaps)' },
			{ id: 'keyword-research', label: 'Keyword research & content strategy' },
			{ id: 'analytics-setup', label: 'Analytics setup & optimization' }
		]
	},
	{
		id: 'blockchain',
		label: 'Blockchain & Web3',
		options: [
			{ id: 'smart-contracts', label: 'Smart contracts & wallet integration' },
			{ id: 'dapp-frontend', label: 'dApp frontend or dashboard' },
			{ id: 'token-dao', label: 'Token economics / DAO governance' }
		]
	},
	{
		id: 'product-mvp',
		label: 'Product & MVP',
		options: [
			{ id: 'mvp-design', label: 'MVP design & scope' },
			{ id: 'full-project-quote', label: 'Full project quote (e.g. marketplace, web app)' },
			{ id: 'code-integrity-refactor', label: 'Code integrity / refactor / cleanup' }
		]
	},
	{
		id: 'creative-media',
		label: 'Creative & Media',
		options: [
			{ id: 'videography', label: 'Videography (shooting, editing)' },
			{ id: 'audio-engineering', label: 'Audio engineering (recording, mixing)' },
			{ id: 'social-content', label: 'Social media & content strategy' }
		]
	},
	{
		id: 'other',
		label: 'Other / General',
		options: [
			{ id: 'consultation', label: 'General consultation' },
			{ id: 'other-custom', label: "Something else (describe in details)" }
		]
	}
];

export function getServiceOption(categoryId, detailId) {
	const cat = SERVICE_CATEGORIES.find((c) => c.id === categoryId);
	if (!cat) return null;
	return cat.options.find((o) => o.id === detailId) ?? null;
}
