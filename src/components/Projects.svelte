<svelte:options runes={true} />

<script>
    import Step from "./Step.svelte";

    // Tech stack showcase
    const techStack = [
        { name: "React", icon: "fa-brands fa-react" },
        { name: "Svelte", icon: "fa-solid fa-code" },
        { name: "Next.js", icon: "fa-brands fa-node-js" },
        { name: "TypeScript", icon: "fa-brands fa-js" },
        { name: "TailwindCSS", icon: "fa-brands fa-css3" },
        { name: "Node.js", icon: "fa-brands fa-node-js" },
        { name: "Hedera", icon: "fa-solid fa-link" },
        { name: "Security", icon: "fa-solid fa-shield-halved" }
    ];
</script>

<section id="tech-stack" class="py-20 lg:py-32 flex flex-col gap-24">
    <div class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4 mb-12">
        <h6 class="text-lg sm:text-xl md:text-2xl">
            Technologies I Work With
        </h6>
        <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
            Tech <span class="poppins text-violet-400">Stack</span>
        </h3>
    </div>

    <!-- GitHub Link -->
    <div class="flex flex-wrap justify-center gap-4">
        <a href="https://github.com/osuwojr" target="_blank" class="px-4 py-2 rounded-md border border-solid border-violet-700 flex items-center gap-2 hover:border-violet-500 hover:bg-violet-900/20 duration-200">
            <i class="fa-brands fa-github"></i>
            <p>View My GitHub</p>
        </a>
        <a href="https://www.youtube.com/@tefroofficial?sub_confirmation=1" target="_blank" class="px-4 py-2 rounded-md border border-solid border-violet-700 flex items-center gap-2 hover:border-violet-500 hover:bg-violet-900/20 duration-200">
            <i class="fa-regular fa-circle-play"></i>
            <p>Check Out My YouTube</p>
        </a>
    </div>

    <!-- Dynamically render tech stack -->
    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 lg:gap-10 max-w-5xl mx-auto">
        {#each techStack as tech (tech.name)}
            <Step step={tech}>
                <p>{tech.name}</p>
            </Step>
        {/each}
    </div>
</section>
