<svelte:options runes={true} />

<script>
	let { y } = $props();

	const tabs = [
		{ name: 'Portfolio', link: '/portfolio' },
		{ name: 'Skills', link: '/#core-skills' },
		{ name: 'Experience', link: '/#professional-experience' }
	];
</script>

<header class={"sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border border-solid " + (
    y > 0 ? " py-4 bg-slate-950 border-violate-950" : " py-6 bg-transparent border-transparent"
) }>
    <h1 class="font-medium">
        <a href="/" class="hover:text-violet-400 duration-200 no-underline text-inherit">
            <b class="font-extrabold poppins">Osuwo Odongo</b> John Frederick
            <span class="text-xs md:text-sm text-violet-400 block md:inline md:ml-2">
                | Fullstack Engineer · Frontend-Focused · SEO & Security Specialist
            </span>
        </a>
    </h1>
    <div class="sm:flex ml-auto pr-4 items-center gap-4 hidden">
        {#each tabs as tab (tab.name)}
        <a href={tab.link} class="duration-200 hover:text-violet-400">
            <p>{tab.name}</p>
        </a>
        {/each}
    </div>

    <a
        href="/contact"
        class="relative overflow-hidden px-2 md:px-5 py-2 group rounded-full bg-white text-slate-950 max-w-max border border-transparent transition-transform duration-300 ease-in-out focus:outline-none hover:border-violet-500 active:border-violet-300 duration-200 hover:text-slate-950"
    >
        Contact Me
    </a>
</header>
