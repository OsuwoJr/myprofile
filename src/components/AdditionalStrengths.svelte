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

    </div>
</section>
