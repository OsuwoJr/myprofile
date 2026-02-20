<svelte:options runes={true} />

<script>
	import { supabase } from '$lib/supabase';

	let { y } = $props();
	let user = $state(null);
	let skillsExpanded = $state(false);
	let smallScreenSkillsOpen = $state(false);
	let skillsTriggerEl = $state(null);
	let dropdownPosition = $state({ top: 0, left: 0 });

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
		if (smallScreenSkillsOpen && skillsTriggerEl) {
			const rect = skillsTriggerEl.getBoundingClientRect();
			const panelWidth = 220;
			const padding = 12;
			let left = rect.left;
			if (left + panelWidth > window.innerWidth - padding) {
				left = Math.max(padding, window.innerWidth - panelWidth - padding);
			} else if (left < padding) {
				left = padding;
			}
			dropdownPosition = {
				top: rect.bottom + 8,
				left
			};
		}
	});

	async function signOut() {
		await supabase.auth.signOut();
	}

	function handleClickOutside(event) {
		const target = event.target;
		if (smallScreenSkillsOpen && !target.closest('[data-skills-dropdown]')) {
			smallScreenSkillsOpen = false;
		}
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

<svelte:window onclick={handleClickOutside} />

<header class={"sticky z-[10] top-0 duration-200 px-6 border border-solid flex flex-col gap-2 overflow-visible " + (
    y > 0 ? " py-4 bg-slate-950 border-violate-950" : " py-6 bg-transparent border-transparent"
) }>
    <!-- Top row: logo + desktop nav (lg only) + Contact -->
    <div class="flex items-center justify-between gap-4">
        <h1 class="font-medium min-w-0 shrink">
            <a href="/" class="hover:text-violet-400 duration-200 no-underline text-inherit">
                <b class="font-extrabold poppins">Osuwo Odongo</b> John Frederick
                <span class="text-xs md:text-sm text-violet-400 block md:inline md:ml-2">
                    | Fullstack Engineer · Frontend-Focused · SEO & Security Specialist
                </span>
            </a>
        </h1>
        <!-- Desktop nav: visible from lg up -->
        <div class="lg:flex ml-auto pr-4 items-center gap-4 hidden shrink-0">
            <div class="relative group/skills overflow-visible">
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
                    <div class="skills-dropdown-panel py-2 rounded-xl bg-slate-900/95 border-2 border-violet-600/60 shadow-xl shadow-black/40 backdrop-blur-sm">
                        {#each skillsSections as section (section.name)}
                            <a
                                href={section.link}
                                class="skills-dropdown-link block px-4 py-3 text-sm text-slate-100 hover:bg-violet-600/30 hover:text-violet-200 duration-200 first:rounded-t-lg last:rounded-b-lg border-b border-slate-700/50 last:border-b-0"
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

        <a
            href="/contact"
            class="contact-btn-glow relative overflow-hidden px-2 md:px-5 py-2 group rounded-full bg-white text-slate-950 max-w-max border border-transparent transition-transform duration-300 ease-in-out focus:outline-none hover:border-violet-500 active:border-violet-300 duration-200 hover:text-slate-950 shrink-0"
        >
            Contact Me
        </a>
    </div>

    <!-- Small/medium: nav row at bottom of header (no hamburger overlay) -->
    <nav
        class="lg:hidden flex flex-row items-center gap-3 overflow-x-auto overflow-y-visible pb-1 -mx-1 scrollbar-thin text-sm border-t border-slate-800/50 pt-2 mt-0"
        aria-label="Main navigation"
    >
        <div class="relative shrink-0 overflow-visible" data-skills-dropdown>
            <button
                type="button"
                bind:this={skillsTriggerEl}
                class="duration-200 hover:text-violet-400 bg-transparent border-none cursor-pointer p-0 text-inherit font-normal inline-flex items-center gap-1 whitespace-nowrap"
                aria-haspopup="true"
                aria-expanded={smallScreenSkillsOpen}
                onclick={() => (smallScreenSkillsOpen = !smallScreenSkillsOpen)}
            >
                Skills
                <i class="fa-solid fa-chevron-down text-xs transition-transform duration-200 {smallScreenSkillsOpen ? 'rotate-180' : ''}"></i>
            </button>
            {#if smallScreenSkillsOpen}
                <div
                    class="fixed z-[100] min-w-[220px]"
                    style="top: {dropdownPosition.top}px; left: {dropdownPosition.left}px;"
                    role="menu"
                >
                    <div class="skills-dropdown-panel py-2 rounded-xl bg-slate-900/95 border-2 border-violet-600/60 shadow-xl shadow-black/40 backdrop-blur-sm">
                        {#each skillsSections as section (section.name)}
                            <a
                                href={section.link}
                                role="menuitem"
                                class="skills-dropdown-link block px-4 py-3 text-sm text-slate-100 hover:bg-violet-600/30 hover:text-violet-200 duration-200 first:rounded-t-lg last:rounded-b-lg border-b border-slate-700/50 last:border-b-0"
                                onclick={() => (smallScreenSkillsOpen = false)}
                            >
                                {section.name}
                            </a>
                        {/each}
                    </div>
                </div>
            {/if}
        </div>
        {#each otherTabs as tab (tab.name)}
            <a href={tab.link} class="duration-200 hover:text-violet-400 whitespace-nowrap shrink-0">
                {tab.name}
            </a>
        {/each}
        {#if user}
            <button
                type="button"
                onclick={signOut}
                class="duration-200 hover:text-violet-400 bg-transparent border-none cursor-pointer p-0 text-inherit font-normal whitespace-nowrap shrink-0"
            >
                Sign out
            </button>
        {:else}
            <a href="/auth/signin" class="duration-200 hover:text-violet-400 font-normal whitespace-nowrap shrink-0">
                Sign in
            </a>
        {/if}
    </nav>
</header>

<style>
    /* Contact Me button: continuous margin glow with occasional brighter pulse */
    .contact-btn-glow {
        box-shadow: 0 0 12px rgba(255, 255, 255, 0.35);
        animation: contactGlow 2.8s ease-in-out infinite;
    }
    .contact-btn-glow:hover {
        box-shadow: 0 0 18px rgba(255, 255, 255, 0.5), 0 0 28px rgba(139, 92, 246, 0.25);
    }
    @keyframes contactGlow {
        0%, 100% {
            box-shadow: 0 0 12px rgba(255, 255, 255, 0.35);
        }
        50% {
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.65), 0 0 32px rgba(255, 255, 255, 0.25);
        }
    }

    /* Skills dropdown: fixed height + obvious scrollbar + easy-to-see links */
    .skills-dropdown-panel {
        max-height: min(70vh, 320px);
        overflow-y: auto;
        overflow-x: hidden;
        scrollbar-gutter: stable;
        scrollbar-width: thin;
        scrollbar-color: rgb(139 92 246) rgba(30 41 59 / 0.6);
    }
    .skills-dropdown-panel::-webkit-scrollbar {
        width: 10px;
    }
    .skills-dropdown-panel::-webkit-scrollbar-track {
        background: rgba(30 41 59 / 0.6);
        border-radius: 0 4px 4px 0;
    }
    .skills-dropdown-panel::-webkit-scrollbar-thumb {
        background: rgb(139 92 246);
        border-radius: 5px;
    }
    .skills-dropdown-panel::-webkit-scrollbar-thumb:hover {
        background: rgb(167 139 250);
    }
    .skills-dropdown-link {
        min-height: 44px;
        display: flex;
        align-items: center;
    }
</style>
