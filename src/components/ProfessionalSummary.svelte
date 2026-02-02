<svelte:options runes={true} />

<script>
    /** Set to false to show only the Short GitHub Bio placeholder at the top (e.g. before custom summary is added). */
    let { hasCustomContent = true } = $props();
</script>

<section id="professional-summary" class="py-20 lg:py-32">
    <div class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4 mb-12">
        <h6 class="text-lg sm:text-xl md:text-2xl">Professional Overview</h6>
        <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
            Professional <span class="poppins text-violet-400">Summary</span>
        </h3>
    </div>

    <div class="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed">
        {#if !hasCustomContent}
            <div class="bg-violet-900/20 border border-violet-700/50 rounded-lg p-4">
                <p class="text-sm md:text-base text-slate-200">
                    <strong class="text-violet-400">Short GitHub Bio:</strong>
                    <strong class="text-white">Security-Focused Software Engineer</strong> building
                    <strong class="text-white">frontend, blockchain, and secure systems</strong>.<br/>
                    React · Svelte · Next.js · TypeScript · Web3 · Application Security · DevSecOps · OWASP
                </p>
            </div>
        {:else}
        <div class="bg-slate-900/30 border border-violet-800/30 rounded-lg p-6 mb-4">
            <p class="text-slate-200 mb-2">
                <strong class="text-violet-400">Frontend Engineer</strong> skilled in <strong class="text-white">React, Svelte, Next.js, and TypeScript</strong>,
                with hands-on experience in <strong class="text-white">blockchain development (Hedera, ICP, Lisk)</strong>.
                Quick learner with a proven track record delivering <strong class="text-violet-400">decentralized applications like Meme Coins and DAOs</strong>.
                Experienced in <strong class="text-white">product management</strong>, bridging technical execution with business strategy and user experience.
            </p>
        </div>

        <p class="text-slate-200">
            Security-focused <strong class="text-white">Software Engineer</strong> with strong expertise in
            <strong class="text-violet-400">Frontend Engineering, Blockchain Development, and Application Security (DevSecOps)</strong>.
            Proven experience building and securing <strong class="text-white">production-ready web and decentralized applications</strong>,
            including <strong class="text-violet-400">DAOs, meme coins, NFT platforms, and governance dashboards</strong>.
        </p>

        <p class="text-slate-200">
            Skilled at integrating <strong class="text-violet-400">security into every phase of the SDLC</strong> — from secure UI architecture
            and smart contract interaction to <strong class="text-violet-400">CI/CD hardening, vulnerability scanning, and OWASP-aligned best practices</strong>.
            Known for fast learning, clean code, and a <strong class="text-white">product-driven mindset</strong> that bridges engineering execution
            with business goals and user experience.
        </p>

        <div class="bg-slate-900/50 border border-violet-800/50 rounded-lg p-6 mt-8">
            <h4 class="text-xl font-semibold mb-4 text-violet-400">🎯 My Mission</h4>
            <p class="text-slate-200">
                To <strong class="text-white">bridge software engineering and cybersecurity</strong>, enabling teams to ship fast
                <strong class="text-violet-400">without compromising security</strong>.
            </p>
        </div>
        {/if}
    </div>
</section>
