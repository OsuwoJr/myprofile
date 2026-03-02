<svelte:options runes={true} />

<script>
	import { goto } from '$app/navigation';

	// Position as percentage of viewport; stays within safe margins so button is always clickable
	let left = $state(18);
	let top = $state(35);
	let hint = $state('');
	let showHint = $state(false);

	const MOVE_INTERVAL_MS = 4200;
	const MIN_LEFT = 5;
	const MAX_LEFT = 78;
	const MIN_TOP = 12;
	const MAX_TOP = 78;

	const hints = [
		"Catch me if you can!",
		"Quick, click me!",
		"Ready when you are",
		"Over here!",
		"Nice try — try again!",
		"Almost got it!"
	];

	function randomInRange(min, max) {
		return min + Math.random() * (max - min);
	}

	function moveToNewSpot() {
		left = randomInRange(MIN_LEFT, MAX_LEFT);
		top = randomInRange(MIN_TOP, MAX_TOP);
		hint = hints[Math.floor(Math.random() * hints.length)];
	}

	function handleClick() {
		goto('/contact');
	}

	$effect(() => {
		moveToNewSpot(); // set initial random position
		const id = setInterval(moveToNewSpot, MOVE_INTERVAL_MS);
		return () => clearInterval(id);
	});
</script>

<div
	class="floating-contact-wrap"
	style="left: {left}%; top: {top}%;"
	role="presentation"
>
	<a
		href="/contact"
		class="floating-contact-btn"
		aria-label="Contact me — catch the floating button to open contact"
		onclick={(e) => { e.preventDefault(); handleClick(); }}
		onmouseenter={() => (showHint = true)}
		onmouseleave={() => (showHint = false)}
	>
		<span class="floating-contact-text">Contact Me</span>
		<i class="fa-solid fa-bolt text-violet-400 ml-1.5 text-sm" aria-hidden="true"></i>
	</a>
	{#if showHint && hint}
		<div class="floating-contact-hint" role="tooltip">{hint}</div>
	{/if}
</div>

<style>
	.floating-contact-wrap {
		position: fixed;
		z-index: 9;
		transform: translate(-50%, -50%);
		transition: left 0.85s cubic-bezier(0.34, 1.56, 0.64, 1), top 0.85s cubic-bezier(0.34, 1.56, 0.64, 1);
		pointer-events: none;
	}
	.floating-contact-btn {
		pointer-events: auto;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.6rem 1rem;
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
	.floating-contact-btn:hover {
		transform: scale(1.08);
		box-shadow:
			0 0 22px rgba(139, 92, 246, 0.6),
			0 0 36px rgba(167, 139, 250, 0.25);
	}
	.floating-contact-text {
		font-family: 'Poppins', sans-serif;
	}
	.floating-contact-hint {
		position: absolute;
		left: 50%;
		top: 100%;
		transform: translateX(-50%);
		margin-top: 0.5rem;
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
		0%, 100% {
			box-shadow: 0 0 14px rgba(139, 92, 246, 0.35), 0 4px 20px rgba(0, 0, 0, 0.4);
		}
		50% {
			box-shadow: 0 0 20px rgba(139, 92, 246, 0.5), 0 0 28px rgba(167, 139, 250, 0.2);
		}
	}
	@keyframes hintFade {
		from {
			opacity: 0;
			transform: translateX(-50%) translateY(-4px);
		}
		to {
			opacity: 1;
			transform: translateX(-50%) translateY(0);
		}
	}
</style>
