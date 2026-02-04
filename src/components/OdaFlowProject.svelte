<svelte:options runes={true} />

<script>
	let activeTab = $state('frontend');
	const tabs = [
		{ id: 'frontend', label: 'Front End', icon: 'fa-code' },
		{ id: 'security', label: 'Security', icon: 'fa-shield-halved' },
		{ id: 'seo', label: 'SEO', icon: 'fa-magnifying-glass-chart' },
		{ id: 'summary', label: 'Summary', icon: 'fa-table-cells' }
	];
</script>

<div
	class="odaflow-card group relative overflow-hidden rounded-2xl border border-cyan-500/30 bg-slate-900/80 backdrop-blur-xl shadow-2xl shadow-cyan-500/10 transition-all duration-500 hover:border-cyan-400/50 hover:shadow-cyan-500/20"
>
	<!-- Ambient gradient orbs -->
	<div class="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-cyan-500/20 blur-3xl transition-opacity duration-500 group-hover:opacity-80"></div>
	<div class="pointer-events-none absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-violet-500/15 blur-3xl transition-opacity duration-500 group-hover:opacity-80"></div>

	<!-- Header -->
	<header class="relative border-b border-cyan-500/20 bg-gradient-to-r from-slate-900/90 via-cyan-950/30 to-slate-900/90 px-6 py-6 sm:px-8 sm:py-8">
		<div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
			<div>
				<div class="mb-1 flex items-center gap-2">
					<span
						class="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300"
					>Live project</span>
					<span class="text-slate-500">|</span>
					<span class="text-sm text-slate-400">Kenya & East Africa</span>
				</div>
				<h2 class="font-bold text-2xl tracking-tight text-white sm:text-3xl">
					OdaFlow
					<span class="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent"> — OdaWeb</span>
				</h2>
				<p class="mt-1 text-slate-400">
					Sales Force Automation & Distributor Management Platform
				</p>
				<p class="mt-2 text-sm text-cyan-300/90">
					<strong class="text-white">My role:</strong> Front End Development · Security Audit & Hardening · SEO Strategy & Implementation
				</p>
				<p class="mt-1 text-sm text-slate-400">
					<strong>Stack:</strong> React 18, TypeScript, Vite, Tailwind CSS, Chakra UI, MUI, Redux Toolkit, TanStack Query
				</p>
			</div>
			<div class="flex flex-wrap gap-3">
				<a
					href="https://www.odaflow.com/"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 rounded-lg border border-cyan-500/50 bg-cyan-500/10 px-4 py-2.5 text-sm font-medium text-cyan-300 transition-colors hover:bg-cyan-500/20 hover:text-cyan-200"
				>
					<i class="fa-solid fa-external-link-alt text-xs"></i>
					View live site
				</a>
				<a
					href="https://www.odaflow.com/about-us"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 rounded-lg border border-violet-500/50 bg-violet-500/10 px-4 py-2.5 text-sm font-medium text-violet-300 transition-colors hover:bg-violet-500/20 hover:text-violet-200"
				>
					<i class="fa-solid fa-users text-xs"></i>
					See me on the team
				</a>
			</div>
		</div>
		<p class="mt-3 text-xs text-slate-500">
			John Frederick Odongo Osuwo — Application Security & Frontend Developer · <a href="https://www.odaflow.com/about-us" target="_blank" rel="noopener noreferrer" class="text-cyan-400 hover:underline">odaflow.com/about-us</a>
		</p>
	</header>

	<!-- Tabs -->
	<div class="flex border-b border-slate-700/80 bg-slate-900/50 px-4 sm:px-6" role="tablist">
		{#each tabs as tab}
			<button
				type="button"
				role="tab"
				aria-selected={activeTab === tab.id}
				class="relative px-4 py-3 text-sm font-medium transition-colors sm:px-5"
				class:text-cyan-400={activeTab === tab.id}
				class:text-slate-400={activeTab !== tab.id}
				class:hover:text-slate-200={activeTab !== tab.id}
				onclick={() => (activeTab = tab.id)}
			>
				<i class="fa-solid {tab.icon} mr-2 text-xs opacity-80"></i>
				{tab.label}
				{#if activeTab === tab.id}
					<span class="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-violet-400"></span>
				{/if}
			</button>
		{/each}
	</div>

	<!-- Tab panels -->
	<div class="min-h-[420px] overflow-auto px-4 py-6 sm:px-6 sm:py-8">
		{#if activeTab === 'frontend'}
			<div class="odaflow-panel space-y-8" role="tabpanel">
				<section>
					<h3 class="mb-3 text-lg font-semibold text-cyan-300">1.1 Scope & Scale</h3>
					<ul class="list-inside list-disc space-y-1 text-slate-300 text-sm">
						<li><strong>Codebase:</strong> 500+ source files (432+ <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-cyan-200">.tsx</code>, 88+ <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-cyan-200">.ts</code>), structured by feature and role.</li>
						<li><strong>Routing:</strong> 238+ routes with public landing, authenticated app areas, and role-specific dashboards.</li>
						<li><strong>Build:</strong> Vite 6, TypeScript 5.6, strict typing and ESLint across the app.</li>
					</ul>
				</section>
				<section>
					<h3 class="mb-3 text-lg font-semibold text-cyan-300">1.2 Tech Stack</h3>
					<div class="overflow-x-auto rounded-lg border border-slate-700/80">
						<table class="w-full min-w-[320px] text-left text-sm">
							<thead class="bg-slate-800/80 text-cyan-300">
								<tr>
									<th class="px-4 py-3 font-semibold">Layer</th>
									<th class="px-4 py-3 font-semibold">Technologies</th>
								</tr>
							</thead>
							<tbody class="text-slate-300">
								<tr class="border-t border-slate-700/80"><td class="px-4 py-2 font-medium">Core</td><td class="px-4 py-2">React 18, TypeScript, React Router 7</td></tr>
								<tr class="border-t border-slate-700/80"><td class="px-4 py-2 font-medium">Build</td><td class="px-4 py-2">Vite 6</td></tr>
								<tr class="border-t border-slate-700/80"><td class="px-4 py-2 font-medium">Styling</td><td class="px-4 py-2">Tailwind CSS 3, Chakra UI 3, MUI 7, Framer Motion</td></tr>
								<tr class="border-t border-slate-700/80"><td class="px-4 py-2 font-medium">State</td><td class="px-4 py-2">Redux Toolkit, React Context (Auth, Cart, Theme, Sidebar)</td></tr>
								<tr class="border-t border-slate-700/80"><td class="px-4 py-2 font-medium">Data</td><td class="px-4 py-2">TanStack React Query, Axios, 69+ API service modules</td></tr>
								<tr class="border-t border-slate-700/80"><td class="px-4 py-2 font-medium">Maps & Data</td><td class="px-4 py-2">React Google Maps API, Leaflet, Recharts, Chart.js</td></tr>
								<tr class="border-t border-slate-700/80"><td class="px-4 py-2 font-medium">UX</td><td class="px-4 py-2">React Hot Toast, React Toastify, React Select, date-fns, dayjs</td></tr>
								<tr class="border-t border-slate-700/80"><td class="px-4 py-2 font-medium">Documents</td><td class="px-4 py-2">jsPDF, ExcelJS, PapaParse, react-to-print</td></tr>
								<tr class="border-t border-slate-700/80"><td class="px-4 py-2 font-medium">Other</td><td class="px-4 py-2">Socket.io client, React Flow, Mermaid, Calendly, signature canvas</td></tr>
							</tbody>
						</table>
					</div>
				</section>
				<section>
					<h3 class="mb-3 text-lg font-semibold text-cyan-300">1.3 Product Areas (Multi-tenant, Role-Based)</h3>
					<ul class="space-y-2 text-slate-300 text-sm">
						<li><strong class="text-slate-200">Landing & Marketing:</strong> Home, About Us, Pricing, Resources, Support, Blog (listing + article pages).</li>
						<li><strong class="text-slate-200">Distributor:</strong> Dashboard, orders, shop orders, routes, cart, products, inventory, price list, returns, analytics, customers.</li>
						<li><strong class="text-slate-200">Manufacturer:</strong> Dashboard, direct orders, distributor orders, modern trade (customers, branches, orders, team), products (GT/MT), pricing, promotions, reports (GT, MT, competitor, product pricing), alerts (visit duration), van sales, user management, tutorial hub, billing.</li>
						<li><strong class="text-slate-200">Dealer CRM:</strong> Dashboard, leads, GARIS/prospects, entities, follow-ups, pipeline, reports, test drives, inventory, customers, accessories, workshop, settings.</li>
						<li><strong class="text-slate-200">ERP:</strong> Dashboard, financial, invoices, procurement, HR, branch views (feature-flagged).</li>
						<li><strong class="text-slate-200">Sales:</strong> Sales Admin (team, map, distributors, settings), Sales Rep (customers, orders), ASM, RSM, HOS (regions map).</li>
						<li><strong class="text-slate-200">Ops:</strong> Placeholder and ops-specific flows.</li>
						<li><strong class="text-slate-200">Merchandising:</strong> Layout, outlets list, outlet detail, task screen.</li>
						<li><strong class="text-slate-200">Admin:</strong> Account management, analytics, attendance, KPI, modern trade, security monitoring (alerts, audit log, notification center), support operations (emergency recovery, support center, system maintenance), system management (data, documentation, license/billing).</li>
						<li><strong class="text-slate-200">Accounting:</strong> Dedicated accounting wrapper and flows.</li>
					</ul>
				</section>
				<section>
					<h3 class="mb-3 text-lg font-semibold text-cyan-300">1.4 Architecture & Patterns</h3>
					<ul class="list-inside list-disc space-y-1 text-slate-300 text-sm">
						<li><strong>Code splitting:</strong> Lazy-loaded route chunks for Manufacturer, Admin, Accounting, ERP, Dealer CRM, Sales, Ops, RSM, ASM, HOS, Merchandising to keep initial bundle smaller.</li>
						<li><strong>Protected routes:</strong> <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-cyan-200">ProtectedRoute</code> checks auth (context + <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-cyan-200">accessToken</code>), OTP verification, and new-user onboarding redirect.</li>
						<li><strong>Role-based redirects:</strong> e.g. Dealer CRM default route by role (workshop, inventory, GARIS, dashboard).</li>
						<li><strong>Layouts:</strong> Landing (Header + children + Footer), main app layouts per product (Distributor, Manufacturer, Dealer CRM, ERP, Sales, Admin, etc.).</li>
						<li><strong>Error handling:</strong> React <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-cyan-200">ErrorBoundary</code> with user-friendly fallback, refresh and go-back actions; dev-only error details.</li>
					</ul>
				</section>
				<section>
					<h3 class="mb-3 text-lg font-semibold text-cyan-300">1.5 Reusable UI & UX</h3>
					<ul class="space-y-1 text-slate-300 text-sm">
						<li><strong class="text-slate-200">Components:</strong> VirtualTable, PaginationControls, ProductCard, ProductGrid, ProductViewToggle, SearchFilterBar, Calendar, Notes (with filter/form), ActivityTimeLine, SalesPerformanceChart, RoutePlanner, TeamMembersGrid, UserCard, SkeletonComponents, ProgressiveLoader, PDFModal, ThemeToggle.</li>
						<li><strong class="text-slate-200">Theme:</strong> <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-cyan-200">ThemeContext</code> with light/dark/system, persisted in <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-cyan-200">localStorage</code>, respects <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-cyan-200">prefers-color-scheme</code>.</li>
						<li><strong class="text-slate-200">Design system:</strong> Tailwind theme extension (primary palette, custom grays for dark mode).</li>
						<li><strong class="text-slate-200">Loading:</strong> Suspense with shared loading fallback (spinner) for lazy routes.</li>
						<li><strong class="text-slate-200">OAuth UX:</strong> Popup detector for OAuth callback; postMessage to opener; “Connection successful” and auto-close.</li>
					</ul>
				</section>
				<section>
					<h3 class="mb-3 text-lg font-semibold text-cyan-300">1.6 Data & Services</h3>
					<ul class="list-inside list-disc space-y-1 text-slate-300 text-sm">
						<li><strong>Services:</strong> 69+ modules (auth, orders, products, modern trade, distributors, customers, reports, billing, attendance, ERP, Dealer CRM, etc.) with consistent patterns and env-based API base URL.</li>
						<li><strong>State:</strong> Redux slices for orders (direct, shop, modern trade), financial, HR, procurement, navigation; React Query for server state where appropriate.</li>
						<li><strong>Bridges:</strong> Order service bridge for cross-module behavior.</li>
					</ul>
				</section>
				<section>
					<h3 class="mb-3 text-lg font-semibold text-cyan-300">1.7 Quality & DX</h3>
					<ul class="list-inside list-disc space-y-1 text-slate-300 text-sm">
						<li><strong>Types:</strong> Shared types for customers, orders, distributors, KPIs, sidebar preferences, etc.</li>
						<li><strong>Utils:</strong> Date formatting, cart helpers, CSV parsing/validation, PDF generation, Google Maps config, toast helpers, WebSocket helpers, retry with backoff.</li>
						<li><strong>Tests:</strong> Vitest + React Testing Library; tests for competitor Excel upload, distributor order receive form.</li>
					</ul>
				</section>
			</div>
		{:else if activeTab === 'security'}
			<div class="odaflow-panel space-y-8" role="tabpanel">
				<section>
					<h3 class="mb-3 text-lg font-semibold text-violet-300">2.1 Authentication</h3>
					<ul class="list-inside list-disc space-y-1 text-slate-300 text-sm">
						<li><strong>Auth context:</strong> Central <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-violet-200">AuthContext</code> with token, isAuthenticated, login, logout; token stored in localStorage (remember me) or sessionStorage (session-only).</li>
						<li><strong>Token handling:</strong> Single accessToken key; refresh flow in authService. Logout clears both storages and rememberMe.</li>
						<li><strong>Protected routes:</strong> ProtectedRoute ensures authenticated user, OTP verified, and redirects new users to onboarding.</li>
						<li><strong>OTP & onboarding:</strong> Verify OTP step and post-login onboarding flow before granting full app access.</li>
					</ul>
				</section>
				<section>
					<h3 class="mb-3 text-lg font-semibold text-violet-300">2.2 API Security</h3>
					<ul class="list-inside list-disc space-y-1 text-slate-300 text-sm">
						<li><strong>Axios (authService):</strong> Request interceptor attaches <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-violet-200">Authorization: Bearer &lt;token&gt;</code> from localStorage or sessionStorage.</li>
						<li><strong>401 handling:</strong> Response interceptor on 401 attempts refresh via <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-violet-200">/api/auth/refresh-token</code>; on failure clears auth storage and redirects to <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-violet-200">/login?session=expired</code>.</li>
						<li><strong>Consistency:</strong> Other services use the same Bearer token pattern for authenticated calls.</li>
						<li><strong>Base URL:</strong> All API base URLs from <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-violet-200">import.meta.env.VITE_API_BASE_URL</code> (no hardcoded production URLs in code).</li>
					</ul>
				</section>
				<section>
					<h3 class="mb-3 text-lg font-semibold text-violet-300">2.3 OAuth & Popup Security</h3>
					<ul class="list-inside list-disc space-y-1 text-slate-300 text-sm">
						<li><strong>OAuth callback:</strong> Dedicated <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-violet-200">oauth-callback.html</code>; reads success/error/message from URL and sends result to opener via <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-violet-200">postMessage(..., window.location.origin)</code> so only same-origin parent receives the message.</li>
						<li><strong>Popup detector:</strong> In-app component detects OAuth success in popup, shows “Connection successful” and closes; communicates to parent via postMessage with origin-bound messaging.</li>
					</ul>
				</section>
				<section>
					<h3 class="mb-3 text-lg font-semibold text-violet-300">2.4 Role & Access Control</h3>
					<ul class="list-inside list-disc space-y-1 text-slate-300 text-sm">
						<li><strong>Admin:</strong> AdminWrapper and AdminLogin; admin routes gated by authorization check.</li>
						<li><strong>Accounting:</strong> AccountingWrapper with explicit authorization check.</li>
						<li><strong>Dealer CRM:</strong> Role-based default redirect so users land on allowed areas.</li>
					</ul>
				</section>
				<section>
					<h3 class="mb-3 text-lg font-semibold text-violet-300">2.5 Error Handling & Safe Logging</h3>
					<ul class="list-inside list-disc space-y-1 text-slate-300 text-sm">
						<li><strong>Centralized errors:</strong> <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-violet-200">errorHandler.ts</code> with parseError() for network, API (4xx/5xx), validation, and auth errors; user-friendly messages and retryability.</li>
						<li><strong>Auth errors:</strong> handleAuthError() clears tokens and redirects to login with <code class="rounded bg-slate-700/60 px-1.5 py-0.5 text-violet-200">?reason=session_expired</code>.</li>
						<li><strong>Production logging:</strong> logger in errorHandler.ts; in production, logs are sanitized (no tokens, passwords, userId, request body, etc.) to avoid leaking sensitive data.</li>
						<li><strong>Retry:</strong> retryWithBackoff and retryUtils (exponential backoff, jitter) for retryable operations.</li>
					</ul>
				</section>
				<section>
					<h3 class="mb-3 text-lg font-semibold text-violet-300">2.6 Security Monitoring & Audit (Admin)</h3>
					<ul class="list-inside list-disc space-y-1 text-slate-300 text-sm">
						<li><strong>Security Alerts:</strong> SecurityMonitoringHub components for alerts (e.g. failed logins, brute force), severity, IP/location, recommended actions.</li>
						<li><strong>Audit log:</strong> User, action, resource, timestamp, IP, location, status, severity, category; GDPR-aware fields and data retention.</li>
						<li><strong>Notification center:</strong> Central place for security-related notifications and metadata (e.g. system component, IP).</li>
					</ul>
				</section>
				<section>
					<h3 class="mb-3 text-lg font-semibold text-violet-300">2.7 Input & Data Safety</h3>
					<ul class="list-inside list-disc space-y-1 text-slate-300 text-sm">
						<li><strong>CSV:</strong> csvValidator for branch CSV: BOM and line-ending normalization, quote-aware parsing, cleaned output; validation structure in place to extend for stricter checks.</li>
						<li><strong>Safe storage:</strong> safeLocalStorage and safeJsonParse in errorHandler.ts to avoid crashes on malformed or missing data.</li>
					</ul>
				</section>
				<section>
					<h3 class="mb-3 text-lg font-semibold text-violet-300">2.8 Crawler & Visibility</h3>
					<ul class="list-inside list-disc space-y-1 text-slate-300 text-sm">
						<li><strong>robots.txt:</strong> Disallow indexing of private/app routes: /distributor/, /manufacturer/, /ops/, /asm/, /rsm/, /erp/, /dealer-crm/, /login, /signup, /verify-otp, /onboarding. Explicit Allow for public pages and sitemap reference.</li>
					</ul>
				</section>
				<section>
					<h3 class="mb-3 text-lg font-semibold text-violet-300">2.9 Deployment & Headers</h3>
					<ul class="list-inside list-disc space-y-1 text-slate-300 text-sm">
						<li><strong>vercel.json:</strong> Correct Content-Type for sitemap.xml and robots.txt; cache rules for static assets and index.html (no long-term cache for HTML). SPA fallback for client-side routing.</li>
					</ul>
				</section>
			</div>
		{:else if activeTab === 'seo'}
			<div class="odaflow-panel space-y-8" role="tabpanel">
				<section>
					<h3 class="mb-3 text-lg font-semibold text-cyan-300">3.1 Global Meta & Index (index.html)</h3>
					<ul class="list-inside list-disc space-y-1 text-slate-300 text-sm">
						<li><strong>Primary meta:</strong> Title, description, keywords, author, robots (index, follow), language, revisit-after, geo (region, placename, ICBM), distribution, rating, target, audience.</li>
						<li><strong>Canonical:</strong> Single canonical URL for the homepage.</li>
						<li><strong>Alternate/hreflang:</strong> en, en-KE, x-default for language/region targeting.</li>
						<li><strong>Favicon:</strong> PNG favicon, shortcut icon, apple-touch-icon.</li>
					</ul>
				</section>
				<section>
					<h3 class="mb-3 text-lg font-semibold text-cyan-300">3.2 Open Graph & Social</h3>
					<ul class="list-inside list-disc space-y-1 text-slate-300 text-sm">
						<li><strong>OG:</strong> og:type, og:url, og:title, og:description, og:image (with dimensions), og:site_name, og:locale, og:locale:alternate.</li>
						<li><strong>Twitter:</strong> twitter:card (summary_large_image), twitter:url, twitter:title, twitter:description, twitter:image.</li>
					</ul>
				</section>
				<section>
					<h3 class="mb-3 text-lg font-semibold text-cyan-300">3.3 Structured Data (JSON-LD)</h3>
					<ul class="list-inside list-disc space-y-1 text-slate-300 text-sm">
						<li><strong>SoftwareApplication:</strong> Name, category, OS, offers (price/currency), aggregateRating, description, featureList, areaServed, keywords.</li>
						<li><strong>Organization:</strong> Name, url, logo, description, sameAs (LinkedIn, Twitter), contactPoint (languages, areaServed), areaServed.</li>
						<li><strong>WebSite:</strong> Name, url, description, potentialAction (SearchAction with query-input), keywords.</li>
						<li><strong>ItemList:</strong> “OdaFlow Features” list for key product features.</li>
					</ul>
				</section>
				<section>
					<h3 class="mb-3 text-lg font-semibold text-cyan-300">3.4 Per-Page SEO Component</h3>
					<ul class="list-inside list-disc space-y-1 text-slate-300 text-sm">
						<li><strong>Reusable SEO component:</strong> Props for title, description, keywords, image, url, type. Uses useLocation() for current path when url not provided.</li>
						<li><strong>Updates:</strong> Document title; meta tags (name and property); Open Graph and Twitter Card; canonical link (create or update).</li>
						<li><strong>Usage:</strong> Main landing, About Us, Pricing, Resources, Support, Blog listing, and every Blog article.</li>
					</ul>
				</section>
				<section>
					<h3 class="mb-3 text-lg font-semibold text-cyan-300">3.5 Blog & Article SEO</h3>
					<ul class="list-inside list-disc space-y-1 text-slate-300 text-sm">
						<li><strong>Blog listing:</strong> SEO component with blog-specific title/description/keywords.</li>
						<li><strong>Blog article:</strong> SEO component with article title, excerpt, and tags/categories as keywords; canonical https://www.odaflow.com/blog/&lt;slug&gt;.</li>
						<li><strong>Article schema:</strong> JSON-LD Article with headline, description, datePublished, dateModified, author (Organization), publisher (OdaFlow), mainEntityOfPage.</li>
					</ul>
				</section>
				<section>
					<h3 class="mb-3 text-lg font-semibold text-cyan-300">3.6 Sitemap & Crawlability</h3>
					<ul class="list-inside list-disc space-y-1 text-slate-300 text-sm">
						<li><strong>sitemap.xml:</strong> All important public URLs: homepage, about-us, pricing, resources, support, blog, blog articles (sample entries), privacypolicy, terms, cookiepolicy; lastmod, changefreq, priority per URL.</li>
						<li><strong>robots.txt:</strong> Allow public paths; disallow app/auth paths; Sitemap: https://www.odaflow.com/sitemap.xml.</li>
						<li><strong>Vercel:</strong> Sitemap and robots served with correct Content-Type so crawlers read them properly.</li>
					</ul>
				</section>
				<section>
					<h3 class="mb-3 text-lg font-semibold text-cyan-300">3.7 Analytics & Tracking</h3>
					<ul class="list-inside list-disc space-y-1 text-slate-300 text-sm">
						<li><strong>GA4:</strong> Google tag in index.html (gtag.js); measurement ID from env or default.</li>
						<li><strong>SPA tracking:</strong> GoogleAnalytics component uses useLocation() to call trackPageView(path, title) on route change so every view is tracked.</li>
						<li><strong>Utilities:</strong> googleAnalytics.ts exposes trackPageView, trackEvent, trackLogin, trackSignUp, trackScroll, trackDownload, trackOutboundLink, trackSearch, trackFormSubmit, setUserProperties, setUserId, clearUserId for consistent event and user tracking.</li>
					</ul>
				</section>
			</div>
		{:else if activeTab === 'summary'}
			<div class="odaflow-panel space-y-6" role="tabpanel">
				<p class="text-slate-400 text-sm">
					Summary of front end implementation, security measures, and SEO work for the OdaFlow marketing and product web app (OdaWeb).
				</p>
				<div class="overflow-x-auto rounded-lg border border-slate-700/80">
					<table class="w-full min-w-[400px] text-left text-sm">
						<thead class="bg-slate-800/80">
							<tr>
								<th class="px-4 py-3 font-semibold text-cyan-300">Area</th>
								<th class="px-4 py-3 font-semibold text-violet-300">Highlights</th>
							</tr>
						</thead>
						<tbody class="text-slate-300">
							<tr class="border-t border-slate-700/80">
								<td class="px-4 py-3 font-medium text-slate-200">Front end</td>
								<td class="px-4 py-3">500+ files, 238+ routes, multi-tenant role-based app (Distributor, Manufacturer, Dealer CRM, ERP, Sales, Admin, Accounting, etc.), lazy loading, shared UI and theme, 69+ services, Redux + React Query.</td>
							</tr>
							<tr class="border-t border-slate-700/80">
								<td class="px-4 py-3 font-medium text-slate-200">Security</td>
								<td class="px-4 py-3">AuthContext + ProtectedRoute, Bearer + refresh token, OAuth postMessage origin check, role-based access, centralized error handling and sanitized production logs, Security Alerts & Audit Log, robots.txt for private routes, safe storage and retry.</td>
							</tr>
							<tr class="border-t border-slate-700/80">
								<td class="px-4 py-3 font-medium text-slate-200">SEO</td>
								<td class="px-4 py-3">Full meta and OG/Twitter in index.html, JSON-LD (SoftwareApplication, Organization, WebSite, ItemList), per-page SEO component, Article schema for blog, sitemap.xml and robots.txt, GA4 + SPA page view and event tracking.</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div class="rounded-lg border border-cyan-500/20 bg-cyan-500/5 p-4">
					<p class="text-xs text-slate-400 italic">
						This document summarizes front end implementation, security measures, and SEO work for the OdaFlow marketing and product web app (OdaWeb). You can copy sections into your portfolio, LinkedIn, or CV and adjust wording to first person and context as needed.
					</p>
				</div>
			</div>
		{/if}
	</div>
</div>
