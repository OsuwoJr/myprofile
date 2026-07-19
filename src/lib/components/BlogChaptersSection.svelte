<svelte:options runes={true} />

<script>
	let { playlists } = $props();
</script>

{#if playlists.length > 0}
	<section class="mb-8 sm:mb-10" aria-label="Reading chapters">
		<div class="mb-4 flex flex-wrap items-end justify-between gap-2">
			<div>
				<h2 class="poppins text-lg sm:text-xl font-semibold text-slate-100">Chapters</h2>
				<p class="text-sm text-slate-400 mt-0.5">Curated paths — read in order from start to finish.</p>
			</div>
			<a
				href="/blog/playlists"
				class="text-sm font-medium text-violet-400 no-underline hover:text-violet-300"
			>
				View all →
			</a>
		</div>

		<ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 list-none p-0 m-0">
			{#each playlists as playlist (playlist.id)}
				<li>
					<a
						href="/blog/playlist/{playlist.slug}"
						class="group flex h-full flex-col rounded-xl border border-violet-800/40 bg-violet-950/20 p-4 sm:p-5 no-underline text-inherit hover:border-violet-600/60 hover:bg-violet-950/35 transition-colors hover-lift"
					>
						<span class="text-xs font-bold uppercase tracking-widest text-violet-400 mb-2">Chapter</span>
						<h3 class="poppins text-base font-semibold text-slate-100 leading-snug group-hover:text-white transition-colors">
							{playlist.title}
						</h3>
						{#if playlist.description}
							<p class="mt-2 text-sm text-slate-400 line-clamp-2 flex-1">{playlist.description}</p>
						{/if}
						<span class="mt-3 text-sm font-medium text-violet-400 group-hover:text-violet-300">
							Start reading →
						</span>
					</a>
				</li>
			{/each}
		</ul>
	</section>
{/if}
