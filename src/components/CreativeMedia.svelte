<svelte:options runes={true} />

<script>
    const creativeSkills = [
        {
            category: "Videography",
            icon: "fa-solid fa-video",
            items: [
                "Video shooting, editing, and post-production",
                "Visual storytelling for products, brands, and social platforms",
                "Promotional and technical content creation"
            ]
        },
        {
            category: "Audio Engineering",
            icon: "fa-solid fa-music",
            items: [
                "Audio recording, mixing, and mastering",
                "Sound design and music production",
                "Voice and media optimization for digital platforms"
            ]
        },
        {
            category: "Social Media Management",
            icon: "fa-solid fa-share-nodes",
            items: [
                "Content strategy & scheduling",
                "Brand growth and audience engagement",
                "Cross-platform content optimization",
                "Analytics-driven performance tracking"
            ]
        }
    ];
</script>

<section id="creative-media" class="py-20 lg:py-32">
    <div class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4 mb-12">
        <h6 class="text-lg sm:text-xl md:text-2xl">Beyond Code</h6>
        <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
            Creative & Media <span class="poppins text-violet-400">Skills</span>
        </h3>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {#each creativeSkills as skill (skill.category)}
            <div class="bg-slate-900/50 border border-violet-800/50 rounded-lg p-6 hover:border-violet-600 transition-all duration-300">
                <div class="flex items-center gap-3 mb-4">
                    <i class="{skill.icon} text-violet-400 text-2xl"></i>
                    <h4 class="text-xl font-semibold text-violet-400">{skill.category}</h4>
                </div>
                <ul class="space-y-2">
                    {#each skill.items as item (item)}
                        <li class="text-slate-300 flex items-start gap-2 text-sm">
                            <i class="fa-solid fa-check text-violet-500 mt-1 text-xs"></i>
                            <span>{item}</span>
                        </li>
                    {/each}
                </ul>
            </div>
        {/each}
    </div>

    <div class="max-w-4xl mx-auto mt-12">
        <div class="bg-gradient-to-r from-violet-900/30 to-purple-900/30 border border-violet-800/50 rounded-lg p-6">
            <p class="text-slate-200 text-center">
                <strong class="text-violet-400">OSUWOJR</strong> - Music & Video Producer | 
                Owner of <strong class="text-violet-400">KenyanTroublerMusic</strong>
            </p>
        </div>
    </div>
</section>
