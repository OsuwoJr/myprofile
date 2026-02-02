<svelte:options runes={true} />

<script>
	const projects = [
		{
			name: "Meme Coins – Blockchain Micro-Transaction Platform",
			tech: ["React", "TypeScript", "Hedera Smart Contracts"],
			description: "Designed responsive UI with secure wallet integration. Enabled scalable, low-cost token transactions. Focused on usability, performance, and transaction safety. Built Mem Coins, a blockchain micro-transaction platform using React, TypeScript, and Hedera smart contracts, enabling secure and scalable token transactions.",
			icon: "fa-solid fa-coins"
		},
		{
			name: "DAO Governance Platform",
			tech: ["Svelte", "ICP", "Lisk"],
			description: "Developed frontend dashboards for decentralized voting and management. Implemented secure wallet interactions and live data updates. Streamlined onboarding and improved user experience by 40%. Improved onboarding experience and governance transparency.",
			icon: "fa-solid fa-users-gear"
		},
		{
			name: "NFT & Digital Asset Marketplace",
			tech: ["ICP", "React"],
			description: "Built frontend for listing, purchasing, and verifying NFTs. Integrated smart contracts for ownership verification. Optimized performance for both desktop and mobile users.",
			icon: "fa-solid fa-image"
		}
	];
</script>

<section id="selected-projects" class="py-20 lg:py-32">
	<div class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4 mb-12">
		<h6 class="text-lg sm:text-xl md:text-2xl">Showcasing My Work</h6>
		<h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
			Selected <span class="poppins text-violet-400">Projects</span>
		</h3>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
		{#each projects as project (project.name)}
			<div class="bg-slate-900/50 border border-violet-800/50 rounded-lg p-6 hover:border-violet-600 transition-all duration-300 hover:shadow-lg hover:shadow-violet-900/50 h-full flex flex-col">
				<div class="flex items-center gap-3 mb-4">
					<i class="{project.icon} text-violet-400 text-3xl"></i>
					<h4 class="text-xl font-semibold text-violet-400 flex-1">{project.name}</h4>
				</div>

				<div class="mb-4">
					<p class="text-sm font-semibold text-slate-400 mb-2">Tech Stack:</p>
					<div class="flex flex-wrap gap-2">
						{#each project.tech as tech (tech)}
							<span class="px-3 py-1 bg-violet-900/50 rounded-full text-sm border border-violet-700">
								{tech}
							</span>
						{/each}
					</div>
				</div>

				<p class="text-slate-300 text-sm leading-relaxed flex-1">{project.description}</p>
			</div>
		{/each}
	</div>
</section>
