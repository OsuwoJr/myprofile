<svelte:options runes={true} />

<script>
	import { goto } from '$app/navigation';

	let showHint = $state(false);

	function handleClick() {
		goto('/contact');
	}
</script>

<div class="floating-contact-wrap" role="presentation">
	<a
		href="/contact"
		class="floating-contact-btn"
		aria-label="Contact me"
		onclick={(e) => {
			e.preventDefault();
			handleClick();
		}}
		onmouseenter={() => (showHint = true)}
		onmouseleave={() => (showHint = false)}
		onfocus={() => (showHint = true)}
		onblur={() => (showHint = false)}
	>
		<span class="floating-contact-text">Contact Me</span>
		<i class="fa-solid fa-bolt text-violet-400 ml-1.5 text-sm" aria-hidden="true"></i>
	</a>
	{#if showHint}
		<div class="floating-contact-hint" role="tooltip">Get in touch</div>
	{/if}
</div>

<style>
	.floating-contact-wrap {
		position: fixed;
		bottom: 1.25rem;
		left: 1.25rem;
		z-index: 50;
	}

	@media (min-width: 640px) {
		.floating-contact-wrap {
			bottom: 1.5rem;
			left: 1.5rem;
		}
	}

	.floating-contact-btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.65rem 1.1rem;
		border-radius: 9999px;
		background: #1a1a2e;
		color: #e9d5ff;
		font-weight: 600;
		font-size: 0.9rem;
		text-decoration: none;
		border: 2px solid rgba(139, 92, 246, 0.4);
		box-shadow:
			0 0 14px rgba(139, 92, 246, 0.35),
			0 4px 20px rgba(0, 0, 0, 0.4);
		cursor: pointer;
		transition: transform 0.2s ease, box-shadow 0.2s ease;
		animation: floatGlow 2.5s ease-in-out infinite;
	}

	.floating-contact-btn:hover,
	.floating-contact-btn:focus-visible {
		transform: scale(1.05);
		box-shadow:
			0 0 22px rgba(139, 92, 246, 0.6),
			0 0 36px rgba(167, 139, 250, 0.25);
		outline: none;
	}

	.floating-contact-text {
		font-family: 'Poppins', sans-serif;
	}

	.floating-contact-hint {
		position: absolute;
		left: 0;
		bottom: 100%;
		margin-bottom: 0.5rem;
		padding: 0.35rem 0.6rem;
		background: rgba(30, 27, 75, 0.95);
		color: #c4b5fd;
		font-size: 0.75rem;
		border-radius: 0.5rem;
		white-space: nowrap;
		pointer-events: none;
		animation: hintFade 0.2s ease;
		border: 1px solid rgba(139, 92, 246, 0.4);
	}

	@keyframes floatGlow {
		0%,
		100% {
			box-shadow: 0 0 14px rgba(139, 92, 246, 0.35), 0 4px 20px rgba(0, 0, 0, 0.4);
		}
		50% {
			box-shadow: 0 0 20px rgba(139, 92, 246, 0.5), 0 0 28px rgba(167, 139, 250, 0.2);
		}
	}

	@keyframes hintFade {
		from {
			opacity: 0;
			transform: translateY(4px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
