<svelte:options runes={true} />

<script>
	let activeTab = $state('overview');
	const tabs = [
		{ id: 'overview', label: 'Overview', icon: 'fa-circle-info' },
		{ id: 'frontend', label: 'Frontend', icon: 'fa-code' },
		{ id: 'backend', label: 'Backend', icon: 'fa-server' },
		{ id: 'security', label: 'Security', icon: 'fa-shield-halved' },
		{ id: 'seo', label: 'SEO', icon: 'fa-magnifying-glass-chart' },
		{ id: 'summary', label: 'Summary', icon: 'fa-table-cells' }
	];
	function selectTab(id) {
		activeTab = id;
	}
</script>

<div
	class="medline-card group relative overflow-hidden rounded-2xl border border-teal-500/30 bg-slate-900/80 backdrop-blur-xl shadow-2xl shadow-teal-500/10 transition-all duration-500 hover:border-teal-400/50 hover:shadow-teal-500/20"
>
	<!-- Ambient gradient orbs (turquoise + orange per brand) -->
	<div class="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-teal-500/20 blur-3xl transition-opacity duration-500 group-hover:opacity-80"></div>
	<div class="pointer-events-none absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-orange-500/15 blur-3xl transition-opacity duration-500 group-hover:opacity-80"></div>

	<!-- Header -->
	<header class="relative border-b border-teal-500/20 bg-gradient-to-r from-slate-900/90 via-teal-950/30 to-slate-900/90 px-6 py-6 sm:px-8 sm:py-8">
		<div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
			<div>
				<div class="mb-1 flex items-center gap-2">
					<span
						class="inline-flex items-center gap-1.5 rounded-full border border-teal-500/40 bg-teal-500/10 px-3 py-1 text-xs font-medium text-teal-300"
					>Live project</span>
					<span class="text-slate-500">|</span>
					<span class="text-sm text-slate-400">Nairobi, Kenya · KMLTTB Accredited</span>
				</div>
				<h2 class="font-bold text-2xl tracking-tight text-white sm:text-3xl">
					Medline Pathocare
					<span class="bg-gradient-to-r from-teal-400 to-orange-400 bg-clip-text text-transparent"> — Full-Stack Diagnostic Lab</span>
				</h2>
				<p class="mt-1 text-slate-400">
					A complete, production-ready website and web application for a KMLTTB-accredited referral laboratory — built from frontend to backend, with security hardening and full SEO implementation.
				</p>
				<p class="mt-2 text-sm text-teal-300/90">
					<strong class="text-white">Delivered:</strong> Frontend · Backend · Security · SEO (end-to-end by me)
				</p>
				<p class="mt-1 text-sm text-slate-400">
					<strong>Stack:</strong> Next.js 14, TypeScript, Tailwind CSS, NextAuth.js v5, Supabase (PostgreSQL, Storage, RLS), Zod, Lucide React, Inter
				</p>
			</div>
			<div class="flex flex-wrap gap-3">
				<a
					href="https://medlinepathocare.vercel.app/"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 rounded-lg border border-teal-500/50 bg-teal-500/10 px-4 py-2.5 text-sm font-medium text-teal-300 transition-colors hover:bg-teal-500/20 hover:text-teal-200"
				>
					<i class="fa-solid fa-external-link-alt text-xs"></i>
					View live site
				</a>
			</div>
		</div>
	</header>

	<!-- Tabs: solid active indicator (not a loading bar) -->
	<div class="flex flex-wrap border-b border-slate-700/80 bg-slate-900/50 px-4 sm:px-6" role="tablist">
		{#each tabs as tab (tab.id)}
			<button
				type="button"
				role="tab"
				aria-selected={activeTab === tab.id}
				class="relative px-3 py-3 text-sm font-medium transition-colors sm:px-4"
				class:text-teal-400={activeTab === tab.id}
				class:text-slate-400={activeTab !== tab.id}
				class:hover:text-slate-200={activeTab !== tab.id}
				data-tab={tab.id}
				onclick={(e) => selectTab(e.currentTarget.dataset.tab)}
			>
				<i class="fa-solid {tab.icon} mr-2 text-xs opacity-80"></i>
				{tab.label}
				{#if activeTab === tab.id}
					<span class="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-400" aria-hidden="true"></span>
				{/if}
			</button>
		{/each}
	</div>

	<!-- Tab panels: #key forces re-render when activeTab changes -->
	<div class="min-h-[420px] overflow-auto px-4 py-6 sm:px-6 sm:py-8">
		{#key activeTab}
			{#if activeTab === 'overview'}
			<div class="space-y-6" role="tabpanel">
				<section>
					<h3 class="mb-3 text-lg font-semibold text-teal-300">Project Overview</h3>
					<p class="text-slate-300 text-sm leading-relaxed">
						I designed and built <strong class="text-slate-200">Medline Pathocare</strong> as a full-stack platform that serves both the public (patients and healthcare providers) and internal staff. The site showcases the laboratory's services, hosts a <strong class="text-slate-200">searchable test catalog</strong> (55+ tests), and provides a <strong class="text-slate-200">client portal</strong> where patients view their test results and an <strong class="text-slate-200">admin dashboard</strong> where staff manage clients and upload reports. Every layer—UI, API, auth, database, storage, security, and SEO—was implemented and refined by me.
					</p>
				</section>
			</div>
		{:else if activeTab === 'frontend'}
			<div class="space-y-8" role="tabpanel">
				<section>
					<h3 class="mb-3 text-lg font-semibold text-teal-300">Stack & Architecture</h3>
					<ul class="list-inside list-disc space-y-1 text-slate-300 text-sm">
						<li><strong>Next.js 14</strong> (App Router) with <strong>TypeScript</strong> for type-safe, maintainable code.</li>
						<li><strong>Tailwind CSS</strong> for responsive, consistent styling and a clear design system.</li>
						<li><strong>Lucide React</strong> for accessible, consistent icons.</li>
						<li><strong>Inter</strong> (Google Fonts) for readable, professional typography.</li>
					</ul>
				</section>
				<section>
					<h3 class="mb-3 text-lg font-semibold text-teal-300">Design & UX</h3>
					<ul class="list-inside list-disc space-y-1 text-slate-300 text-sm">
						<li><strong>Responsive layout:</strong> Mobile-first breakpoints (e.g. &lt;768px, 768–1024px, &gt;1024px) so the site works on phones, tablets, and desktops.</li>
						<li><strong>Dark mode:</strong> Full theme support with smooth transitions, persisted via a theme provider.</li>
						<li><strong>Brand system:</strong> Primary turquoise (<code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-teal-200">#00bcd4</code>), accent orange (<code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-orange-200">#ff9800</code>), and light/dark backgrounds with CSS variables for consistency and future theming.</li>
					</ul>
				</section>
				<section>
					<h3 class="mb-3 text-lg font-semibold text-teal-300">Accessibility (WCAG-Oriented)</h3>
					<p class="mb-2 text-slate-300 text-sm">I implemented a dedicated <strong class="text-slate-200">accessibility controls</strong> component (floating panel) so users can:</p>
					<ul class="list-inside list-disc space-y-1 text-slate-300 text-sm">
						<li>Toggle <strong>light/dark</strong> theme.</li>
						<li>Enable <strong>high-contrast</strong> mode for better readability.</li>
						<li>Adjust <strong>font size</strong> (Normal, Large, Extra Large) with CSS classes applied to the root.</li>
					</ul>
					<p class="mt-3 text-slate-300 text-sm">Additional accessibility work:</p>
					<ul class="list-inside list-disc space-y-1 text-slate-300 text-sm">
						<li><strong>Keyboard navigation</strong> and visible <strong>focus indicators</strong> (e.g. <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-teal-200">:focus-visible</code> with brand-colored outline).</li>
						<li><strong>ARIA labels</strong> and <strong>semantic HTML</strong> (e.g. <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-teal-200">aria-label</code> on sections, descriptive link text).</li>
						<li><strong>Smooth scrolling</strong> and clear hierarchy so the experience is predictable for screen readers and keyboard users.</li>
					</ul>
				</section>
				<section>
					<h3 class="mb-3 text-lg font-semibold text-teal-300">Key Pages & Components</h3>
					<ul class="space-y-2 text-slate-300 text-sm">
						<li><strong class="text-slate-200">Home:</strong> Hero, mission/vision, services overview, quality & compliance, contact; <strong>Client Portal</strong> banner for unauthenticated users; <strong>StructuredData</strong> (Organization/MedicalBusiness) for SEO.</li>
						<li><strong class="text-slate-200">About, Services, Test Catalog, Contact, Blog:</strong> Each with tailored content and metadata.</li>
						<li><strong class="text-slate-200">Test Catalog:</strong> Client-side search/filter over 55+ tests; <strong>TestCard</strong> components; data sourced from a dedicated API.</li>
						<li><strong class="text-slate-200">Providers:</strong> Referral form, specimen guides, supply ordering (Formspree-backed where applicable).</li>
						<li><strong class="text-slate-200">Legal & policy:</strong> Privacy, Terms, Accessibility pages with proper metadata and internal linking.</li>
						<li><strong class="text-slate-200">Navigation:</strong> Sticky header, mobile hamburger menu, conditional links for <strong>Client Portal</strong> and <strong>Admin</strong> plus sign-in/sign-out based on session.</li>
						<li><strong class="text-slate-200">BookingModal</strong>, <strong>ClientPortalBanner</strong>, <strong>ThemeProvider</strong>, <strong>StructuredData</strong>: Reusable pieces that support conversion and branding across the app.</li>
					</ul>
					<p class="mt-3 text-slate-400 text-sm">All public pages use the shared <strong>metadata helper</strong> (<code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-teal-200">generateMetadata</code> in <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-teal-200">metadata.ts</code>) for consistent titles, descriptions, Open Graph, Twitter cards, and canonical URLs.</p>
				</section>
			</div>
		{:else if activeTab === 'backend'}
			<div class="space-y-8" role="tabpanel">
				<section>
					<h3 class="mb-3 text-lg font-semibold text-teal-300">API Layer (Next.js Route Handlers)</h3>
					<ul class="space-y-2 text-slate-300 text-sm">
						<li><strong><code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-teal-200">/api/auth/*</code></strong> — NextAuth.js catch-all (sign-in, sign-out, session).</li>
						<li><strong><code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-teal-200">/api/test-catalog</code></strong> — Public GET; returns the full test catalog for the services/test-catalog page.</li>
						<li><strong><code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-teal-200">/api/portal/results</code></strong> — <strong>GET</strong>; returns test results <strong>only for the authenticated user</strong>. Client identity is taken <strong>only from the session</strong> (see Security); no <code class="rounded bg-slate-700/60 px-1.5 py-0.5">client_id</code> from query or body is trusted.</li>
						<li><strong><code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-teal-200">/api/admin/clients</code></strong> — <strong>GET</strong> (list clients, optional search); admin-only.</li>
						<li><strong><code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-teal-200">/api/admin/clients/[id]</code></strong> — <strong>GET</strong> / <strong>PATCH</strong> (client detail and update); admin-only.</li>
						<li><strong><code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-teal-200">/api/admin/reports</code></strong> — <strong>GET</strong> (reports list and stats: total, this month, unique clients); admin-only.</li>
						<li><strong><code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-teal-200">/api/admin/reports/[id]/download</code></strong> — <strong>GET</strong>; returns a <strong>signed storage URL</strong> for the result file; admin-only.</li>
						<li><strong><code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-teal-200">/api/admin/upload</code></strong> — <strong>POST</strong> (multipart); admin uploads a result file (PDF or image), linked to a client by email; validates file type and size (e.g. 10MB cap) and stores under <code class="rounded bg-slate-700/60 px-1.5 py-0.5">{client_id}/{timestamp}-{sanitized_filename}</code> in Supabase Storage.</li>
					</ul>
					<p class="mt-3 text-slate-400 text-sm">All admin routes enforce authentication and, where configured, <strong>admin role</strong> (via <code class="rounded bg-slate-700/60 px-1.5 py-0.5">ADMIN_EMAILS</code>). Portal and admin behavior is coordinated with <strong>middleware</strong> (redirects to sign-in when unauthenticated, and to home when a non-admin hits admin routes).</p>
				</section>
				<section>
					<h3 class="mb-3 text-lg font-semibold text-teal-300">Authentication & Authorization</h3>
					<ul class="list-inside list-disc space-y-1 text-slate-300 text-sm">
						<li><strong>NextAuth.js v5</strong> with <strong>Credentials</strong> provider; credentials are verified against <strong>Supabase Auth</strong> (email/password).</li>
						<li><strong>Role model:</strong> After sign-in, the session is enriched with a <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-teal-200">role</code> (<code class="rounded bg-slate-700/60 px-1.5 py-0.5">admin</code> or <code class="rounded bg-slate-700/60 px-1.5 py-0.5">user</code>) derived from <code class="rounded bg-slate-700/60 px-1.5 py-0.5">ADMIN_EMAILS</code>; admins get access to <code class="rounded bg-slate-700/60 px-1.5 py-0.5">/admin/*</code>, regular users to <strong>Client Portal</strong> only.</li>
						<li><strong>Client record:</strong> On first sign-in (non-admin), a <strong>clients</strong> row is created or matched by email (id = Supabase user id) so portal results can be scoped to that client.</li>
						<li>Session and JWT callbacks carry <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-teal-200">user.id</code> and <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-teal-200">user.role</code> so both API routes and middleware can enforce access correctly.</li>
					</ul>
				</section>
				<section>
					<h3 class="mb-3 text-lg font-semibold text-teal-300">Data & Storage</h3>
					<ul class="list-inside list-disc space-y-1 text-slate-300 text-sm">
						<li><strong>Supabase (PostgreSQL)</strong> for relational data: <strong>clients</strong> (id, email, name, phone, timestamps) and <strong>test_results</strong> (client_id, test_name, file_path, file_name, uploaded_at, notes, etc.).</li>
						<li><strong>Supabase Storage:</strong> Private bucket <strong>test-results</strong>; object paths follow <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-teal-200">{client_id}/{filename}</code> so <strong>Row Level Security (RLS)</strong> can restrict reads to the owning client (see Security).</li>
						<li><strong>RLS</strong> on both tables and storage: clients can only read/update their own profile and read their own test results; admin operations use the <strong>service role</strong> server-side (bypasses RLS) so only server logic can write or read across clients.</li>
					</ul>
				</section>
			</div>
		{:else if activeTab === 'security'}
			<div class="space-y-8" role="tabpanel">
				<p class="text-slate-400 text-sm">I implemented and validated multiple security layers so the platform is safe for real patient and admin use.</p>
				<section>
					<h3 class="mb-3 text-lg font-semibold text-orange-300">1. Portal API — No Client ID from Request</h3>
					<ul class="list-inside list-disc space-y-1 text-slate-300 text-sm">
						<li><strong>Design:</strong> <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-orange-200">/api/portal/results</code> <strong>never</strong> reads <code class="rounded bg-slate-700/60 px-1.5 py-0.5">client_id</code> from query or body. The client id is <strong>always</strong> taken from <code class="rounded bg-slate-700/60 px-1.5 py-0.5">session.user.id</code>.</li>
						<li><strong>Effect:</strong> Prevents IDOR (Insecure Direct Object Reference); a user cannot see another user's results by tampering with the request.</li>
						<li><strong>Verification:</strong> A <strong>security test script</strong> (<code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-orange-200">scripts/test-portal-security.mjs</code>) asserts that (1) unauthenticated requests get <strong>401</strong>, and (2) requests with a fake <code class="rounded bg-slate-700/60 px-1.5 py-0.5">client_id</code> in the URL (and no auth) still get <strong>401</strong>. Run via <code class="rounded bg-slate-700/60 px-1.5 py-0.5">npm run test:portal-security</code> (with dev server or <code class="rounded bg-slate-700/60 px-1.5 py-0.5">BASE_URL</code> set).</li>
					</ul>
				</section>
				<section>
					<h3 class="mb-3 text-lg font-semibold text-orange-300">2. Middleware Protection & Rate Limiting</h3>
					<ul class="space-y-2 text-slate-300 text-sm">
						<li><strong>Route protection:</strong></li>
						<li class="list-none pl-4">— <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-orange-200">/portal/*</code> — requires authentication; otherwise redirect to <code class="rounded bg-slate-700/60 px-1.5 py-0.5">/auth/signin</code> with <code class="rounded bg-slate-700/60 px-1.5 py-0.5">callbackUrl</code>.</li>
						<li class="list-none pl-4">— <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-orange-200">/admin/*</code> (except <code class="rounded bg-slate-700/60 px-1.5 py-0.5">/admin/signin</code>) — requires auth <strong>and</strong> admin role; otherwise redirect to <code class="rounded bg-slate-700/60 px-1.5 py-0.5">/</code> or admin sign-in.</li>
						<li><strong>Rate limiting:</strong> In-memory rate limiter for <strong>public API</strong> routes (e.g. <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-orange-200">/api/test-catalog</code>). Auth, admin, and portal routes are excluded. Limits are per-IP (or <code class="rounded bg-slate-700/60 px-1.5 py-0.5">x-forwarded-for</code>), with a configurable window and max requests (e.g. 10/minute) returning <strong>429</strong> when exceeded. Comment in code notes that production could use Redis or a dedicated service.</li>
					</ul>
				</section>
				<section>
					<h3 class="mb-3 text-lg font-semibold text-orange-300">3. Admin & Upload Hardening</h3>
					<ul class="list-inside list-disc space-y-1 text-slate-300 text-sm">
						<li>Admin APIs use a shared <strong>requireAdmin</strong>-style check (e.g. in <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-orange-200">lib/admin.ts</code> and upload route): session required, then email must be in <code class="rounded bg-slate-700/60 px-1.5 py-0.5">ADMIN_EMAILS</code> (if set); otherwise <strong>401</strong> or <strong>403</strong>.</li>
						<li><strong>Upload API:</strong> Validates file type (e.g. PDF, PNG, JPG/JPEG only), file size (e.g. max 10MB), and required fields (email, test name); returns clear <strong>400</strong> errors. Client is resolved by email; upload path is sanitized and stored under the client's folder. Failed DB insert triggers cleanup of the uploaded file.</li>
					</ul>
				</section>
				<section>
					<h3 class="mb-3 text-lg font-semibold text-orange-300">4. Database & Storage RLS</h3>
					<ul class="list-inside list-disc space-y-1 text-slate-300 text-sm">
						<li><strong>clients:</strong> RLS so users can only SELECT/UPDATE/INSERT their own row (where <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-orange-200">id = auth.uid()</code>).</li>
						<li><strong>test_results:</strong> RLS so users can only SELECT rows where <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-orange-200">client_id</code> matches their own client id (via <code class="rounded bg-slate-700/60 px-1.5 py-0.5">auth.uid()</code>).</li>
						<li><strong>Storage:</strong> Policy on <code class="rounded bg-slate-700/60 px-1.5 py-0.5">storage.objects</code> so SELECT is allowed only for the <code class="rounded bg-slate-700/60 px-1.5 py-0.5">test-results</code> bucket and only when the first path segment equals <code class="rounded bg-slate-700/60 px-1.5 py-0.5">auth.uid()::text</code>. Uploads are done server-side with the service role, so no client-facing storage write policy is needed.</li>
					</ul>
				</section>
				<section>
					<h3 class="mb-3 text-lg font-semibold text-orange-300">5. Security Disclosure & Best Practices</h3>
					<ul class="list-inside list-disc space-y-1 text-slate-300 text-sm">
						<li><strong><code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-orange-200">.well-known/security.txt</code></strong> — Added with contact email, expiry, preferred language, and canonical URL so security researchers can report issues responsibly.</li>
						<li><strong>npm scripts:</strong> <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-orange-200">security:audit</code>, <code class="rounded bg-slate-700/60 px-1.5 py-0.5">security:fix</code>, and <code class="rounded bg-slate-700/60 px-1.5 py-0.5">security:audit:moderate</code> for dependency audits.</li>
					</ul>
					<p class="mt-3 text-slate-400 text-sm">Together, these measures protect against unauthorized access to patient data, abuse of admin and portal APIs, and basic information disclosure, and they demonstrate a security-conscious implementation suitable for a healthcare-related product.</p>
				</section>
			</div>
		{:else if activeTab === 'seo'}
			<div class="space-y-8" role="tabpanel">
				<p class="text-slate-400 text-sm">I performed an SEO-oriented pass and implemented the following so the site is discoverable, indexable, and presentable in search and social.</p>
				<section>
					<h3 class="mb-3 text-lg font-semibold text-teal-300">Metadata & Crawlability</h3>
					<ul class="list-inside list-disc space-y-1 text-slate-300 text-sm">
						<li><strong>Root layout</strong> (<code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-teal-200">app/layout.tsx</code>): Centralized metadata — default title and template (<code class="rounded bg-slate-700/60 px-1.5 py-0.5">%s | Medline Pathocare</code>), description, <strong>keywords</strong> array (pathology, diagnostics, Nairobi, KMLTTB, tests, etc.), authors, creator, publisher, <strong>robots</strong> (index, follow), <strong>googleBot</strong> directives (index, follow, max snippet/image preview).</li>
						<li><strong>Per-page metadata:</strong> Important pages (Home, About, Services, Test Catalog, Contact, Blog, provider and legal pages) use <strong>generateMetadata</strong> or local <code class="rounded bg-slate-700/60 px-1.5 py-0.5">metadata</code> exports with unique titles and descriptions tailored to the page content and intent.</li>
						<li><strong>Canonical URLs:</strong> <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-teal-200">metadataBase</code> and <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-teal-200">alternates.canonical</code> (via metadata helper) so each page has a single canonical URL and duplicate-content issues are avoided.</li>
						<li><strong>Format detection:</strong> Turned off auto-linking for email, address, and telephone in metadata so crawlers don't mis-parse contact info.</li>
					</ul>
				</section>
				<section>
					<h3 class="mb-3 text-lg font-semibold text-teal-300">Open Graph & Social</h3>
					<ul class="list-inside list-disc space-y-1 text-slate-300 text-sm">
						<li><strong>Open Graph:</strong> Title, description, URL, site name, locale (<code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-teal-200">en_KE</code>), type, and images (default <code class="rounded bg-slate-700/60 px-1.5 py-0.5">/og.png</code> with dimensions/alt where needed).</li>
						<li><strong>Twitter:</strong> Summary large image card, title, description, images, creator handle.</li>
						<li><strong>Shared image:</strong> <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-teal-200">/og.png</code> (e.g. 1200×630) for consistent previews when shared.</li>
					</ul>
				</section>
				<section>
					<h3 class="mb-3 text-lg font-semibold text-teal-300">Sitemap & Robots</h3>
					<ul class="list-inside list-disc space-y-1 text-slate-300 text-sm">
						<li><strong>Dynamic sitemap</strong> (<code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-teal-200">app/sitemap.ts</code>): All public, indexable routes (home, about, services, test catalog, specialized expertise, consultative services, contact, blog, provider subpages, privacy, terms, accessibility) with <code class="rounded bg-slate-700/60 px-1.5 py-0.5">lastModified</code>, <code class="rounded bg-slate-700/60 px-1.5 py-0.5">changeFrequency</code>, and <strong>priority</strong> (e.g. home 1.0, services 0.9, legal 0.5).</li>
						<li><strong>robots.txt</strong> (<code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-teal-200">app/robots.ts</code>): Allow <code class="rounded bg-slate-700/60 px-1.5 py-0.5">/</code> for all user agents (and explicit Googlebot/Bingbot), <strong>disallow</strong> <code class="rounded bg-slate-700/60 px-1.5 py-0.5">/api/</code> and <code class="rounded bg-slate-700/60 px-1.5 py-0.5">/_next/</code>, and reference the <strong>sitemap</strong> URL so crawlers can discover all public pages efficiently.</li>
					</ul>
				</section>
				<section>
					<h3 class="mb-3 text-lg font-semibold text-teal-300">Structured Data (Schema.org)</h3>
					<ul class="space-y-2 text-slate-300 text-sm">
						<li><strong>StructuredData</strong> component injects <strong>JSON-LD</strong> via Next.js <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-teal-200">Script</code>:</li>
						<li class="list-none pl-4">— <strong>Organization:</strong> Name, URL, logo, description, address (Roysambu, Nairobi, KE), contact point (phone, type, area served).</li>
						<li class="list-none pl-4">— <strong>MedicalBusiness:</strong> Richer organization type with medical specialties, area served, founder, founding date, price range, sameAs placeholder for social.</li>
						<li class="list-none pl-4">— <strong>WebSite:</strong> Site name, URL, and <strong>SearchAction</strong> with URL template for the test catalog search (<code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-teal-200">/services/test-catalog?search={search_term_string}</code>) so search engines can offer sitelinks search where supported.</li>
						<li>Used on the root layout (Organization + WebSite) and on the home page (MedicalBusiness) so the lab is clearly represented as a local medical business.</li>
					</ul>
				</section>
				<section>
					<h3 class="mb-3 text-lg font-semibold text-teal-300">Verification & Analytics Readiness</h3>
					<ul class="list-inside list-disc space-y-1 text-slate-300 text-sm">
						<li><strong>Google Search Console:</strong> Meta tag verification in layout (<code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-teal-200">verification.google</code>) and optional <strong>HTML file</strong> verification (<code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-teal-200">googlee0edd650e1b7618e.html</code> in <code class="rounded bg-slate-700/60 px-1.5 py-0.5">public/</code>) so the site can be verified and monitored in GSC.</li>
						<li><strong>Google Analytics:</strong> The project is set up for analytics integration (e.g. via <code class="rounded bg-slate-700/60 px-1.5 py-0.5">NEXT_PUBLIC_*</code> or a Script component in the root layout). Search Console verification and consistent metadata make it straightforward to connect GA and interpret traffic and behavior. I completed the SEO audit and fixes and configured the site so analytics (including Google Analytics) can be added and used for ongoing optimization.</li>
					</ul>
				</section>
				<section>
					<h3 class="mb-3 text-lg font-semibold text-teal-300">PWA & Favicons</h3>
					<ul class="list-inside list-disc space-y-1 text-slate-300 text-sm">
						<li><strong>Web app manifest</strong> (<code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-teal-200">site.webmanifest</code>): Name, short name, icons (192×192, 512×512), theme color (primary), background color, display standalone.</li>
						<li><strong>Favicons:</strong> Multiple sizes (16×16, 32×32, favicon.ico) and <strong>apple-touch-icon</strong> / <strong>android-chrome</strong> icons referenced in metadata so the site looks correct in bookmarks, splash screens, and "Add to Home Screen."</li>
					</ul>
					<p class="mt-3 text-slate-400 text-sm">Together, these choices improve indexing, rich results potential, social sharing, and readiness for analytics—all part of the complete SEO audit and fixes I implemented.</p>
				</section>
			</div>
		{:else if activeTab === 'summary'}
			<div class="space-y-6" role="tabpanel">
				<section>
					<h3 class="mb-3 text-lg font-semibold text-teal-300">Summary of What I Delivered</h3>
					<div class="overflow-x-auto rounded-lg border border-slate-700/80">
						<table class="w-full min-w-[400px] text-left text-sm">
							<thead class="bg-slate-800/80">
								<tr>
									<th class="px-4 py-3 font-semibold text-teal-300">Area</th>
									<th class="px-4 py-3 font-semibold text-orange-300">What I Did</th>
								</tr>
							</thead>
							<tbody class="text-slate-300">
								<tr class="border-t border-slate-700/80">
									<td class="px-4 py-3 font-medium text-slate-200">Frontend</td>
									<td class="px-4 py-3">Next.js 14 App Router, TypeScript, Tailwind, responsive + dark mode, accessibility controls (theme, contrast, font size), semantic HTML and ARIA, reusable components, per-page metadata.</td>
								</tr>
								<tr class="border-t border-slate-700/80">
									<td class="px-4 py-3 font-medium text-slate-200">Backend</td>
									<td class="px-4 py-3">NextAuth + Supabase Auth, role-based access (admin/user), REST APIs for portal, admin (clients, reports, upload, signed download), Supabase PostgreSQL + Storage, RLS on tables and bucket.</td>
								</tr>
								<tr class="border-t border-slate-700/80">
									<td class="px-4 py-3 font-medium text-slate-200">Security</td>
									<td class="px-4 py-3">Session-only client id in portal API, automated security tests, middleware route protection and rate limiting, upload validation, RLS, security.txt, npm audit scripts.</td>
								</tr>
								<tr class="border-t border-slate-700/80">
									<td class="px-4 py-3 font-medium text-slate-200">SEO</td>
									<td class="px-4 py-3">Metadata and canonicals, sitemap and robots, Open Graph and Twitter, Schema.org (Organization, MedicalBusiness, WebSite with SearchAction), Google Search Console verification, manifest and favicons, analytics-ready setup.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</section>
				<section>
					<h3 class="mb-3 text-lg font-semibold text-teal-300">Tech Stack Summary</h3>
					<ul class="list-inside list-disc space-y-1 text-slate-300 text-sm">
						<li><strong>Framework:</strong> Next.js 14 (App Router)</li>
						<li><strong>Language:</strong> TypeScript</li>
						<li><strong>Styling:</strong> Tailwind CSS</li>
						<li><strong>Auth:</strong> NextAuth.js v5 (Credentials + Supabase Auth)</li>
						<li><strong>Database & Storage:</strong> Supabase (PostgreSQL, Storage, RLS)</li>
						<li><strong>Validation:</strong> Zod</li>
						<li><strong>Icons:</strong> Lucide React</li>
						<li><strong>Font:</strong> Inter (Google Fonts)</li>
					</ul>
				</section>
				<section>
					<h3 class="mb-3 text-lg font-semibold text-teal-300">Deployment & Environment</h3>
					<p class="text-slate-300 text-sm">
						The application is built for production (<code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-teal-200">npm run build</code> / <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-teal-200">npm start</code>) and deploys to <strong>Vercel</strong> (or any Next.js host). Environment variables cover Supabase (URL, anon key, service role key), NextAuth secret, optional admin emails, site URL, contact/WhatsApp/Formspree endpoints, etc. Database and storage are provisioned via Supabase (schema and storage policies run in the Supabase dashboard).
					</p>
				</section>
				<div class="rounded-lg border border-teal-500/20 bg-teal-500/5 p-4">
					<p class="text-xs text-slate-400 italic">
						This project was built end-to-end by me: frontend, backend, security hardening, and complete SEO audit and fixes, including Google Search Console verification and analytics readiness (e.g. Google Analytics).
					</p>
				</div>
			</div>
			{/if}
		{/key}
	</div>
</div>
