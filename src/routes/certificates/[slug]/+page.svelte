<svelte:options runes={true} />

<script>
	import { onMount } from 'svelte';

	let { data } = $props();
	const cert = $derived(data.cert);
	const canonicalUrl = $derived(data.canonicalUrl);
	const pageTitle = $derived(`${cert.title} | Certificate`);
	const description = $derived(`${cert.title} — ${cert.issuer}. ${cert.description}`);

	let pdfPages = $state([]);
	let loading = $state(true);
	let error = $state(null);

	onMount(() => {
		const pdfUrl = typeof window !== 'undefined' ? `${window.location.origin}${cert.file}` : cert.file;
		loadPdfWithFallback(pdfUrl);
	});

	async function loadPdfScript() {
		if (typeof window === 'undefined') return false;
		if (window.pdfjsLib) return true;
		return new Promise((resolve) => {
			const script = document.createElement('script');
			script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';
			script.onload = () => resolve(true);
			script.onerror = () => resolve(false);
			document.head.appendChild(script);
		});
	}

	async function loadPdfWithFallback(pdfUrl) {
		loading = true;
		error = null;
		pdfPages = [];

		const scriptLoaded = await loadPdfScript();

		if (scriptLoaded && window.pdfjsLib) {
			try {
				window.pdfjsLib.GlobalWorkerOptions.workerSrc =
					'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
				// Disable range requests so dev/static servers that return 204 for ranges still work
				const loadingTask = window.pdfjsLib.getDocument({
					url: pdfUrl,
					disableRange: true
				});
				const pdf = await loadingTask.promise;
				const numPages = pdf.numPages;
				const pages = [];
				for (let i = 1; i <= numPages; i++) {
					const pdfPage = await pdf.getPage(i);
					pages.push({ pdfPage, pageNum: i });
				}
				pdfPages = pages;
			} catch (e) {
				error = e?.message || 'Failed to load PDF';
			}
		} else {
			error = 'PDF viewer could not load.';
		}

		loading = false;
		if (error && !pdfPages.length) {
			// Keep iframe fallback visible
		}
	}

	function canvasRenderer(canvas, { pdfPage, pageNum }) {
		if (!canvas || !pdfPage) return;
		const scale = 1.8;
		const viewport = pdfPage.getViewport({ scale });
		canvas.height = viewport.height;
		canvas.width = viewport.width;
		const ctx = canvas.getContext('2d');
		pdfPage.render({ canvasContext: ctx, viewport }).promise.catch(() => {});
		return {
			destroy() {}
		};
	}
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={pageTitle} />
	<meta name="twitter:description" content={description} />
</svelte:head>

<div class="cert-preview-page">
	<header class="cert-preview-header">
		<div class="cert-preview-meta">
			<h1 class="cert-preview-title">{cert.title}</h1>
			<p class="cert-preview-issuer">{cert.issuer}</p>
		</div>
		<div class="cert-preview-actions">
			<a href={cert.file} download class="cert-download-btn" aria-label="Download PDF">
				<i class="fa-solid fa-download"></i> Download PDF
			</a>
			<a href={cert.file} target="_blank" rel="noopener noreferrer" class="cert-download-btn cert-open-btn" aria-label="Open PDF in new tab">
				<i class="fa-solid fa-external-link-alt"></i> Open in new tab
			</a>
			<a href="/" class="cert-back-link" aria-label="Back to profile">Back to profile</a>
		</div>
	</header>

	<div class="cert-preview-embed">
		{#if loading}
			<div class="cert-pdf-loading">
				<div class="cert-pdf-spinner"></div>
				<p>Loading PDF…</p>
			</div>
		{:else if error && pdfPages.length === 0}
			<div class="cert-pdf-fallback">
				<p class="cert-pdf-error">{error}</p>
				<iframe
					title="{cert.title} – certificate PDF"
					src="{cert.file}#toolbar=0"
					class="cert-pdf-iframe"
				></iframe>
				<p class="cert-pdf-open-hint">
					<a href={cert.file} target="_blank" rel="noopener noreferrer">Open PDF in new tab</a> if it doesn’t appear above.
				</p>
			</div>
		{:else}
			<div class="cert-pdf-pages">
				{#each pdfPages as { pdfPage, pageNum }}
					<div class="cert-pdf-page-wrap">
						<canvas
							class="cert-pdf-canvas"
							data-page-num={pageNum}
							use:canvasRenderer={{ pdfPage, pageNum }}
						></canvas>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</div>

<style>
	.cert-preview-page {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		background: linear-gradient(180deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%);
		color: #e2e8f0;
	}

	.cert-preview-header {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		padding: 1rem 1.5rem;
		border-bottom: 1px solid rgba(139, 92, 246, 0.3);
		background: rgba(15, 23, 42, 0.95);
	}

	.cert-preview-meta {
		min-width: 0;
	}

	.cert-preview-title {
		font-family: 'Poppins', sans-serif;
		font-size: 1.25rem;
		font-weight: 600;
		color: #e9d5ff;
		margin: 0 0 0.25rem 0;
		line-height: 1.3;
	}

	.cert-preview-issuer {
		font-size: 0.9rem;
		color: #a78bfa;
		margin: 0;
		opacity: 0.95;
	}

	.cert-preview-actions {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		flex-shrink: 0;
	}

	.cert-download-btn {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.5rem 1rem;
		background: rgba(139, 92, 246, 0.25);
		border: 1px solid rgba(139, 92, 246, 0.5);
		border-radius: 8px;
		color: #c4b5fd;
		text-decoration: none;
		font-size: 0.9rem;
		transition: background 0.2s, border-color 0.2s;
	}

	.cert-download-btn:hover {
		background: rgba(139, 92, 246, 0.4);
		border-color: #8b5cf6;
	}

	.cert-back-link {
		font-size: 0.9rem;
		color: #94a3b8;
		text-decoration: none;
		transition: color 0.2s;
	}

	.cert-back-link:hover {
		color: #c4b5fd;
	}

	.cert-preview-embed {
		flex: 1;
		min-height: 70vh;
		padding: 1rem;
		display: flex;
		justify-content: center;
		align-items: stretch;
	}

	.cert-pdf-iframe {
		width: 100%;
		max-width: 900px;
		min-height: 600px;
		border: none;
		border-radius: 8px;
		box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.4);
		background: #fff;
	}

	.cert-pdf-loading {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		min-height: 400px;
		color: #94a3b8;
	}

	.cert-pdf-spinner {
		width: 40px;
		height: 40px;
		border: 3px solid rgba(139, 92, 246, 0.3);
		border-top-color: #8b5cf6;
		border-radius: 50%;
		animation: cert-spin 0.8s linear infinite;
	}

	@keyframes cert-spin {
		to {
			transform: rotate(360deg);
		}
	}

	.cert-pdf-fallback {
		width: 100%;
		max-width: 900px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}

	.cert-pdf-error {
		color: #f87171;
		font-size: 0.9rem;
		margin: 0;
	}

	.cert-pdf-open-hint {
		margin: 0;
		font-size: 0.9rem;
		color: #94a3b8;
	}

	.cert-pdf-open-hint a {
		color: #a78bfa;
		text-decoration: none;
	}

	.cert-pdf-open-hint a:hover {
		text-decoration: underline;
	}

	.cert-pdf-pages {
		width: 100%;
		max-width: 900px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}

	.cert-pdf-page-wrap {
		width: 100%;
		display: flex;
		justify-content: center;
		background: #fff;
		border-radius: 8px;
		box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.4);
		overflow: hidden;
	}

	.cert-pdf-canvas {
		display: block;
		max-width: 100%;
		height: auto;
	}

	.cert-open-btn {
		background: transparent;
		border-color: rgba(148, 163, 184, 0.5);
		color: #94a3b8;
	}

	.cert-open-btn:hover {
		background: rgba(148, 163, 184, 0.15);
		border-color: #94a3b8;
		color: #e2e8f0;
	}
</style>
