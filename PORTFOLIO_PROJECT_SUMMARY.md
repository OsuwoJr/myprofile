# Kentall Builders & Construction Company — Project Summary

**Portfolio-ready technical overview: Frontend, Security & SEO**

---

## 1. Project Overview

| Item | Details |
|------|---------|
| **Client / Product** | KENTALL BUILDERS & CONSTRUCTION COMPANY (Kenya) |
| **Purpose** | Marketing site + lead generation (contact, quote requests) |
| **Live URL** | https://kentall.vercel.app |
| **Stack** | SvelteKit 2, Svelte 5, TypeScript, Tailwind CSS 4, Vite 6 |
| **Deployment** | Vercel (adapter-vercel) |
| **Analytics** | Google Analytics (gtag.js, nonce-protected) |

The site presents the company’s services, projects, team, and values, and captures leads via a contact form and a detailed quote request form. All form submissions are rate-limited, validated, and forwarded to Formspree.

---

## 2. Frontend

### 2.1 Architecture & Routing

- **Framework**: SvelteKit with file-based routing.
- **Pages**:
  - `/` — Home (hero, stats, services, process, testimonials, FAQ, CTA)
  - `/about` — Company story, values, founder, team
  - `/services` — Categorized services (architectural, construction, interior, etc.) with expandable cards
  - `/projects` — Filterable project gallery (Residential, Commercial, Institutional)
  - `/projects/[id]` — Dynamic project detail (gallery, description, challenge/solution, features, materials)
  - `/gallery` — Media gallery (images + videos) with category filter and lightbox
  - `/contact` — Contact form, office info, map link
  - `/quote` — Multi-step-style quote form (project type, services, budget, timeframe, description)
  - `/privacy`, `/terms`, `/accessibility` — Legal and accessibility pages

- **Layout**: Global layout (`+layout.svelte`) with skip link, shared Footer, and global image error handling + critical image preloading.
- **Error handling**: Custom `+error.svelte` with branded messaging and links (Home, Quote).

### 2.2 Design System & Styling

- **CSS**: Global `app.css` with Tailwind (`@import 'tailwindcss'`, `@plugin '@tailwindcss/typography'`).
- **Variables** (e.g. in `:root`):
  - Primary: `#0F3457` (headers, CTAs)
  - Secondary: `#2C5282` (accents/hovers)
  - Gold: `#FBB034` (luxury accents)
  - Light: `#F8F9FA` (backgrounds)
  - Dark: `#1A202C` (text/dark sections)
- **Typography**: Montserrat (headings, 600/700), Raleway (body, 300/400/600); loaded via Google Fonts with `preconnect` for performance.
- **Components**: Reusable set in `$lib/components/`: Header, Footer, Hero, ServicesSection, ProcessSection, StatsSection, Testimonials, FAQSection, CallToActionSection, WhyKentallSection, KentallAdvantageSection, FounderSection, ServiceCard, BookingWidget.

### 2.3 UX & Interactivity

- **Responsive**: Mobile-first; Header uses a hamburger menu on small screens with full nav overlay.
- **Hero**: Video background with image slideshow fallback on error or for performance; mobile detection.
- **Animations**: Scroll-triggered reveals (`.animate-on-scroll` + IntersectionObserver); optional `fade` transitions on some pages; `prefers-reduced-motion` respected (animations/transitions minimized).
- **Images**: Global `error` listener for failed images (cache-busting retry, `.image-load-error` class); project pages use loading/error state and optional placeholders; critical project images preloaded in layout.
- **Forms**: Contact and Quote forms submit to `/api/contact` and `/api/quote` with loading state, success message, and user-facing error display; honeypot field (`website`) on the client for bot mitigation.

### 2.4 Accessibility (a11y)

- **Skip link**: “Skip to main content” in layout; visible on focus.
- **Semantic structure**: `<main id="main-content">`, `<header>`, `<footer>`, `<nav>`, `<address>`.
- **Focus**: Visible focus outline (e.g. gold, 2px) for keyboard users.
- **Interactive elements**: Buttons and nav toggle use `aria-label` (e.g. “Open menu” / “Close menu”).
- **External links**: `target="_blank"` with `rel="noopener noreferrer"` and descriptive `aria-label` where appropriate.
- **Reduced motion**: `@media (prefers-reduced-motion: reduce)` disables or shortens animations/transitions.
- **Forced colors**: `@media (forced-colors: active)` for high-contrast mode (e.g. `.text-gold`, `.bg-gold`).
- **Dedicated page**: `/accessibility` documents commitment (WCAG 2.1 AA aim, keyboard nav, screen readers, skip link, etc.).

---

## 3. Security

### 3.1 Server-Side Security (hooks.server.ts)

- **Content-Security-Policy (CSP)**:
  - `default-src 'self'`; `base-uri 'self'`; `form-action 'self'`; `frame-ancestors 'none'`; `object-src 'none'`.
  - `script-src`: `'self'`, `'nonce-{random}'`, `https://www.googletagmanager.com`, `https://www.google-analytics.com`.
  - `script-src-attr 'none'` (no inline event handlers).
  - `style-src`: `'self' 'unsafe-inline' https://fonts.googleapis.com`.
  - `font-src`: `'self' data: https://fonts.gstatic.com`.
  - `img-src`: `'self' data: blob:`.
  - `connect-src`: `'self'`, Google Analytics endpoints.
  - `upgrade-insecure-requests` to enforce HTTPS.
  - **Nonce**: Per-request nonce; injected into `app.html` for gtag and into all `<script>` tags via `transformPageChunk`, so only allowed scripts run.

- **Other security headers** (set in hook; duplicated in `vercel.json` for edge):
  - **Strict-Transport-Security**: `max-age=31536000; includeSubDomains; preload` (production only).
  - **X-Content-Type-Options**: `nosniff`.
  - **Referrer-Policy**: `strict-origin-when-cross-origin`.
  - **Permissions-Policy**: `camera=(), microphone=(), geolocation=(), payment=(), usb=()`.
  - **Cross-Origin-Opener-Policy**: `same-origin`.
  - **Cross-Origin-Resource-Policy**: `same-site`.
  - **X-Frame-Options**: `DENY`.

### 3.2 API Security (Contact & Quote)

- **Rate limiting** (in-memory, per IP):
  - Contact: 5 requests per 10 minutes per IP (`contact:${ip}`).
  - Quote: 3 requests per 10 minutes per IP (`quote:${ip}`).
  - On limit: `429` with `Retry-After` and JSON `{ ok: false, error: "Too many submissions..." }`.

- **Origin check**: If `Origin` header is present, it must match `event.url.origin`; otherwise `403` and `{ ok: false, error: "Invalid origin." }`.

- **Honeypot**: Fields `website`, `company`, or `_website` (normalized, max length). If any is non-empty, response is `200` with `{ ok: true }` but no forward to Formspree (silent bot discard).

- **Input validation**:
  - All text normalized (trim, collapse whitespace, length caps).
  - Contact: name (120), email (254), phone (50), subject (160), message (4000); email regex + length.
  - Quote: fullName (140), email (254), phone (50), location (120), projectType (50), serviceNeeded (array, 20 items, 60 chars each), budget (60), timeframe (60), description (6000), hearAboutUs (200), contactPreference (30).
  - Required fields enforced; Quote requires at least one service. Invalid/empty required fields return `400` with clear error message.

- **Forwarding**: Valid payloads (with `_meta`: IP, user-agent, referer, timestamp) are sent to Formspree; on Formspree error, API returns `502` with generic user message (no leaking of third-party details).

### 3.3 Deployment (vercel.json)

- Same security headers as above applied at the edge for all routes `/(.*)`, reinforcing HSTS, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, COOP, CORP, and X-Frame-Options.

---

## 4. SEO

### 4.1 Global (app.html)

- **Charset & viewport**: UTF-8, responsive viewport.
- **Default title**: “KENTALL BUILDERS & CONSTRUCTION COMPANY | From Foundation to Finish”.
- **Default meta**: description, keywords, author, `robots` (index, follow), application-name, theme-color.
- **Performance**: `preconnect` for Google Fonts; X-UA-Compatible for IE.
- **Verification**: `google-site-verification` meta tag.
- **Favicon**: `%sveltekit.assets%/favicon.png`.

### 4.2 Per-Page SEO

Every main page sets:

- **`<title>`** — Unique, brand-suffixed (e.g. “About Us | KENTALL BUILDERS & CONSTRUCTION COMPANY”).
- **`<meta name="description">`** — Unique, concise summary.
- **`<link rel="canonical">`** — Absolute URL (e.g. `https://kentall.vercel.app/about`, `https://kentall.vercel.app/projects/2` for project detail).
- **Open Graph**: `og:type`, `og:url`, `og:title`, `og:description`, `og:site_name`, `og:image` (project detail uses first project image when available).
- **Twitter**: `twitter:card` (summary_large_image), `twitter:url`, `twitter:title`, `twitter:description`, `twitter:image`.

Pages with full meta + canonical + OG + Twitter: Home, About, Services, Projects (list), Projects [id], Gallery, Contact, Quote. Privacy, Terms, and Accessibility have at least title, description, and canonical.

### 4.3 Structured Data (JSON-LD)

- **Home** (`+page.svelte`):
  - **Organization**: name, alternateName, url, logo, description, address (Nairobi, KE), contactPoint (phone, email), sameAs (Instagram, X, LinkedIn, Facebook), areaServed (Kenya), serviceType list.
  - **LocalBusiness**: @id, name, image, url, telephone, email, address, geo (Nairobi coordinates), openingHoursSpecification (Mon–Sat 09:00–17:00), priceRange, areaServed, sameAs.
  - **FAQPage**: mainEntity of Question/Answer pairs (services, diaspora, timelines, areas, quality, payment, permits, warranty).

- **About**: **BreadcrumbList** (Home → About Us).

- **Contact**: **LocalBusiness** (same as home, with contact/address/geo/opening hours).

- **Services**: **BreadcrumbList** (Home → Our Services).

- **Projects (list)**: **BreadcrumbList** (Home → Our Projects).

- **Projects [id]**: **BreadcrumbList** (Home → Our Projects → Project title); canonical and OG/Twitter use project-specific URL and image.

- **Gallery**: **BreadcrumbList** (Home → Gallery).

- **Quote**: **BreadcrumbList** (Home → Request a Quote).

All inline JSON-LD scripts use the same CSP nonce as other scripts (`nonce="%cspNonce%"`).

### 4.4 Utilities & Conventions

- **Breadcrumbs**: `$lib/utils/breadcrumbs.ts` exposes `generateBreadcrumbSchema(items)` for consistent BreadcrumbList schema; used where applicable.
- **Consistent branding**: All titles and descriptions include “KENTALL BUILDERS & CONSTRUCTION COMPANY” or “Kentall Builders” and relevant keywords (e.g. Kenya, construction, architectural design, renovations).

---

## 5. Technical Highlights Summary

| Area | Highlights |
|------|-------------|
| **Frontend** | Svelte 5 + SvelteKit 2, TypeScript, Tailwind 4, responsive layout, scroll animations, image error handling and preload, reduced-motion and high-contrast support, skip link and semantic HTML. |
| **Security** | CSP with nonce, HSTS, X-Frame-Options, nosniff, COOP/CORP, Permissions-Policy; rate limiting and origin check on APIs; honeypot and strict server-side validation; safe error responses. |
| **SEO** | Unique title/description/canonical and full OG/Twitter on all main pages; JSON-LD Organization, LocalBusiness, FAQPage, BreadcrumbList; Google verification and analytics. |
| **Deployment** | Vercel with security headers at edge; server and edge headers aligned. |

---

## 6. Repo & Maintenance Notes

- **Scripts**: `npm run dev`, `npm run build`, `npm run preview`, `npm run check` / `check:watch`, `format`, `lint`.
- **Code quality**: Prettier + Prettier plugins (Svelte, Tailwind); TypeScript strict.
- **Cookie override**: `cookie: "0.7.2"` in `package.json` overrides for dependency resolution.

This document is intended as a single reference for portfolio use, summarizing frontend implementation, security measures, and SEO strategy for the Kentall Builders website.
