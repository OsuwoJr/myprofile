/**
 * Role-specific one-page resume content for competitive job applications.
 * Each variant is tailored to Frontend, Backend, Fullstack, or Security roles.
 */

const contact = {
	email: 'johnfredosuwo@gmail.com',
	phone: '+254 790932575',
	location: 'Nairobi, Kenya',
	github: 'github.com/OsuwoJr',
	linkedin: 'linkedin.com/in/JohnFrederickOdongoOsuwo',
	website: 'Portfolio & full profile on request'
};

const education = {
	degree: "Bachelor's Degree in Civil Engineering",
	school: 'Technical University of Kenya',
	year: '2024',
	note: 'Strong analytical foundation, problem-solving, and systems thinking applied to software engineering.'
};

export const resumeVariants = {
	frontend: {
		id: 'frontend',
		title: 'Frontend Engineer',
		subtitle: 'UI/UX · React · TypeScript · Performance & Accessibility',
		summary: 'Frontend engineer with hands-on experience building production UIs using React, Svelte, Next.js, and TypeScript. Delivered decentralized applications (meme coins, DAOs, NFT platforms) with responsive design, performance optimization, and accessibility in mind. Product-oriented: reduced onboarding friction by 40% and collaborated closely with design and backend teams.',
		skills: [
			'React, Svelte, Next.js, TypeScript',
			'TailwindCSS, responsive design, component architecture',
			'State management (Redux, stores), performance optimization',
			'Accessibility (a11y), SEO-friendly UI & frontend architecture',
			'Blockchain frontends: Hedera, ICP, Lisk; wallet & smart contract integration'
		],
		experience: [
			'Built Meme Coins platform: React, TypeScript, Hedera smart contracts — responsive UI, secure wallet integration, scalable token transactions.',
			'Developed DAO governance dashboards on ICP and Lisk: voting, treasury visibility, live data; improved onboarding and UX by ~40%.',
			'Designed and built NFT marketplace frontend: listing, purchase flows, ownership verification; optimized for desktop and mobile.',
			'Collaborated with designers, backend, and product to integrate wallets, smart contracts, and APIs into seamless user interfaces.'
		],
		highlights: ['React', 'Svelte', 'Next.js', 'TypeScript', 'TailwindCSS', 'Responsive UI', 'Performance', 'Accessibility', 'Web3']
	},
	backend: {
		id: 'backend',
		title: 'Backend Engineer',
		subtitle: 'APIs · Node.js · Security · Blockchain Integration',
		summary: 'Backend-focused engineer with experience designing and integrating REST APIs, smart contracts, and secure services. Built blockchain micro-transaction and DAO platforms; implemented CI/CD with automated testing and security scanning. Security-first: input validation, access control, and dependency risk reduction across the stack.',
		skills: [
			'Node.js, REST APIs, API design and integration',
			'Smart contracts & wallet/API integration (Hedera, ICP, Lisk)',
			'Authentication, rate limiting, input validation, access control',
			'CI/CD pipelines (GitHub Actions), automated testing & security scanning',
			'Docker, dependency & container scanning (Snyk, Trivy)'
		],
		experience: [
			'Built blockchain micro-transaction platform: secure APIs, Hedera smart contracts; scalable, low-cost token transactions and backend services.',
			'Developed DAO management backends on ICP and Lisk: governance logic, treasury, and live data APIs for frontend dashboards.',
			'Integrated wallet authentication, smart contracts, and REST APIs into secure, well-documented backend services.',
			'Implemented CI/CD pipelines with automated testing and security scanning to improve reliability and deployment safety.'
		],
		highlights: ['Node.js', 'REST APIs', 'Smart Contracts', 'CI/CD', 'Docker', 'Security', 'GitHub Actions']
	},
	fullstack: {
		id: 'fullstack',
		title: 'Fullstack Engineer',
		subtitle: 'Frontend · Backend · Security · Product-Driven Delivery',
		summary: 'Fullstack engineer delivering end-to-end web and decentralized applications. Strong in React, Svelte, Next.js, TypeScript on the frontend and Node.js, REST APIs, and smart contracts on the backend. Integrates security into the SDLC and works closely with product and design to ship MVPs on tight deadlines. Reduced onboarding friction by 40% and built meme coins, DAOs, and NFT platforms.',
		skills: [
			'Frontend: React, Svelte, Next.js, TypeScript, TailwindCSS, state management',
			'Backend: Node.js, REST APIs, smart contracts (Hedera, ICP, Lisk)',
			'Security: OWASP-aligned practices, secure API consumption, CI/CD hardening',
			'Product: MVP design, feature prioritization, Agile, cross-functional collaboration'
		],
		experience: [
			'Built Meme Coins platform end-to-end: React/TypeScript frontend, Hedera smart contracts; secure wallet integration and scalable token transactions.',
			'Developed DAO platforms on ICP and Lisk: responsive dashboards, governance tools, backend integration; improved onboarding by ~40%.',
			'Designed and delivered blockchain-based applications: meme coins, DAO governance, NFT marketplaces — full stack from UI to APIs and contracts.',
			'Collaborated across frontend, backend, and product to deliver MVPs under tight timelines with security and UX in mind.'
		],
		highlights: ['React', 'Node.js', 'TypeScript', 'REST APIs', 'Smart Contracts', 'Security', 'Agile', 'MVP']
	},
	security: {
		id: 'security',
		title: 'Application Security Engineer',
		subtitle: 'DevSecOps · OWASP · Secure SDLC · Vulnerability Mitigation',
		summary: 'Security-focused software engineer and DevSecOps specialist. Integrates application security and automated defenses into the SDLC: secure code reviews, threat modeling, CI/CD hardening, dependency and container scanning. Experienced with OWASP Top 10, API security, authentication, rate limiting, and log hardening. Builds secure-by-design systems without sacrificing delivery speed.',
		skills: [
			'Secure code reviews, threat modeling, static/dynamic analysis (SonarQube, OWASP ZAP)',
			'OWASP Top 10, API security, authentication, rate limiting, input validation',
			'CI/CD pipeline security (GitHub Actions), dependency & container scanning (Snyk, Trivy)',
			'Log hardening, data protection, secure-by-design development'
		],
		experience: [
			'Applied application security best practices across projects: secure API consumption, input validation, access control, dependency risk reduction.',
			'Implemented CI/CD pipelines with automated testing and security scanning to improve code reliability and deployment safety.',
			'Integrated security into frontend and backend: secure UI patterns, API hardening, and OWASP-aligned practices in production systems.',
			'Collaborated with engineering and product to embed security early — from design through deployment — reducing attack surface and data exposure risk.'
		],
		highlights: ['DevSecOps', 'OWASP', 'SonarQube', 'Snyk', 'Trivy', 'CI/CD', 'Secure Code', 'API Security']
	},
	'product-management': {
		id: 'product-management',
		title: 'Product Manager',
		subtitle: 'Strategy · Roadmap · Stakeholder Communication · Market Analysis',
		summary: 'Product-minded engineer with hands-on experience defining and delivering software products. Led feature prioritization, roadmaps, and cross-functional collaboration for decentralized applications (meme coins, DAOs, NFT platforms). Reduced onboarding friction by 40% through user research and iterative delivery. Bridges technical execution with business outcomes.',
		skills: [
			'Product strategy, roadmap planning, and backlog prioritization',
			'Stakeholder communication, user research, and requirements gathering',
			'Agile/Scrum, sprint planning, and cross-functional team coordination',
			'Technical background: React, APIs, blockchain — enables realistic scoping',
			'Metrics, A/B thinking, and iterative product improvement'
		],
		experience: [
			'Drove product direction for Meme Coins platform: defined flows, prioritized features, and aligned engineering and design to ship on time.',
			'Led product decisions for DAO governance dashboards: user needs, voting UX, treasury visibility; improved onboarding by ~40%.',
			'Defined and prioritized NFT marketplace features: listing, purchase flows, ownership verification — balancing scope and delivery.',
			'Collaborated with design, engineering, and stakeholders to ship MVPs under tight deadlines with clear success criteria.'
		],
		highlights: ['Product Strategy', 'Roadmap', 'Stakeholder Mgmt', 'Agile', 'User Research', 'MVP', 'Metrics', 'Cross-functional']
	},
	'project-management': {
		id: 'project-management',
		title: 'Project Manager',
		subtitle: 'Planning · Delivery · Risk · Cross-Functional Coordination',
		summary: 'Project manager with technical depth and experience delivering web and blockchain applications. Plans sprints, tracks milestones, and coordinates design, frontend, backend, and security to ship on time. Managed delivery of meme coins, DAOs, and NFT platforms; reduced onboarding friction by 40% through process and scope clarity. Strong in Agile, risk mitigation, and stakeholder alignment.',
		skills: [
			'Project planning, scheduling, and milestone tracking',
			'Agile/Scrum, sprint planning, retrospectives, and backlog management',
			'Risk identification, mitigation, and status reporting',
			'Cross-functional coordination: design, engineering, security',
			'Technical literacy: APIs, frontend/backend, blockchain — realistic estimates'
		],
		experience: [
			'Managed delivery of Meme Coins platform: coordinated frontend, smart contracts, and APIs; delivered on schedule with clear milestones.',
			'Led project execution for DAO governance dashboards: scope, timelines, and handoffs between design and engineering; improved onboarding by ~40%.',
			'Planned and tracked NFT marketplace build: listing, purchase flows, ownership verification; managed scope and dependencies.',
			'Facilitated sprint planning, standups, and retrospectives; kept stakeholders informed and risks visible.'
		],
		highlights: ['Project Planning', 'Agile', 'Sprint Mgmt', 'Risk', 'Stakeholders', 'Delivery', 'Cross-functional', 'Milestones']
	},
	'seo-specialist': {
		id: 'seo-specialist',
		title: 'SEO Specialist',
		subtitle: 'Technical SEO · Content · Analytics · Search Visibility',
		summary: 'SEO-focused professional with engineering background: technical SEO, performance, and accessibility that support search visibility. Implemented SEO-friendly frontends (React, Next.js, Svelte), structured data, and analytics. Delivered decentralized and marketing sites with crawlability, speed, and user experience in mind. Combines technical implementation with content and keyword strategy.',
		skills: [
			'Technical SEO: crawlability, sitemaps, structured data, Core Web Vitals',
			'On-page SEO: meta tags, headings, internal linking, mobile-first',
			'Performance & accessibility: fast load, a11y — aligns with SEO best practices',
			'Analytics: search console, GA, keyword research, and conversion tracking',
			'Content strategy and keyword optimization for web and marketing pages'
		],
		experience: [
			'Built SEO-friendly UIs for web and blockchain projects: semantic HTML, meta tags, and performance optimization for better indexing.',
			'Implemented structured data and fast-loading pages; improved Core Web Vitals and accessibility across delivered sites.',
			'Integrated analytics and search console data to inform content and technical improvements.',
			'Collaborated with product and content to align technical implementation with search and conversion goals.'
		],
		highlights: ['Technical SEO', 'Core Web Vitals', 'Analytics', 'Structured Data', 'Performance', 'Accessibility', 'Keyword Strategy', 'Content']
	}
};

export const resumeList = [
	{ id: 'frontend', label: 'Frontend-Focused', description: 'UI/UX, React, TypeScript, performance & accessibility' },
	{ id: 'backend', label: 'Backend-Focused', description: 'APIs, Node.js, security & blockchain integration' },
	{ id: 'fullstack', label: 'Fullstack-Focused', description: 'End-to-end delivery, frontend + backend + security' },
	{ id: 'security', label: 'Security-Focused', description: 'Application security, DevSecOps, OWASP, secure SDLC' },
	{ id: 'product-management', label: 'Product Management', description: 'Strategy, roadmap, stakeholder communication, market analysis' },
	{ id: 'project-management', label: 'Project Management', description: 'Planning, delivery, risk, cross-functional coordination' },
	{ id: 'seo-specialist', label: 'SEO Specialist', description: 'Technical SEO, content, analytics, search visibility' }
];

export { contact, education };
