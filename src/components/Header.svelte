<svelte:options runes={true} />

<script>
	import Button from './Button.svelte';

	let { y } = $props();

	const tabs = [
		{ name: 'Projects', link: '#projects' },
		{ name: 'About Me', link: '#about' },
		{ name: 'Blog', link: 'https://block-craner-encyclopaedia.vercel.app/' }
	];
</script>

<header class={"sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border border-solid " + (
    y > 0 ? " py-4 bg-slate-950 border-violate-950" : " py-6 bg-transparent border-transparent"
) }>
    <h1 class="font-medium">
        <b class="font-extrabold poppins">John Frederick</b> Osuwo Odongo
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
