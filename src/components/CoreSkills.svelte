<svelte:options runes={true} />

<script>
    const skillCategories = [
        {
            title: "Frontend Engineering",
            icon: "fa-solid fa-code",
            skills: [
                "React, Svelte, Next.js, TypeScript",
                "TailwindCSS, Responsive Design, Component Architecture",
                "State Management (Redux, Stores)",
                "Performance Optimization & Accessibility"
            ]
        },
        {
            title: "Blockchain & Backend",
            icon: "fa-solid fa-link",
            skills: [
                "Hedera, Internet Computer (ICP), Lisk",
                "Smart Contracts & Wallet Integration",
                "Node.js, REST APIs",
                "Token Economics, DAO Governance Systems"
            ]
        },
        {
            title: "Application Security & DevSecOps",
            icon: "fa-solid fa-shield-halved",
            skills: [
                "Secure Code Reviews & Threat Modeling",
                "OWASP Top 10, API Security, Authentication & Rate Limiting",
                "CI/CD Pipeline Security (GitHub Actions)",
                "Dependency & Container Scanning (Snyk, Trivy)",
                "Static & Dynamic Analysis (SonarQube, OWASP ZAP)",
                "Log Hardening & Data Protection"
            ]
        },
        {
            title: "SEO & Digital Growth",
            icon: "fa-solid fa-chart-line",
            skills: [
                "Technical SEO (site structure, performance, indexing, metadata)",
                "On-page & content SEO optimization",
                "SEO-friendly UI & frontend architecture",
                "Keyword research & discoverability optimization",
                "Analytics-driven optimization",
                "Developer portfolio & GitHub SEO optimization"
            ]
        },
        {
            title: "Product & Collaboration",
            icon: "fa-solid fa-users",
            skills: [
                "Product Management & MVP Design",
                "Feature Prioritization & Agile Delivery",
                "UX/UI Collaboration (Figma)",
                "Cross-functional Team Communication",
                "Git, Docker, CI/CD, Agile Workflow"
            ]
        },
        {
            title: "Creative & Media",
            icon: "fa-solid fa-video",
            skills: [
                "Videography (shooting, editing, post-production)",
                "Audio Engineering (recording, mixing, mastering)",
                "Social Media Management & Content Strategy",
                "Visual storytelling for products and brands"
            ]
        }
    ];
</script>

<section id="core-skills" class="py-20 lg:py-32">
    <div class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4 mb-12">
        <h6 class="text-lg sm:text-xl md:text-2xl">What I Bring to the Table</h6>
        <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
            Core <span class="poppins text-violet-400">Skills</span>
        </h3>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {#each skillCategories as category (category.title)}
            <div class="bg-slate-900/50 border border-violet-800/50 rounded-lg p-6 hover:border-violet-600 transition-all duration-300 hover:shadow-lg hover:shadow-violet-900/50">
                <div class="flex items-center gap-3 mb-4">
                    <i class="{category.icon} text-violet-400 text-2xl"></i>
                    <h4 class="text-xl font-semibold text-violet-400">{category.title}</h4>
                </div>
                <ul class="space-y-2">
                    {#each category.skills as skill (skill)}
                        <li class="text-slate-300 flex items-start gap-2">
                            <i class="fa-solid fa-check text-violet-500 mt-1 text-sm"></i>
                            <span>{skill}</span>
                        </li>
                    {/each}
                </ul>
            </div>
        {/each}
    </div>

    <!-- Tools Section -->
    <div class="mt-16 max-w-4xl mx-auto">
        <h4 class="text-2xl font-semibold text-center mb-8 text-violet-400">🛠 Tools & Technologies</h4>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="bg-slate-900/50 border border-violet-800/50 rounded-lg p-4 text-center">
                <p class="font-semibold text-violet-400 mb-2">Frontend</p>
                <p class="text-sm text-slate-300">React, Svelte, Next.js, TypeScript, TailwindCSS, Redux</p>
            </div>
            <div class="bg-slate-900/50 border border-violet-800/50 rounded-lg p-4 text-center">
                <p class="font-semibold text-violet-400 mb-2">Blockchain</p>
                <p class="text-sm text-slate-300">Hedera, ICP, Lisk, Smart Contracts, Node.js, REST APIs</p>
            </div>
            <div class="bg-slate-900/50 border border-violet-800/50 rounded-lg p-4 text-center">
                <p class="font-semibold text-violet-400 mb-2">Security</p>
                <p class="text-sm text-slate-300">GitHub Actions, Docker, OWASP ZAP, Trivy, Snyk, SonarQube</p>
            </div>
            <div class="bg-slate-900/50 border border-violet-800/50 rounded-lg p-4 text-center">
                <p class="font-semibold text-violet-400 mb-2">Product & Design</p>
                <p class="text-sm text-slate-300">Figma, Agile, MVP Design, Feature Prioritization</p>
            </div>
        </div>
    </div>
</section>
