<svelte:options runes={true} />

<script>
	import Button from './Button.svelte';

	let { y } = $props();

	const tabs = [
		{ name: 'Summary', link: '#professional-summary' },
		{ name: 'Skills', link: '#core-skills' },
		{ name: 'Experience', link: '#professional-experience' },
		{ name: 'Projects', link: '#selected-projects' },
		{ name: 'About', link: '#about' }
	];
</script>

<header class={"sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border border-solid " + (
    y > 0 ? " py-4 bg-slate-950 border-violate-950" : " py-6 bg-transparent border-transparent"
) }>
    <h1 class="font-medium">
        <b class="font-extrabold poppins">Osuwo Odongo</b> John Frederick
        <span class="text-xs md:text-sm text-violet-400 block md:inline md:ml-2">
            | Fullstack Engineer · Frontend-Focused · SEO & Security Specialist
        </span>
    </h1>
    <div class="sm:flex ml-auto pr-4 items-center gap-4 hidden">
        {#each tabs as tab (tab.name)}
        <a href={tab.link} class="duration-200 hover:text-violet-400">
            <p>{tab.name}</p>
        </a>
        {/each}
    </div>

    <!-- Button for Get In Touch -->
    <Button text="Call Me Now!" phone="+254790932575" />
</header>
