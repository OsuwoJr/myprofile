<script>
    import Step from "./Step.svelte";

    // Updated steps with more appropriate icons for Flutter, Rust, and Motoko
    let steps = [
        { name: "HTML5", icon: "fa-brands fa-html5" },
        { name: "CSS3", icon: "fa-brands fa-css3" },
        { name: "JavaScript", icon: "fa-brands fa-js" },
        { name: "TypeScript", icon: "fa-brands fa-js" },
        { name: "Rust", icon: "fa-solid fa-cogs" }, // Using a gear/cogs icon for Rust
        { name: "Motoko", icon: "fa-solid fa-cube" }, // Using a cube for decentralized Motoko
        { name: "Flutter", icon: "fa-solid fa-mobile-alt" }, // Using mobile icon for Flutter
        { name: "Node.js", icon: "fa-brands fa-node-js" }
    ];
</script>

<section id="projects" class="py-20 lg:py-32 flex flex-col gap-24">
    <div class="flex flex-col gap-2 text-center">
        <h6 class="text-lg sm:text-xl md:text-2xl">
            Just a few of my public creative endeavors.
        </h6>
        <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
            Curious to <span class="poppins text-violet-400">see more</span> of my work?
        </h3>
    </div>

    <!-- GitHub Link -->
    <a href="https://www.youtube.com/@tefroofficial?sub_confirmation=1" target="_blank" class="mx-auto px-4 py-2 rounded-md border border-solid border-white flex items-center gap-2 -mb-0 -mt-10 hover:border-violet-700 duration-200">
        <i class="fa-regular fa-circle-play" />
        <p>Check Out My YouTube</p>
    </a>

    <!-- Dynamically render steps with Svelte's each block -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
        {#each steps as step}
            <Step step={step}>
                <p>{step.name}</p>
            </Step>
        {/each}
    </div>
</section>
