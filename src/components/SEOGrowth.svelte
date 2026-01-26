<svelte:options runes={true} />

<script>
    const seoSkills = [
        {
            category: "SEO Strategy & Implementation",
            items: [
                "Technical SEO (site structure, performance, indexing, metadata)",
                "On-page & content SEO optimization",
                "SEO-friendly UI & frontend architecture",
                "Keyword research & discoverability optimization for products and brands",
                "Analytics-driven optimization (traffic, engagement, conversion signals)"
            ]
        },
        {
            category: "Growth & Visibility",
            items: [
                "Search-friendly product launches",
                "Developer portfolio & GitHub SEO optimization",
                "Content optimization for discoverability (Web, Web3, SaaS)"
            ]
        }
    ];
</script>

<section id="seo-growth" class="py-20 lg:py-32">
    <div class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4 mb-12">
        <h6 class="text-lg sm:text-xl md:text-2xl">Digital Growth Expertise</h6>
        <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
            SEO & Digital <span class="poppins text-violet-400">Growth</span>
        </h3>
    </div>

    <div class="max-w-4xl mx-auto space-y-6">
        {#each seoSkills as category (category.category)}
            <div class="bg-slate-900/50 border border-violet-800/50 rounded-lg p-6">
                <h4 class="text-xl font-semibold text-violet-400 mb-4 flex items-center gap-2">
                    <i class="fa-solid fa-chart-line"></i>
                    {category.category}
                </h4>
                <ul class="space-y-2">
                    {#each category.items as item (item)}
                        <li class="text-slate-300 flex items-start gap-2">
                            <i class="fa-solid fa-check text-violet-500 mt-1 text-sm"></i>
                            <span>{item}</span>
                        </li>
                    {/each}
                </ul>
            </div>
        {/each}
    </div>
</section>
