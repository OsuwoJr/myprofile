<svelte:options runes={true} />

<script>
	let activeTab = $state('overview');
	const tabs = [
		{ id: 'overview', label: 'Overview', icon: 'fa-circle-info' },
		{ id: 'frontend', label: 'Frontend', icon: 'fa-code' },
		{ id: 'security', label: 'Security', icon: 'fa-shield-halved' },
		{ id: 'seo', label: 'SEO', icon: 'fa-magnifying-glass-chart' },
		{ id: 'summary', label: 'Summary', icon: 'fa-table-cells' }
	];
	function selectTab(id) {
		activeTab = id;
	}
</script>

<div
	class="kentall-card group relative overflow-hidden rounded-2xl border border-amber-500/30 bg-slate-900/80 backdrop-blur-xl shadow-2xl shadow-amber-500/10 transition-all duration-500 hover:border-amber-400/50 hover:shadow-amber-500/20"
>
	<!-- Ambient gradient orbs (gold + blue per brand) -->
	<div class="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-amber-500/20 blur-3xl transition-opacity duration-500 group-hover:opacity-80"></div>
	<div class="pointer-events-none absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-blue-600/15 blur-3xl transition-opacity duration-500 group-hover:opacity-80"></div>

	<!-- Header -->
	<header class="relative border-b border-amber-500/20 bg-gradient-to-r from-slate-900/90 via-amber-950/30 to-slate-900/90 px-6 py-6 sm:px-8 sm:py-8">
		<div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
			<div>
				<div class="mb-1 flex items-center gap-2">
					<span
						class="inline-flex items-center gap-1.5 rounded-full border border-amber-500/40 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-300"
					>Live project</span>
					<span class="text-slate-500">|</span>
					<span class="text-sm text-slate-400">Nairobi, Kenya</span>
				</div>
				<h2 class="font-bold text-2xl tracking-tight text-white sm:text-3xl">
					Kentall Builders & Construction Company
					<span class="bg-gradient-to-r from-amber-400 to-blue-400 bg-clip-text text-transparent"> — From Foundation to Finish</span>
				</h2>
				<p class="mt-1 text-slate-400">
					Marketing site and lead-generation platform for a Kenyan construction company — SvelteKit frontend, security hardening, and full SEO implementation.
				</p>
				<p class="mt-2 text-sm text-amber-300/90">
					<strong class="text-white">Delivered:</strong> Frontend · Security · SEO (portfolio-ready)
				</p>
				<p class="mt-1 text-sm text-slate-400">
					<strong>Stack:</strong> SvelteKit 2, Svelte 5, TypeScript, Tailwind CSS 4, Vite 6 · Vercel (adapter-vercel) · Google Analytics (nonce-protected)
				</p>
			</div>
			<div class="flex flex-wrap gap-3">
				<a
					href="https://kentall.vercel.app"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 rounded-lg border border-amber-500/50 bg-amber-500/10 px-4 py-2.5 text-sm font-medium text-amber-300 transition-colors hover:bg-amber-500/20 hover:text-amber-200"
				>
					<i class="fa-solid fa-external-link-alt text-xs"></i>
					View live site
				</a>
			</div>
		</div>
	</header>

	<!-- Tabs -->
	<div class="flex flex-wrap border-b border-slate-700/80 bg-slate-900/50 px-4 sm:px-6" role="tablist">
		{#each tabs as tab (tab.id)}
			<button
				type="button"
				role="tab"
				aria-selected={activeTab === tab.id}
				class="relative px-3 py-3 text-sm font-medium transition-colors sm:px-4"
				class:text-amber-400={activeTab === tab.id}
				class:text-slate-400={activeTab !== tab.id}
				class:hover:text-slate-200={activeTab !== tab.id}
				data-tab={tab.id}
				onclick={(e) => selectTab(e.currentTarget.dataset.tab)}
			>
				<i class="fa-solid {tab.icon} mr-2 text-xs opacity-80"></i>
				{tab.label}
				{#if activeTab === tab.id}
					<span class="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-400" aria-hidden="true"></span>
				{/if}
			</button>
		{/each}
	</div>

	<!-- Tab panels -->
	<div class="min-h-[420px] overflow-auto px-4 py-6 sm:px-6 sm:py-8">
		{#key activeTab}
			{#if activeTab === 'overview'}
				<div class="space-y-6" role="tabpanel">
					<section>
						<h3 class="mb-3 text-lg font-semibold text-amber-300">Project Overview</h3>
						<div class="overflow-x-auto rounded-lg border border-slate-700/80 mb-4">
							<table class="w-full min-w-[320px] text-left text-sm">
								<tbody class="text-slate-300">
									<tr class="border-t border-slate-700/80"><th class="px-4 py-2 font-medium text-slate-200 w-36">Client / Product</th><td class="px-4 py-2">KENTALL BUILDERS & CONSTRUCTION COMPANY (Kenya)</td></tr>
									<tr class="border-t border-slate-700/80"><th class="px-4 py-2 font-medium text-slate-200">Purpose</th><td class="px-4 py-2">Marketing site + lead generation (contact, quote requests)</td></tr>
									<tr class="border-t border-slate-700/80"><th class="px-4 py-2 font-medium text-slate-200">Live URL</th><td class="px-4 py-2"><a href="https://kentall.vercel.app" target="_blank" rel="noopener noreferrer" class="text-amber-400 hover:underline">https://kentall.vercel.app</a></td></tr>
									<tr class="border-t border-slate-700/80"><th class="px-4 py-2 font-medium text-slate-200">Stack</th><td class="px-4 py-2">SvelteKit 2, Svelte 5, TypeScript, Tailwind CSS 4, Vite 6</td></tr>
									<tr class="border-t border-slate-700/80"><th class="px-4 py-2 font-medium text-slate-200">Deployment</th><td class="px-4 py-2">Vercel (adapter-vercel)</td></tr>
									<tr class="border-t border-slate-700/80"><th class="px-4 py-2 font-medium text-slate-200">Analytics</th><td class="px-4 py-2">Google Analytics (gtag.js, nonce-protected)</td></tr>
								</tbody>
							</table>
						</div>
						<p class="text-slate-300 text-sm leading-relaxed">
							The site presents the company's services, projects, team, and values, and captures leads via a <strong class="text-slate-200">contact form</strong> and a detailed <strong class="text-slate-200">quote request form</strong>. All form submissions are rate-limited, validated, and forwarded to Formspree.
						</p>
					</section>
				</div>
			{:else if activeTab === 'frontend'}
				<div class="space-y-8" role="tabpanel">
					<section>
						<h3 class="mb-3 text-lg font-semibold text-amber-300">2.1 Architecture & Routing</h3>
						<ul class="list-inside list-disc space-y-1 text-slate-300 text-sm">
							<li><strong>Framework:</strong> SvelteKit with file-based routing.</li>
							<li><strong>Pages:</strong> <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-amber-200">/</code> Home (hero, stats, services, process, testimonials, FAQ, CTA); <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-amber-200">/about</code> company story, values, founder, team; <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-amber-200">/services</code> categorized services with expandable cards; <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-amber-200">/projects</code> filterable gallery (Residential, Commercial, Institutional); <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-amber-200">/projects/[id]</code> dynamic project detail (gallery, description, challenge/solution, features, materials); <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-amber-200">/gallery</code> media gallery with category filter and lightbox; <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-amber-200">/contact</code>, <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-amber-200">/quote</code> (multi-step-style quote form); <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-amber-200">/privacy</code>, <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-amber-200">/terms</code>, <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-amber-200">/accessibility</code>.</li>
							<li><strong>Layout:</strong> Global <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-amber-200">+layout.svelte</code> with skip link, shared Footer, global image error handling and critical image preloading.</li>
							<li><strong>Error handling:</strong> Custom <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-amber-200">+error.svelte</code> with branded messaging and links (Home, Quote).</li>
						</ul>
					</section>
					<section>
						<h3 class="mb-3 text-lg font-semibold text-amber-300">2.2 Design System & Styling</h3>
						<ul class="list-inside list-disc space-y-1 text-slate-300 text-sm">
							<li><strong>CSS:</strong> Global <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-amber-200">app.css</code> with Tailwind (<code class="rounded bg-slate-700/60 px-1.5 py-0.5">@import 'tailwindcss'</code>, <code class="rounded bg-slate-700/60 px-1.5 py-0.5">@plugin '@tailwindcss/typography'</code>).</li>
							<li><strong>Variables (e.g. :root):</strong> Primary <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-amber-200">#0F3457</code> (headers, CTAs), Secondary <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-amber-200">#2C5282</code>, Gold <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-amber-200">#FBB034</code> (luxury accents), Light <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-amber-200">#F8F9FA</code>, Dark <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-amber-200">#1A202C</code>.</li>
							<li><strong>Typography:</strong> Montserrat (headings, 600/700), Raleway (body, 300/400/600); Google Fonts with <code class="rounded bg-slate-700/60 px-1.5 py-0.5">preconnect</code> for performance.</li>
							<li><strong>Components:</strong> Reusable set in <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-amber-200">$lib/components/</code>: Header, Footer, Hero, ServicesSection, ProcessSection, StatsSection, Testimonials, FAQSection, CallToActionSection, WhyKentallSection, KentallAdvantageSection, FounderSection, ServiceCard, BookingWidget.</li>
						</ul>
					</section>
					<section>
						<h3 class="mb-3 text-lg font-semibold text-amber-300">2.3 UX & Interactivity</h3>
						<ul class="list-inside list-disc space-y-1 text-slate-300 text-sm">
							<li><strong>Responsive:</strong> Mobile-first; Header hamburger menu on small screens with full nav overlay.</li>
							<li><strong>Hero:</strong> Video background with image slideshow fallback on error or for performance; mobile detection.</li>
							<li><strong>Animations:</strong> Scroll-triggered reveals (<code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-amber-200">.animate-on-scroll</code> + IntersectionObserver); optional fade transitions; <code class="rounded bg-slate-700/60 px-1.5 py-0.5">prefers-reduced-motion</code> respected.</li>
							<li><strong>Images:</strong> Global error listener (cache-busting retry, <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-amber-200">.image-load-error</code>); project pages use loading/error state and optional placeholders; critical project images preloaded in layout.</li>
							<li><strong>Forms:</strong> Contact and Quote submit to <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-amber-200">/api/contact</code> and <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-amber-200">/api/quote</code> with loading state, success message, user-facing errors; honeypot field (<code class="rounded bg-slate-700/60 px-1.5 py-0.5">website</code>) on client for bot mitigation.</li>
						</ul>
					</section>
					<section>
						<h3 class="mb-3 text-lg font-semibold text-amber-300">2.4 Accessibility (a11y)</h3>
						<ul class="list-inside list-disc space-y-1 text-slate-300 text-sm">
							<li><strong>Skip link:</strong> “Skip to main content” in layout; visible on focus.</li>
							<li><strong>Semantic structure:</strong> <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-amber-200">&lt;main id="main-content"&gt;</code>, <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-amber-200">&lt;header&gt;</code>, <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-amber-200">&lt;footer&gt;</code>, <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-amber-200">&lt;nav&gt;</code>, <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-amber-200">&lt;address&gt;</code>.</li>
							<li><strong>Focus:</strong> Visible focus outline (e.g. gold, 2px) for keyboard users.</li>
							<li><strong>Interactive elements:</strong> Buttons and nav toggle use <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-amber-200">aria-label</code> (e.g. “Open menu” / “Close menu”).</li>
							<li><strong>External links:</strong> <code class="rounded bg-slate-700/60 px-1.5 py-0.5">target="_blank"</code> with <code class="rounded bg-slate-700/60 px-1.5 py-0.5">rel="noopener noreferrer"</code> and descriptive <code class="rounded bg-slate-700/60 px-1.5 py-0.5">aria-label</code> where appropriate.</li>
							<li><strong>Reduced motion:</strong> <code class="rounded bg-slate-700/60 px-1.5 py-0.5">@media (prefers-reduced-motion: reduce)</code> disables or shortens animations/transitions.</li>
							<li><strong>Forced colors:</strong> <code class="rounded bg-slate-700/60 px-1.5 py-0.5">@media (forced-colors: active)</code> for high-contrast mode.</li>
							<li><strong>Dedicated page:</strong> <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-amber-200">/accessibility</code> documents commitment (WCAG 2.1 AA aim, keyboard nav, screen readers, skip link).</li>
						</ul>
					</section>
				</div>
			{:else if activeTab === 'security'}
				<div class="space-y-8" role="tabpanel">
					<section>
						<h3 class="mb-3 text-lg font-semibold text-amber-300">3.1 Server-Side Security (hooks.server.ts)</h3>
						<p class="mb-2 text-slate-400 text-sm"><strong>Content-Security-Policy (CSP):</strong></p>
						<ul class="list-inside list-disc space-y-1 text-slate-300 text-sm">
							<li><code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-amber-200">default-src 'self'</code>; <code class="rounded bg-slate-700/60 px-1.5 py-0.5">base-uri 'self'</code>; <code class="rounded bg-slate-700/60 px-1.5 py-0.5">form-action 'self'</code>; <code class="rounded bg-slate-700/60 px-1.5 py-0.5">frame-ancestors 'none'</code>; <code class="rounded bg-slate-700/60 px-1.5 py-0.5">object-src 'none'</code>.</li>
							<li><strong>script-src:</strong> <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-amber-200">'self'</code>, <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-amber-200">{"'nonce-{random}'"}</code>, <code class="rounded bg-slate-700/60 px-1.5 py-0.5">https://www.googletagmanager.com</code>, <code class="rounded bg-slate-700/60 px-1.5 py-0.5">https://www.google-analytics.com</code>.</li>
							<li><strong>script-src-attr</strong> <code class="rounded bg-slate-700/60 px-1.5 py-0.5">'none'</code> (no inline event handlers).</li>
							<li><strong>style-src:</strong> <code class="rounded bg-slate-700/60 px-1.5 py-0.5">'self' 'unsafe-inline' https://fonts.googleapis.com</code>.</li>
							<li><strong>font-src:</strong> <code class="rounded bg-slate-700/60 px-1.5 py-0.5">'self' data: https://fonts.gstatic.com</code>. <strong>img-src:</strong> <code class="rounded bg-slate-700/60 px-1.5 py-0.5">'self' data: blob:</code>. <strong>connect-src:</strong> <code class="rounded bg-slate-700/60 px-1.5 py-0.5">'self'</code>, Google Analytics endpoints.</li>
							<li><strong>upgrade-insecure-requests</strong> to enforce HTTPS.</li>
							<li><strong>Nonce:</strong> Per-request nonce; injected into <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-amber-200">app.html</code> for gtag and into all <code class="rounded bg-slate-700/60 px-1.5 py-0.5">&lt;script&gt;</code> tags via <code class="rounded bg-slate-700/60 px-1.5 py-0.5">transformPageChunk</code>.</li>
						</ul>
						<p class="mt-3 text-slate-400 text-sm"><strong>Other security headers</strong> (hook + <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-amber-200">vercel.json</code> for edge): Strict-Transport-Security (production), X-Content-Type-Options: nosniff, Referrer-Policy: strict-origin-when-cross-origin, Permissions-Policy, Cross-Origin-Opener-Policy: same-origin, Cross-Origin-Resource-Policy: same-site, X-Frame-Options: DENY.</p>
					</section>
					<section>
						<h3 class="mb-3 text-lg font-semibold text-amber-300">3.2 API Security (Contact & Quote)</h3>
						<ul class="list-inside list-disc space-y-1 text-slate-300 text-sm">
							<li><strong>Rate limiting</strong> (in-memory, per IP): Contact 5/10 min, Quote 3/10 min; on limit <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-amber-200">429</code> with <code class="rounded bg-slate-700/60 px-1.5 py-0.5">Retry-After</code> and JSON error.</li>
							<li><strong>Origin check:</strong> If <code class="rounded bg-slate-700/60 px-1.5 py-0.5">Origin</code> header present, must match <code class="rounded bg-slate-700/60 px-1.5 py-0.5">event.url.origin</code>; else <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-amber-200">403</code>.</li>
							<li><strong>Honeypot:</strong> Fields <code class="rounded bg-slate-700/60 px-1.5 py-0.5">website</code>, <code class="rounded bg-slate-700/60 px-1.5 py-0.5">company</code>, or <code class="rounded bg-slate-700/60 px-1.5 py-0.5">_website</code>; if any non-empty, respond <code class="rounded bg-slate-700/60 px-1.5 py-0.5">200</code> with <code class="rounded bg-slate-700/60 px-1.5 py-0.5">&#123; ok: true &#125;</code> but no forward to Formspree (silent bot discard).</li>
							<li><strong>Input validation:</strong> All text normalized (trim, collapse whitespace, length caps). Contact: name (120), email (254), phone (50), subject (160), message (4000). Quote: fullName (140), email (254), phone (50), location (120), projectType (50), serviceNeeded (array, 20 items, 60 chars each), budget (60), timeframe (60), description (6000), hearAboutUs (200), contactPreference (30). Required fields enforced; Quote requires at least one service. Invalid/empty → <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-amber-200">400</code> with clear message.</li>
							<li><strong>Forwarding:</strong> Valid payloads (with <code class="rounded bg-slate-700/60 px-1.5 py-0.5">_meta</code>: IP, user-agent, referer, timestamp) to Formspree; on Formspree error, API returns <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-amber-200">502</code> with generic user message (no third-party detail leak).</li>
						</ul>
					</section>
					<section>
						<h3 class="mb-3 text-lg font-semibold text-amber-300">3.3 Deployment (vercel.json)</h3>
						<p class="text-slate-300 text-sm">Same security headers applied at the edge for all routes <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-amber-200">/(.*)</code>, reinforcing HSTS, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, COOP, CORP, and X-Frame-Options.</p>
					</section>
				</div>
			{:else if activeTab === 'seo'}
				<div class="space-y-8" role="tabpanel">
					<section>
						<h3 class="mb-3 text-lg font-semibold text-amber-300">4.1 Global (app.html)</h3>
						<ul class="list-inside list-disc space-y-1 text-slate-300 text-sm">
							<li><strong>Charset & viewport:</strong> UTF-8, responsive viewport.</li>
							<li><strong>Default title:</strong> “KENTALL BUILDERS & CONSTRUCTION COMPANY | From Foundation to Finish”.</li>
							<li><strong>Default meta:</strong> description, keywords, author, <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-amber-200">robots</code> (index, follow), application-name, theme-color.</li>
							<li><strong>Performance:</strong> <code class="rounded bg-slate-700/60 px-1.5 py-0.5">preconnect</code> for Google Fonts; X-UA-Compatible for IE.</li>
							<li><strong>Verification:</strong> <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-amber-200">google-site-verification</code> meta tag. <strong>Favicon:</strong> <code class="rounded bg-slate-700/60 px-1.5 py-0.5">%sveltekit.assets%/favicon.png</code>.</li>
						</ul>
					</section>
					<section>
						<h3 class="mb-3 text-lg font-semibold text-amber-300">4.2 Per-Page SEO</h3>
						<p class="mb-2 text-slate-300 text-sm">Every main page sets:</p>
						<ul class="list-inside list-disc space-y-1 text-slate-300 text-sm">
							<li><strong>&lt;title&gt;</strong> — Unique, brand-suffixed (e.g. “About Us | KENTALL BUILDERS & CONSTRUCTION COMPANY”).</li>
							<li><strong>&lt;meta name="description"&gt;</strong> — Unique, concise summary.</li>
							<li><strong>&lt;link rel="canonical"&gt;</strong> — Absolute URL (e.g. <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-amber-200">https://kentall.vercel.app/about</code>, project detail uses project-specific URL).</li>
							<li><strong>Open Graph:</strong> og:type, og:url, og:title, og:description, og:site_name, og:image (project detail uses first project image when available).</li>
							<li><strong>Twitter:</strong> twitter:card (summary_large_image), twitter:url, twitter:title, twitter:description, twitter:image.</li>
						</ul>
						<p class="mt-2 text-slate-400 text-sm">Full meta + canonical + OG + Twitter on Home, About, Services, Projects (list), Projects [id], Gallery, Contact, Quote. Privacy, Terms, Accessibility have at least title, description, canonical.</p>
					</section>
					<section>
						<h3 class="mb-3 text-lg font-semibold text-amber-300">4.3 Structured Data (JSON-LD)</h3>
						<ul class="space-y-2 text-slate-300 text-sm">
							<li><strong>Home:</strong> Organization (name, alternateName, url, logo, description, address Nairobi KE, contactPoint, sameAs, areaServed, serviceType); LocalBusiness (@id, name, image, url, telephone, email, address, geo Nairobi, openingHoursSpecification Mon–Sat 09:00–17:00, priceRange, areaServed, sameAs); FAQPage (mainEntity Question/Answer pairs).</li>
							<li><strong>About:</strong> BreadcrumbList (Home → About Us). <strong>Contact:</strong> LocalBusiness (same as home). <strong>Services:</strong> BreadcrumbList (Home → Our Services). <strong>Projects (list):</strong> BreadcrumbList (Home → Our Projects). <strong>Projects [id]:</strong> BreadcrumbList (Home → Our Projects → Project title); canonical and OG/Twitter use project-specific URL and image. <strong>Gallery:</strong> BreadcrumbList (Home → Gallery). <strong>Quote:</strong> BreadcrumbList (Home → Request a Quote).</li>
							<li>All inline JSON-LD scripts use the same CSP nonce (<code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-amber-200">nonce="%cspNonce%"</code>).</li>
						</ul>
					</section>
					<section>
						<h3 class="mb-3 text-lg font-semibold text-amber-300">4.4 Utilities & Conventions</h3>
						<ul class="list-inside list-disc space-y-1 text-slate-300 text-sm">
							<li><strong>Breadcrumbs:</strong> <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-amber-200">$lib/utils/breadcrumbs.ts</code> exposes <code class="rounded bg-slate-700/60 px-1.5 py-0.5">generateBreadcrumbSchema(items)</code> for consistent BreadcrumbList schema.</li>
							<li><strong>Consistent branding:</strong> All titles and descriptions include “KENTALL BUILDERS & CONSTRUCTION COMPANY” or “Kentall Builders” and relevant keywords (Kenya, construction, architectural design, renovations).</li>
						</ul>
					</section>
				</div>
			{:else if activeTab === 'summary'}
				<div class="space-y-6" role="tabpanel">
					<section>
						<h3 class="mb-3 text-lg font-semibold text-amber-300">Technical Highlights Summary</h3>
						<div class="overflow-x-auto rounded-lg border border-slate-700/80">
							<table class="w-full min-w-[400px] text-left text-sm">
								<thead class="bg-slate-800/80">
									<tr>
										<th class="px-4 py-3 font-semibold text-amber-300">Area</th>
										<th class="px-4 py-3 font-semibold text-blue-300">Highlights</th>
									</tr>
								</thead>
								<tbody class="text-slate-300">
									<tr class="border-t border-slate-700/80">
										<td class="px-4 py-3 font-medium text-slate-200">Frontend</td>
										<td class="px-4 py-3">Svelte 5 + SvelteKit 2, TypeScript, Tailwind 4, responsive layout, scroll animations, image error handling and preload, reduced-motion and high-contrast support, skip link and semantic HTML.</td>
									</tr>
									<tr class="border-t border-slate-700/80">
										<td class="px-4 py-3 font-medium text-slate-200">Security</td>
										<td class="px-4 py-3">CSP with nonce, HSTS, X-Frame-Options, nosniff, COOP/CORP, Permissions-Policy; rate limiting and origin check on APIs; honeypot and strict server-side validation; safe error responses.</td>
									</tr>
									<tr class="border-t border-slate-700/80">
										<td class="px-4 py-3 font-medium text-slate-200">SEO</td>
										<td class="px-4 py-3">Unique title/description/canonical and full OG/Twitter on all main pages; JSON-LD Organization, LocalBusiness, FAQPage, BreadcrumbList; Google verification and analytics.</td>
									</tr>
									<tr class="border-t border-slate-700/80">
										<td class="px-4 py-3 font-medium text-slate-200">Deployment</td>
										<td class="px-4 py-3">Vercel with security headers at edge; server and edge headers aligned.</td>
									</tr>
								</tbody>
							</table>
						</div>
					</section>
					<section>
						<h3 class="mb-3 text-lg font-semibold text-amber-300">Repo & Maintenance Notes</h3>
						<ul class="list-inside list-disc space-y-1 text-slate-300 text-sm">
							<li><strong>Scripts:</strong> <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-amber-200">npm run dev</code>, <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-amber-200">npm run build</code>, <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-amber-200">npm run preview</code>, <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-amber-200">npm run check</code> / <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-amber-200">check:watch</code>, <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-amber-200">format</code>, <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-amber-200">lint</code>.</li>
							<li><strong>Code quality:</strong> Prettier + Prettier plugins (Svelte, Tailwind); TypeScript strict.</li>
							<li><strong>Cookie override:</strong> <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-amber-200">cookie: "0.7.2"</code> in package.json for dependency resolution.</li>
						</ul>
					</section>
					<div class="rounded-lg border border-amber-500/20 bg-amber-500/5 p-4">
						<p class="text-xs text-slate-400 italic">
							This document summarizes frontend implementation, security measures, and SEO strategy for the Kentall Builders website — intended as a single reference for portfolio use.
						</p>
					</div>
				</div>
			{/if}
		{/key}
	</div>
</div>
