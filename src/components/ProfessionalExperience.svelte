<svelte:options runes={true} />

<script>
    const experiences = [
        {
            title: "Built Mem Coins, a blockchain micro-transaction platform",
            details: "Using React, TypeScript, and Hedera smart contracts, enabling secure and scalable token transactions."
        },
        {
            title: "Developed DAO Management Platforms",
            details: "On ICP and Lisk, delivering responsive dashboards and governance tools for decentralized communities."
        },
        {
            title: "Designed and built blockchain-based applications",
            details: "Including meme coin platforms, DAO governance systems, and NFT marketplaces using React, Svelte, TypeScript, and smart contracts."
        },
        {
            title: "Collaborated across frontend, backend, and product teams",
            details: "To integrate wallets, smart contracts, and APIs into seamless user interfaces."
        },
        {
            title: "Applied product management expertise",
            details: "To design UX flows, prioritize features, and deliver MVPs on tight deadlines, reducing user onboarding friction by 40%."
        },
        {
            title: "Built DAO dashboards",
            details: "On ICP and Lisk, supporting decentralized voting, treasury visibility, and governance workflows."
        },
        {
            title: "Integrated wallet authentication, smart contracts, and REST APIs",
            details: "Into seamless, user-friendly interfaces."
        },
        {
            title: "Applied application security best practices",
            details: "Including secure API consumption, input validation, access control, and dependency risk reduction."
        },
        {
            title: "Implemented CI/CD pipelines",
            details: "With automated testing and security scanning to improve code reliability and deployment safety."
        },
        {
            title: "Collaborated with designers, backend engineers, and product stakeholders",
            details: "To deliver MVPs under tight timelines."
        },
        {
            title: "Improved onboarding flows and UX clarity",
            details: "Reducing user friction by up to 40%."
        },
        {
            title: "Quickly learned and implemented new frameworks and technologies",
            details: "For project-specific needs, maintaining rapid development cycles."
        }
    ];
</script>

<section id="professional-experience" class="py-20 lg:py-32">
    <div class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4 mb-12">
        <h6 class="text-lg sm:text-xl md:text-2xl">My Journey</h6>
        <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
            Professional <span class="poppins text-violet-400">Experience</span>
        </h3>
    </div>

    <div class="max-w-4xl mx-auto">
        <div class="bg-slate-900/50 border border-violet-800/50 rounded-lg p-8 mb-8">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                    <h4 class="text-2xl font-semibold text-violet-400 mb-2">Frontend & Blockchain Developer</h4>
                    <p class="text-lg text-slate-300">Freelance / Independent Projects</p>
                </div>
                <span class="text-violet-400 font-semibold mt-2 md:mt-0">2022 – Present</span>
            </div>
            
            <div class="space-y-4">
                {#each experiences as exp, index (exp.title)}
                    <div class="flex gap-4">
                        <div class="flex-shrink-0 w-8 h-8 rounded-full bg-violet-700 flex items-center justify-center text-sm font-bold">
                            {index + 1}
                        </div>
                        <div class="flex-1">
                            <h5 class="font-semibold text-white mb-1">{exp.title}</h5>
                            <p class="text-slate-300 text-sm">{exp.details}</p>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>
