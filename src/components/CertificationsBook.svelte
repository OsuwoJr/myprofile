<svelte:options runes={true} />

<script>
	import { certs, certUrl } from '$lib/certs.js';

	let isOpen = $state(false);
	let isOpening = $state(false);
	let currentIndex = $state(0);
	let isFlipping = $state(false);
	let flipDirection = $state(1); // 1 = next (right page moves left), -1 = prev (left page moves right)

	// Spread: left page = cert before current (or title); right page = current cert
	const leftCert = $derived(currentIndex > 0 ? certs[currentIndex - 1] : null);
	const rightCert = $derived(certs[currentIndex]);
	const nextCert = $derived(certs[(currentIndex + 1) % certs.length]);
	const prevCert = $derived(currentIndex === 0 ? certs[certs.length - 1] : certs[currentIndex - 1]);

	function openBook() {
		if (isOpen || isOpening) return;
		isOpening = true;
		setTimeout(() => {
			isOpen = true;
			isOpening = false;
		}, 800);
	}

	function closeBook() {
		if (!isOpen || isOpening) return;
		isOpen = false;
	}

	function goNext() {
		if (isFlipping || currentIndex >= certs.length - 1) return;
		flipDirection = 1;
		isFlipping = true;
		setTimeout(() => {
			currentIndex += 1;
			isFlipping = false;
		}, 600);
	}

	function goPrev() {
		if (isFlipping || currentIndex <= 0) return;
		flipDirection = -1;
		isFlipping = true;
		setTimeout(() => {
			currentIndex -= 1;
			isFlipping = false;
		}, 600);
	}
</script>

<div class="cert-book-wrapper">
	<div class="book-viewport">
		<!-- Closed book: single cover with "Public Certs" -->
		{#if !isOpen}
			<button
				type="button"
				class="book-cover-btn"
				onclick={openBook}
				aria-label="Open Public Certs book"
			>
				<div class="book-cover" class:opening={isOpening}>
					<div class="book-cover-left"></div>
					<div class="book-cover-right"></div>
					<!-- Title centered on the whole cover when closed -->
					<div class="book-cover-title-wrap">
						<span class="book-cover-title">Public Certs</span>
						<span class="book-cover-sub">Click to open</span>
					</div>
				</div>
			</button>
		{:else}
			<!-- Open book: two-page spread with spine -->
			<div class="book-spread-container">
				<button
					type="button"
					class="book-close"
					onclick={closeBook}
					aria-label="Close book"
				>
					<i class="fa-solid fa-times"></i>
				</button>

				<button
					type="button"
					class="book-nav book-nav-left"
					onclick={goPrev}
					disabled={isFlipping || currentIndex <= 0}
					aria-label="Previous page"
				>
					<i class="fa-solid fa-chevron-left"></i>
				</button>

				<div class="book-spread">
					<!-- Left page: flips to the right when going "prev" (like a real book) -->
					<div class="book-page book-page-left-wrap">
						<div
							class="left-page-flipper"
							class:flipping={isFlipping}
							class:flip-prev={isFlipping && flipDirection === -1}
						>
							<!-- Front of left page = left cert or title -->
							<div class="book-page book-page-left book-page-face book-page-front">
								{#if leftCert}
									<div class="cert-content">
										<div class="cert-icon-wrap">
											<i class="{leftCert.icon} cert-icon"></i>
										</div>
										<h4 class="cert-title">{leftCert.title}</h4>
										<p class="cert-issuer">{leftCert.issuer}</p>
										<p class="cert-desc">{leftCert.description}</p>
										<a
											href={certUrl(leftCert)}
											target="_blank"
											rel="noopener noreferrer"
											class="cert-link"
										>
											View certificate <i class="fa-solid fa-external-link-alt"></i>
										</a>
									</div>
								{:else}
									<div class="cert-content cert-content-title">
										<div class="cert-icon-wrap">
											<i class="fa-solid fa-certificate cert-icon"></i>
										</div>
										<h4 class="cert-title">Public Certs</h4>
										<p class="cert-issuer">Certifications & achievements</p>
									</div>
								{/if}
							</div>
							<!-- Back of left page = current (right) cert - shown when flipping left page to the right -->
							<div class="book-page book-page-left book-page-face book-page-back book-page-back-left">
								{#if rightCert}
									<div class="cert-content cert-content-back">
										<div class="cert-icon-wrap">
											<i class="{rightCert.icon} cert-icon"></i>
										</div>
										<h4 class="cert-title">{rightCert.title}</h4>
										<p class="cert-issuer">{rightCert.issuer}</p>
										<p class="cert-desc">{rightCert.description}</p>
										<a href={certUrl(rightCert)} target="_blank" rel="noopener noreferrer" class="cert-link">
											View certificate <i class="fa-solid fa-external-link-alt"></i>
										</a>
									</div>
								{/if}
							</div>
						</div>
					</div>

					<!-- Spine -->
					<div class="book-spine"></div>

					<!-- Right page with flip animation (right page moves to left when turning) -->
					<div class="book-page book-page-right-wrap">
						<div
							class="right-page-flipper"
							class:flipping={isFlipping}
							class:flip-next={isFlipping && flipDirection === 1}
						>
							<!-- Front of right page = current cert -->
							<div class="book-page book-page-right book-page-face book-page-front">
								<div class="cert-content">
									<div class="cert-icon-wrap">
										<i class="{rightCert.icon} cert-icon"></i>
									</div>
									<h4 class="cert-title">{rightCert.title}</h4>
									<p class="cert-issuer">{rightCert.issuer}</p>
									<p class="cert-desc">{rightCert.description}</p>
									<a
										href={certUrl(rightCert)}
										target="_blank"
										rel="noopener noreferrer"
										class="cert-link"
									>
										View certificate <i class="fa-solid fa-external-link-alt"></i>
									</a>
								</div>
							</div>
							<!-- Back of right page = next cert (shown when flipping forward) -->
							<div class="book-page book-page-right book-page-face book-page-back">
								<div class="cert-content cert-content-back">
									{#if flipDirection === 1 && nextCert}
										<div class="cert-icon-wrap">
											<i class="{nextCert.icon} cert-icon"></i>
										</div>
										<h4 class="cert-title">{nextCert.title}</h4>
										<p class="cert-issuer">{nextCert.issuer}</p>
										<p class="cert-desc">{nextCert.description}</p>
										<a href={certUrl(nextCert)} target="_blank" rel="noopener noreferrer" class="cert-link">
											View certificate <i class="fa-solid fa-external-link-alt"></i>
										</a>
									{:else}
										<div class="cert-icon-wrap">
											<i class="{rightCert.icon} cert-icon"></i>
										</div>
										<h4 class="cert-title">{rightCert.title}</h4>
										<p class="cert-issuer">{rightCert.issuer}</p>
										<p class="cert-desc">{rightCert.description}</p>
										<a href={certUrl(rightCert)} target="_blank" rel="noopener noreferrer" class="cert-link">
											View certificate <i class="fa-solid fa-external-link-alt"></i>
										</a>
									{/if}
								</div>
							</div>
						</div>
					</div>
				</div>

				<button
					type="button"
					class="book-nav book-nav-right"
					onclick={goNext}
					disabled={isFlipping || currentIndex >= certs.length - 1}
					aria-label="Next page"
				>
					<i class="fa-solid fa-chevron-right"></i>
				</button>
			</div>

			<div class="book-dots">
				{#each certs as cert, i}
					<button
						type="button"
						class="book-dot"
						class:active={i === currentIndex}
						onclick={() => { if (!isFlipping) { currentIndex = i; } }}
						aria-label="Go to certificate {i + 1}"
					></button>
				{/each}
			</div>
		{/if}
	</div>
</div>

<style>
	.cert-book-wrapper {
		--book-width: min(420px, 92vw);
		--book-spread-width: min(680px, 96vw);
		--book-height: 320px;
		--book-radius: 8px;
		--spine-width: 12px;
		--book-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(139, 92, 246, 0.2);
		--book-bg: linear-gradient(145deg, #1e1b4b 0%, #312e81 50%, #1e1b4b 100%);
		--cover-bg: linear-gradient(145deg, #2e1065 0%, #4c1d95 30%, #5b21b6 50%, #4c1d95 70%, #2e1065 100%);
	}

	.book-viewport {
		perspective: 1800px;
		min-height: var(--book-height);
		padding: 1rem 0;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	/* ----- Closed book cover ----- */
	.book-cover-btn {
		background: none;
		border: none;
		cursor: pointer;
		padding: 0;
		display: block;
		transform-style: preserve-3d;
	}

	.book-cover {
		width: var(--book-width);
		height: var(--book-height);
		position: relative;
		display: flex;
		border-radius: var(--book-radius);
		box-shadow: var(--book-shadow);
		overflow: hidden;
	}

	.book-cover-left,
	.book-cover-right {
		flex: 1;
		background: var(--cover-bg);
		border: 1px solid rgba(139, 92, 246, 0.4);
		transition: transform 0.8s cubic-bezier(0.33, 0.8, 0.3, 1);
		transform-style: preserve-3d;
	}

	.book-cover-left {
		transform-origin: right center;
		border-right: 2px solid rgba(30, 27, 75, 0.9);
	}

	.book-cover-right {
		transform-origin: left center;
	}

	.book-cover-title-wrap {
		position: absolute;
		inset: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		pointer-events: none;
	}

	.book-cover.opening .book-cover-left {
		transform: rotateY(-105deg);
	}

	.book-cover.opening .book-cover-right {
		transform: rotateY(105deg);
	}

	.book-cover-title {
		font-family: 'Poppins', sans-serif;
		font-size: 1.5rem;
		font-weight: 700;
		color: #e9d5ff;
		letter-spacing: 0.02em;
	}

	.book-cover-sub {
		font-size: 0.8rem;
		color: #a78bfa;
		opacity: 0.9;
	}

	/* ----- Open book spread ----- */
	.book-spread-container {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		position: relative;
		width: 100%;
	}

	.book-close {
		position: absolute;
		top: -2.5rem;
		right: 0.5rem;
		width: 36px;
		height: 36px;
		border-radius: 50%;
		border: 1px solid rgba(139, 92, 246, 0.5);
		background: rgba(30, 27, 75, 0.9);
		color: #a78bfa;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: background 0.2s, color 0.2s;
		z-index: 2;
	}

	.book-close:hover {
		background: rgba(139, 92, 246, 0.3);
		color: #e9d5ff;
	}

	.book-spread {
		display: flex;
		align-items: stretch;
		width: var(--book-spread-width);
		max-width: 100%;
		min-height: var(--book-height);
		box-shadow: var(--book-shadow);
		border-radius: var(--book-radius);
		overflow: hidden;
	}

	.book-page {
		background: var(--book-bg);
		border: 1px solid rgba(139, 92, 246, 0.4);
		overflow: hidden;
	}

	.book-page-left-wrap {
		flex: 1;
		min-width: 0;
		position: relative;
		perspective: 1600px;
		border-radius: var(--book-radius) 0 0 var(--book-radius);
	}

	.left-page-flipper {
		position: absolute;
		inset: 0;
		transform-style: preserve-3d;
		transform-origin: right center;
		transform: rotateY(0deg);
	}

	.left-page-flipper.flipping.flip-prev {
		animation: flipLeftToRight 0.6s cubic-bezier(0.33, 0.8, 0.5, 1) forwards;
	}

	.book-page-left {
		position: absolute;
		inset: 0;
		border-right: none;
		border-radius: var(--book-radius) 0 0 var(--book-radius);
	}

	.book-page-back-left {
		transform: rotateY(180deg);
		background: linear-gradient(145deg, #312e81 0%, #1e1b4b 100%);
	}

	.book-spine {
		width: var(--spine-width);
		flex-shrink: 0;
		background: linear-gradient(90deg, #1e1b4b 0%, #312e81 50%, #1e1b4b 100%);
		box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.3);
	}

	.book-page-right-wrap {
		flex: 1;
		min-width: 0;
		position: relative;
		perspective: 1600px;
		border-radius: 0 var(--book-radius) var(--book-radius) 0;
	}

	.right-page-flipper {
		position: absolute;
		inset: 0;
		transform-style: preserve-3d;
		transform-origin: left center;
		transform: rotateY(0deg);
	}

	.right-page-flipper.flipping.flip-next {
		animation: flipRightToLeft 0.6s cubic-bezier(0.33, 0.8, 0.5, 1) forwards;
	}

	/* Right page moves to the left when turning forward */
	@keyframes flipRightToLeft {
		0% {
			transform: rotateY(0deg);
		}
		100% {
			transform: rotateY(-180deg);
		}
	}

	/* Left page moves to the right when turning backward (prev) */
	@keyframes flipLeftToRight {
		0% {
			transform: rotateY(0deg);
		}
		100% {
			transform: rotateY(180deg);
		}
	}

	.book-page-face {
		position: absolute;
		inset: 0;
		backface-visibility: hidden;
	}

	.book-page-front {
		transform: rotateY(0deg);
	}

	.book-page-back {
		transform: rotateY(180deg);
		background: linear-gradient(145deg, #312e81 0%, #1e1b4b 100%);
	}

	.book-page-right {
		border-radius: 0;
		border-left: none;
	}

	.cert-content {
		padding: 1.25rem 1.25rem;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		justify-content: center;
	}

	.cert-content-title .cert-title {
		font-size: 1.1rem;
	}

	.cert-icon-wrap {
		width: 48px;
		height: 48px;
		border-radius: 50%;
		background: rgba(139, 92, 246, 0.3);
		border: 1px solid rgba(139, 92, 246, 0.6);
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 0.75rem;
	}

	.cert-icon {
		font-size: 1.25rem;
		color: #a78bfa;
	}

	.cert-title {
		font-family: 'Poppins', sans-serif;
		font-size: 1rem;
		font-weight: 600;
		color: #c4b5fd;
		margin-bottom: 0.3rem;
		line-height: 1.3;
	}

	.cert-issuer {
		font-size: 0.75rem;
		color: #a78bfa;
		margin-bottom: 0.5rem;
		opacity: 0.9;
	}

	.cert-desc {
		font-size: 0.8rem;
		color: #cbd5e1;
		line-height: 1.45;
		margin-bottom: 0.75rem;
		flex: 1;
		overflow-y: auto;
	}

	.cert-link {
		display: inline-flex;
		align-items: center;
		gap: 0.35rem;
		font-size: 0.85rem;
		color: #a78bfa;
		text-decoration: none;
		padding: 0.45rem 0.9rem;
		border: 1px solid rgba(139, 92, 246, 0.6);
		border-radius: 9999px;
		transition: background 0.2s, color 0.2s, border-color 0.2s;
	}

	.cert-link:hover {
		background: rgba(139, 92, 246, 0.2);
		color: #c4b5fd;
		border-color: #8b5cf6;
	}

	.book-nav {
		width: 44px;
		height: 44px;
		border-radius: 50%;
		border: 1px solid rgba(139, 92, 246, 0.5);
		background: rgba(30, 27, 75, 0.8);
		color: #a78bfa;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: background 0.2s, color 0.2s, transform 0.2s;
		flex-shrink: 0;
	}

	.book-nav:hover:not(:disabled) {
		background: rgba(139, 92, 246, 0.3);
		color: #e9d5ff;
		transform: scale(1.05);
	}

	.book-nav:disabled {
		opacity: 0.4;
		cursor: not-allowed;
	}

	.book-dots {
		display: flex;
		justify-content: center;
		gap: 0.5rem;
		margin-top: 1rem;
		flex-wrap: wrap;
	}

	.book-dot {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		border: 1px solid rgba(139, 92, 246, 0.5);
		background: transparent;
		cursor: pointer;
		transition: background 0.2s, transform 0.2s;
		padding: 0;
	}

	.book-dot:hover {
		background: rgba(139, 92, 246, 0.4);
		transform: scale(1.2);
	}

	.book-dot.active {
		background: #8b5cf6;
		transform: scale(1.2);
	}
</style>
