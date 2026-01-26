<svelte:options runes={true} />

<script>
    const strengths = [
        "Strong problem-solving and fast-learning ability",
        "Fast learner with strong adaptability to new technologies",
        "Product-oriented mindset: bridging tech and business goals",
        "Security-first mindset without sacrificing user experience",
        "Strong communication across engineering, design, and product teams",
        "Effective team collaboration across engineering, design, and product teams",
        "Creative background in music & video production, enhancing design sensitivity and storytelling"
    ];

    const professionalTitles = [
        "DevSecOps Engineer",
        "Application Security Engineer",
        "Security-Focused Software Engineer",
        "Frontend & Blockchain Engineer",
        "Cybersecurity-Aware Full-Stack Developer",
        "SEO Specialist (Technical & Product SEO)",
        "Digital Growth Engineer",
        "Creative Technologist",
        "Software Engineer with SEO & Media Expertise"
    ];
</script>

<section id="additional-strengths" class="py-20 lg:py-32">
    <div class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4 mb-12">
        <h6 class="text-lg sm:text-xl md:text-2xl">What Makes Me Unique</h6>
        <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
            Additional <span class="poppins text-violet-400">Strengths</span>
        </h3>
    </div>

    <div class="max-w-4xl mx-auto space-y-8">
        <div class="bg-slate-900/50 border border-violet-800/50 rounded-lg p-6">
            <h4 class="text-xl font-semibold text-violet-400 mb-4">Key Strengths</h4>
            <ul class="space-y-3">
                {#each strengths as strength (strength)}
                    <li class="text-slate-300 flex items-start gap-3">
                        <i class="fa-solid fa-star text-violet-500 mt-1"></i>
                        <span>{strength}</span>
                    </li>
                {/each}
            </ul>
        </div>

        <div class="bg-slate-900/50 border border-violet-800/50 rounded-lg p-6">
            <h4 class="text-xl font-semibold text-violet-400 mb-4">Professional Titles</h4>
            <div class="flex flex-wrap gap-2">
                {#each professionalTitles as title (title)}
                    <span class="px-3 py-1 bg-violet-900/50 rounded-full text-sm border border-violet-700">
                        {title}
                    </span>
                {/each}
            </div>
        </div>

        <div class="bg-gradient-to-r from-violet-900/30 to-purple-900/30 border border-violet-800/50 rounded-lg p-6">
            <h4 class="text-xl font-semibold text-violet-400 mb-4">🧠 Multidisciplinary Edge</h4>
            <p class="text-slate-200 mb-4">
                Combines <strong class="text-white">software engineering, security, SEO, and digital media</strong> to build products that are:
            </p>
            <ul class="grid grid-cols-2 md:grid-cols-4 gap-3">
                <li class="flex items-center gap-2">
                    <i class="fa-solid fa-shield-halved text-violet-400"></i>
                    <span class="text-slate-300">Secure</span>
                </li>
                <li class="flex items-center gap-2">
                    <i class="fa-solid fa-search text-violet-400"></i>
                    <span class="text-slate-300">Discoverable</span>
                </li>
                <li class="flex items-center gap-2">
                    <i class="fa-solid fa-palette text-violet-400"></i>
                    <span class="text-slate-300">Visually Compelling</span>
                </li>
                <li class="flex items-center gap-2">
                    <i class="fa-solid fa-user text-violet-400"></i>
                    <span class="text-slate-300">User-centric</span>
                </li>
            </ul>
            <p class="text-slate-200 mt-4 mb-4">
                Unique ability to align <strong class="text-violet-400">engineering execution with marketing visibility and brand storytelling</strong>.
            </p>
            
            <div class="mt-6 pt-6 border-t border-violet-700/50">
                <h5 class="text-lg font-semibold text-violet-300 mb-3">🎯 Strategic Positioning</h5>
                <p class="text-slate-200 mb-3">You now position yourself as:</p>
                <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                    <li class="flex items-start gap-2 text-slate-200">
                        <i class="fa-solid fa-check text-green-400 mt-1"></i>
                        <span>Engineer who understands <strong class="text-white">security</strong></span>
                    </li>
                    <li class="flex items-start gap-2 text-slate-200">
                        <i class="fa-solid fa-check text-green-400 mt-1"></i>
                        <span>Developer who understands <strong class="text-white">users & UX</strong></span>
                    </li>
                    <li class="flex items-start gap-2 text-slate-200">
                        <i class="fa-solid fa-check text-green-400 mt-1"></i>
                        <span>Technologist who understands <strong class="text-white">SEO & growth</strong></span>
                    </li>
                    <li class="flex items-start gap-2 text-slate-200">
                        <i class="fa-solid fa-check text-green-400 mt-1"></i>
                        <span>Creative who understands <strong class="text-white">media & storytelling</strong></span>
                    </li>
                </ul>
                <p class="text-slate-200 mb-2">This combo is <strong class="text-violet-400">rare</strong> and <strong class="text-violet-400">very attractive</strong> to:</p>
                <div class="flex flex-wrap gap-2">
                    <span class="px-3 py-1 bg-violet-900/50 rounded-full text-sm border border-violet-700">Startups</span>
                    <span class="px-3 py-1 bg-violet-900/50 rounded-full text-sm border border-violet-700">Web3 companies</span>
                    <span class="px-3 py-1 bg-violet-900/50 rounded-full text-sm border border-violet-700">Product-led SaaS</span>
                    <span class="px-3 py-1 bg-violet-900/50 rounded-full text-sm border border-violet-700">DevRel teams</span>
                    <span class="px-3 py-1 bg-violet-900/50 rounded-full text-sm border border-violet-700">Security-first orgs</span>
                    <span class="px-3 py-1 bg-violet-900/50 rounded-full text-sm border border-violet-700">Founder-led teams</span>
                </div>
            </div>
        </div>
    </div>
</section>
