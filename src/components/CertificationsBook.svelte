<svelte:options runes={true} />

<script>
	const certs = [
		{
			title: 'Token Creation – Spillover Hackathon (ICP)',
			file: '/files/Token%20Creation%20Cert.pdf',
			description: 'Awarded at the Spillover Hackathon on Internet Computer (ICP). Built Dust Coin, a meme coin that won the hackathon. Also participated as a successful Product and Project Manager.',
			issuer: 'ICP Spillover Hackathon',
			icon: 'fa-solid fa-trophy'
		},
		{
			title: 'Building On Blockchain',
			file: '/files/Building%20On%20Blockchain.pdf',
			description: 'Gained foundational skills and started building on the Internet Computer (ICP) blockchain.',
			issuer: 'ICP',
			icon: 'fa-solid fa-link'
		},
		{
			title: 'ETH Safari Hackathon',
			file: '/files/ETHSAFARI-HACKATHON-CERTIFICATE-2.pdf',
			description: 'Participated as Canister Smart Contracts builder, consultant, and supervisor to 8 projects.',
			issuer: 'ETH Safari',
			icon: 'fa-solid fa-file-contract'
		},
		{
			title: 'Hashgraph Developer Course',
			file: '/files/HashgraphDeveloperCourse%20Cert.pdf',
			description: 'Hedera Hashgraph developer certification.',
			issuer: 'Hedera',
			icon: 'fa-solid fa-certificate'
		},
		{
			title: 'Critical Thinking in the AI Era',
			file: '/files/Critical%20Thinking%20in%20the%20AI%20Era.pdf',
			description: 'HP Foundation certification in critical thinking for the AI era.',
			issuer: 'HP Foundation',
			icon: 'fa-solid fa-brain'
		}
	];

	let currentIndex = $state(0);
	let isFlipping = $state(false);
	let flipDirection = $state(1); // 1 = next, -1 = prev

	function goNext() {
		if (isFlipping) return;
		flipDirection = 1;
		isFlipping = true;
		setTimeout(() => {
			currentIndex = (currentIndex + 1) % certs.length;
			isFlipping = false;
		}, 500);
	}

	function goPrev() {
		if (isFlipping) return;
		flipDirection = -1;
		isFlipping = true;
		setTimeout(() => {
			currentIndex = currentIndex === 0 ? certs.length - 1 : currentIndex - 1;
			isFlipping = false;
		}, 500);
	}

	const current = $derived(certs[currentIndex]);
	const nextIndex = $derived((currentIndex + 1) % certs.length);
	const prevIndex = $derived(currentIndex === 0 ? certs.length - 1 : currentIndex - 1);
	const nextCert = $derived(certs[nextIndex]);
	const prevCert = $derived(certs[prevIndex]);
</script>

<div class="cert-book-wrapper">
	<div class="book-container">
		<!-- Left nav: previous page -->
		<button
			type="button"
			class="book-nav book-nav-left"
			onclick={goPrev}
			disabled={isFlipping}
			aria-label="Previous certificate"
		>
			<i class="fa-solid fa-chevron-left"></i>
		</button>

		<!-- Book spine + open spread -->
		<div class="book-spread">
			<div class="book-perspective">
				<!-- Flipping page (current) -->
				<div
					class="book-page-wrap"
					class:flipping={isFlipping}
					class:flip-next={isFlipping && flipDirection === 1}
					class:flip-prev={isFlipping && flipDirection === -1}
				>
					<div class="book-page">
						<div class="book-page-front">
							<div class="cert-content">
								<div class="cert-icon-wrap">
									<i class="{current.icon} cert-icon"></i>
								</div>
								<h4 class="cert-title">{current.title}</h4>
								<p class="cert-issuer">{current.issuer}</p>
								<p class="cert-desc">{current.description}</p>
								<a
									href={current.file}
									target="_blank"
									rel="noopener noreferrer"
									class="cert-link"
								>
									View certificate <i class="fa-solid fa-external-link-alt"></i>
								</a>
							</div>
						</div>
						<div class="book-page-back">
							<div class="cert-content cert-content-back">
								{#if flipDirection === 1}
									<div class="cert-icon-wrap">
										<i class="{nextCert.icon} cert-icon"></i>
									</div>
									<h4 class="cert-title">{nextCert.title}</h4>
									<p class="cert-issuer">{nextCert.issuer}</p>
									<p class="cert-desc">{nextCert.description}</p>
									<a href={nextCert.file} target="_blank" rel="noopener noreferrer" class="cert-link">
										View certificate <i class="fa-solid fa-external-link-alt"></i>
									</a>
								{:else}
									<div class="cert-icon-wrap">
										<i class="{prevCert.icon} cert-icon"></i>
									</div>
									<h4 class="cert-title">{prevCert.title}</h4>
									<p class="cert-issuer">{prevCert.issuer}</p>
									<p class="cert-desc">{prevCert.description}</p>
									<a href={prevCert.file} target="_blank" rel="noopener noreferrer" class="cert-link">
										View certificate <i class="fa-solid fa-external-link-alt"></i>
									</a>
								{/if}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Right nav: next page -->
		<button
			type="button"
			class="book-nav book-nav-right"
			onclick={goNext}
			disabled={isFlipping}
			aria-label="Next certificate"
		>
			<i class="fa-solid fa-chevron-right"></i>
		</button>
	</div>

	<!-- Page indicators (dots) -->
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
</div>

<style>
	.cert-book-wrapper {
		--book-width: min(420px, 92vw);
		--book-height: 320px;
		--book-radius: 8px;
		--book-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(139, 92, 246, 0.2);
		--book-bg: linear-gradient(145deg, #1e1b4b 0%, #312e81 50%, #1e1b4b 100%);
	}

	.book-container {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		min-height: var(--book-height);
		padding: 1rem 0;
	}

	.book-perspective {
		perspective: 1600px;
		width: var(--book-width);
		height: var(--book-height);
	}

	.book-page-wrap {
		width: 100%;
		height: 100%;
		position: relative;
		transform-style: preserve-3d;
		transform: rotateY(0deg);
	}

	.book-page-wrap.flipping.flip-next {
		transform-origin: left center;
		animation: flipPageNext 0.6s cubic-bezier(0.33, 0.8, 0.5, 1) forwards;
	}

	.book-page-wrap.flipping.flip-prev {
		transform-origin: right center;
		animation: flipPagePrev 0.6s cubic-bezier(0.33, 0.8, 0.5, 1) forwards;
	}

	@keyframes flipPageNext {
		0% {
			transform: rotateY(0deg);
		}
		100% {
			transform: rotateY(-180deg);
		}
	}

	@keyframes flipPagePrev {
		0% {
			transform: rotateY(0deg);
		}
		100% {
			transform: rotateY(180deg);
		}
	}

	.book-page {
		width: 100%;
		height: 100%;
		position: relative;
		transform-style: preserve-3d;
		border-radius: var(--book-radius);
		box-shadow: var(--book-shadow);
		overflow: hidden;
	}

	.book-page-front,
	.book-page-back {
		position: absolute;
		inset: 0;
		backface-visibility: hidden;
		border-radius: var(--book-radius);
		background: var(--book-bg);
		border: 1px solid rgba(139, 92, 246, 0.4);
	}

	.book-page-back {
		transform: rotateY(180deg);
		background: linear-gradient(145deg, #312e81 0%, #1e1b4b 100%);
	}

	.cert-content {
		padding: 1.5rem 1.75rem;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		justify-content: center;
	}

	.cert-icon-wrap {
		width: 56px;
		height: 56px;
		border-radius: 50%;
		background: rgba(139, 92, 246, 0.3);
		border: 1px solid rgba(139, 92, 246, 0.6);
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 1rem;
	}

	.cert-icon {
		font-size: 1.5rem;
		color: #a78bfa;
	}

	.cert-title {
		font-family: 'Poppins', sans-serif;
		font-size: 1.15rem;
		font-weight: 600;
		color: #c4b5fd;
		margin-bottom: 0.35rem;
		line-height: 1.3;
	}

	.cert-issuer {
		font-size: 0.8rem;
		color: #a78bfa;
		margin-bottom: 0.75rem;
		opacity: 0.9;
	}

	.cert-desc {
		font-size: 0.875rem;
		color: #cbd5e1;
		line-height: 1.5;
		margin-bottom: 1rem;
		flex: 1;
		overflow-y: auto;
	}

	.cert-link {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		font-size: 0.9rem;
		color: #a78bfa;
		text-decoration: none;
		padding: 0.5rem 1rem;
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
