<script>
    import Button from "./Button.svelte";

    // Updated techStack with Web3 languages and Flutter
    const techStack = [
        {
            category: "Programming Languages",
            items: ["JavaScript (Vanilla, SvelteKit, ReactJS)", "TypeScript", "Rust", "Motoko"]
        },
        {
            category: "Frameworks & Libraries",
            items: ["Node.js", "Next.js", "Framer Motion", "Flutter"]
        },
        {
            category: "CSS Frameworks",
            items: ["Tailwind CSS", "CSS3", "Bootstrap"]
        }
    ];
</script>

<section id="introPage" class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14">
    <div class="flex flex-col lg:justify-center items-center md:items-start text-center lg:text-left gap-6 md:gap-8 lg:gap-10">
        <h2 class="font-semibold text-3xl md:text-6xl">
            Hi! I'm <span class="poppins text-violet-400">Osuwo</span> Jr <br />Fullstack 
            <span class="poppins text-violet-400 font-bold">WEB2/WEB3</span> <span class="poppins text-violet-400">Developer</span>
        </h2>
        <p class="text-lg">
            My <span class="poppins text-violet-400">favorite tech</span> includes:
        </p>

        <!-- Loop through each tech category and items -->
        <ul class="list-disc list-inside text-left">
            {#each techStack as { category, items }}
                <li>
                    <strong class="poppins text-violet-400 font-bold">{category}:</strong>
                    {items.join(', ')}
                </li>
            {/each}
        </ul>

        <Button text="Resume" link="https://github.com/OsuwoJr/" />
    </div>

    <div class="relative shadow-2xl grid place-items-center">
        <img
            src="images/profile.webp"
            alt="Osuwo Jr, Fullstack Developer"
            class="object-cover z-[2] max-h-[70vh]"
        />
    </div>
</section>
