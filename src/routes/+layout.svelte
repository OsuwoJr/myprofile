<svelte:options runes={true} />

<script>
	import { page } from '$app/stores';
	import '../app.css';
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';
	import FloatingContactButton from '../components/FloatingContactButton.svelte';

	let y = $state(0);
	let innerHeight = $state(0);
	let innerWidth = $state(0);
	let { children } = $props();

	function goTop() {
		document.body.scrollIntoView();
	}
</script>

  <div class="relative flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen">
    {#if $page.url.pathname !== '/contact'}
      <FloatingContactButton />
    {/if}
    <div
      class={"fixed bottom-0 right-0 p-6 sm:p-10 z-[10] duration-200 pointer-events-none " +
      (y > 0 ? "opacity-100" : "opacity-0")}
    >
     <button
         onclick={goTop}
         aria-label="Scroll to top"
         class="pointer-events-auto ml-auto rounded-full aspect-square bg-slate-900 text-violet-400 px-3 sm:px-4 hover:bg-slate-800 cursor-pointer"
         >
        <i class="fa-solid fa-arrow-up grid place-items-center aspect-square"></i>
     </button>
  </div>
  <Header {y}/>

  <main class="flex-1 flex flex-col min-h-0">
    {@render children?.()}
  </main>

  <Footer />
  </div>

  <svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth />