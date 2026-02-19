<svelte:options runes={true} />

<script>
	const socialLinks = [
		{ name: 'LinkedIn', href: 'https://www.linkedin.com/in/johnfrederick-osuwoodongo-191894230/', icon: 'fa-brands fa-linkedin-in', label: 'LinkedIn profile' },
		{ name: 'Instagram', href: 'https://www.instagram.com/osuwojr/', icon: 'fa-brands fa-instagram', label: 'Instagram profile' },
		{ name: 'GitHub', href: 'https://github.com/OsuwoJr', icon: 'fa-brands fa-github', label: 'GitHub profile' },
		{ name: 'YouTube', href: 'https://youtube.com/@osuwojrcodes?si=kOzrS_xlFikU-SGu', icon: 'fa-brands fa-youtube', label: 'YouTube channel' }
	];
</script>

<footer
	class="py-12 sm:py-16 bg-black border-t border-solid border-violet-950 flex flex-col gap-6 justify-center items-center"
>
	<div class="w-full max-w-[1400px] mx-auto px-4 grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] gap-6 items-center justify-items-center">
		<!-- Left: LinkedIn & Instagram -->
		<div class="flex items-center gap-5 justify-center sm:justify-end w-full">
			<a
				href={socialLinks[0].href}
				target="_blank"
				rel="noopener noreferrer"
				aria-label={socialLinks[0].label}
				class="text-slate-400 hover:text-violet-400 transition-colors duration-200 text-xl sm:text-2xl"
			>
				<i class={socialLinks[0].icon}></i>
			</a>
			<a
				href={socialLinks[1].href}
				target="_blank"
				rel="noopener noreferrer"
				aria-label={socialLinks[1].label}
				class="text-slate-400 hover:text-violet-400 transition-colors duration-200 text-xl sm:text-2xl"
			>
				<i class={socialLinks[1].icon}></i>
			</a>
		</div>

		<p class="text-center text-xs text-slate-500">
			© {new Date().getFullYear()} Osuwo Odongo John Frederick. All rights reserved.
		</p>

		<!-- Right: GitHub & YouTube -->
		<div class="flex items-center gap-5 justify-center sm:justify-start w-full">
			<a
				href={socialLinks[2].href}
				target="_blank"
				rel="noopener noreferrer"
				aria-label={socialLinks[2].label}
				class="text-slate-400 hover:text-violet-400 transition-colors duration-200 text-xl sm:text-2xl"
			>
				<i class={socialLinks[2].icon}></i>
			</a>
			<a
				href={socialLinks[3].href}
				target="_blank"
				rel="noopener noreferrer"
				aria-label={socialLinks[3].label}
				class="text-slate-400 hover:text-violet-400 transition-colors duration-200 text-xl sm:text-2xl"
			>
				<i class={socialLinks[3].icon}></i>
			</a>
		</div>
	</div>
</footer>
