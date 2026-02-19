<svelte:options runes={true} />

<script>
	import { supabase } from '$lib/supabase';

	let { y } = $props();
	let user = $state(null);
	let mobileMenuOpen = $state(false);
	let skillsExpanded = $state(false);

	$effect(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange((_event, session) => {
			user = session?.user ?? null;
		});
		// Get initial session
		supabase.auth.getSession().then(({ data: { session } }) => {
			user = session?.user ?? null;
		});
		return () => subscription?.unsubscribe();
	});

	$effect(() => {
		if (mobileMenuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
			skillsExpanded = false;
		}
		return () => {
			document.body.style.overflow = '';
		};
	});

	async function signOut() {
		await supabase.auth.signOut();
	}

	const skillsSections = [
		{ name: 'Core Skills', link: '/#core-skills' },
		{ name: 'Professional Experience', link: '/#professional-experience' },
		{ name: 'SEO & Digital Growth', link: '/#seo-growth' },
		{ name: 'Beyond Code', link: '/#creative-media' },
		{ name: 'Education & Certifications', link: '/#education' },
		{ name: 'Additional Strengths', link: '/#additional-strengths' }
	];

	const otherTabs = [
		{ name: 'Portfolio', link: '/portfolio' },
		{ name: 'Resumes', link: '/resumes' },
		{ name: 'Blog', link: '/blog' }
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
    <!-- Desktop nav: visible from sm up -->
    <div class="sm:flex ml-auto pr-4 items-center gap-4 hidden">
        <div class="relative group/skills">
            <button
                type="button"
                class="duration-200 hover:text-violet-400 bg-transparent border-none cursor-pointer p-0 text-inherit text-sm sm:text-base font-normal inline-flex items-center gap-1"
                aria-haspopup="true"
                aria-expanded="false"
            >
                Skills
                <i class="fa-solid fa-chevron-down text-xs opacity-70 group-hover/skills:opacity-100 transition-opacity"></i>
            </button>
            <div
                class="absolute left-0 top-full pt-2 opacity-0 invisible group-hover/skills:opacity-100 group-hover/skills:visible transition-all duration-200 min-w-[220px]"
            >
                <div class="py-2 rounded-lg bg-slate-900 border border-violet-800/50 shadow-lg shadow-black/30">
                    {#each skillsSections as section (section.name)}
                        <a
                            href={section.link}
                            class="block px-4 py-2.5 text-sm text-slate-300 hover:bg-violet-900/30 hover:text-violet-400 duration-200 first:rounded-t-lg last:rounded-b-lg"
                        >
                            {section.name}
                        </a>
                    {/each}
                </div>
            </div>
        </div>
        {#each otherTabs as tab (tab.name)}
            <a href={tab.link} class="duration-200 hover:text-violet-400">
                <p>{tab.name}</p>
            </a>
        {/each}
        {#if user}
            <button
                type="button"
                onclick={signOut}
                class="duration-200 hover:text-violet-400 bg-transparent border-none cursor-pointer p-0 text-inherit text-sm sm:text-base font-normal"
            >
                Sign out
            </button>
        {:else}
            <a href="/auth/signin" class="duration-200 hover:text-violet-400 text-sm sm:text-base font-normal">
                Sign in
            </a>
        {/if}
    </div>

    <div class="flex items-center gap-3">
        <!-- Hamburger: only on small screens -->
        <button
            type="button"
            class="sm:hidden p-2 -mr-2 rounded-lg text-slate-300 hover:text-violet-400 hover:bg-slate-800/50 focus:outline-none focus:ring-2 focus:ring-violet-500/50"
            aria-label="Open menu"
            aria-expanded={mobileMenuOpen}
            onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
        >
            {#if mobileMenuOpen}
                <i class="fa-solid fa-times text-xl" aria-hidden="true"></i>
            {:else}
                <i class="fa-solid fa-bars text-xl" aria-hidden="true"></i>
            {/if}
        </button>
        <a
            href="/contact"
            class="relative overflow-hidden px-2 md:px-5 py-2 group rounded-full bg-white text-slate-950 max-w-max border border-transparent transition-transform duration-300 ease-in-out focus:outline-none hover:border-violet-500 active:border-violet-300 duration-200 hover:text-slate-950"
        >
            Contact Me
        </a>
    </div>
</header>

<!-- Mobile menu overlay + panel -->
{#if mobileMenuOpen}
    <div
        class="sm:hidden fixed inset-0 z-[9]"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
    >
        <button
            type="button"
            class="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            aria-label="Close menu"
            onclick={() => (mobileMenuOpen = false)}
        ></button>
        <nav
            class="absolute right-0 top-0 bottom-0 w-[min(100vw,320px)] bg-slate-900 border-l border-violet-800/50 shadow-xl flex flex-col overflow-y-auto"
        >
            <div class="p-4 border-b border-slate-700/50 flex items-center justify-between">
                <span class="text-sm font-medium text-slate-400">Menu</span>
                <button
                    type="button"
                    class="p-2 rounded-lg text-slate-400 hover:text-violet-400 hover:bg-slate-800 focus:outline-none"
                    aria-label="Close menu"
                    onclick={() => (mobileMenuOpen = false)}
                >
                    <i class="fa-solid fa-times"></i>
                </button>
            </div>
            <div class="flex flex-col py-2">
                <div>
                    <button
                        type="button"
                        class="w-full flex items-center justify-between px-4 py-3 text-left text-slate-200 hover:bg-violet-900/20 hover:text-violet-400 duration-200"
                        onclick={() => (skillsExpanded = !skillsExpanded)}
                        aria-expanded={skillsExpanded}
                    >
                        Skills
                        <i class="fa-solid fa-chevron-down text-xs transition-transform duration-200 {skillsExpanded ? 'rotate-180' : ''}"></i>
                    </button>
                    {#if skillsExpanded}
                        <div class="bg-slate-800/50 border-y border-slate-700/50">
                            {#each skillsSections as section (section.name)}
                                <a
                                    href={section.link}
                                    class="block px-6 py-2.5 text-sm text-slate-300 hover:bg-violet-900/30 hover:text-violet-400 duration-200"
                                    onclick={() => (mobileMenuOpen = false)}
                                >
                                    {section.name}
                                </a>
                            {/each}
                        </div>
                    {/if}
                </div>
                {#each otherTabs as tab (tab.name)}
                    <a
                        href={tab.link}
                        class="px-4 py-3 text-slate-200 hover:bg-violet-900/20 hover:text-violet-400 duration-200"
                        onclick={() => (mobileMenuOpen = false)}
                    >
                        {tab.name}
                    </a>
                {/each}
                {#if user}
                    <button
                        type="button"
                        onclick={() => { signOut(); mobileMenuOpen = false; }}
                        class="w-full px-4 py-3 text-left text-slate-200 hover:bg-violet-900/20 hover:text-violet-400 duration-200"
                    >
                        Sign out
                    </button>
                {:else}
                    <a
                        href="/auth/signin"
                        class="px-4 py-3 text-slate-200 hover:bg-violet-900/20 hover:text-violet-400 duration-200 block"
                        onclick={() => (mobileMenuOpen = false)}
                    >
                        Sign in
                    </a>
                {/if}
            </div>
        </nav>
    </div>
{/if}
