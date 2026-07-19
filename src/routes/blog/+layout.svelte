<svelte:options runes={true} />

<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let { children } = $props();
	let scrollProgress = $state(0);

	const showScrollProgress = $derived.by(() => {
		const path = $page.url.pathname;
		if (path === '/blog' || path === '/blog/playlists') return false;
		if (path.startsWith('/blog/playlist/')) return false;
		return path.startsWith('/blog/');
	});

	function updateProgress() {
		const { scrollY } = window;
		const docHeight = document.documentElement.scrollHeight - window.innerHeight;
		if (docHeight <= 0) {
			scrollProgress = 0;
			return;
		}
		scrollProgress = Math.min(100, (scrollY / docHeight) * 100);
	}

	onMount(() => {
		updateProgress();
		window.addEventListener('scroll', updateProgress, { passive: true });
		return () => window.removeEventListener('scroll', updateProgress);
	});
</script>

<div class="blog-layout">
	{#if showScrollProgress}
		<div
			class="scroll-progress"
			role="progressbar"
			aria-valuenow={Math.round(scrollProgress)}
			aria-valuemin="0"
			aria-valuemax="100"
			aria-label="Scroll progress"
		>
			<div class="scroll-progress-bar" style="width: {scrollProgress}%"></div>
		</div>
	{/if}
	{@render children()}
</div>

<style>
	.blog-layout {
		position: relative;
	}

	.scroll-progress {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		height: 3px;
		background: rgba(30, 41, 59, 0.9);
		z-index: 9999;
		overflow: hidden;
	}

	.scroll-progress-bar {
		height: 100%;
		background: linear-gradient(90deg, #7c3aed, #a78bfa);
		transition: width 0.1s ease-out;
	}
</style>
