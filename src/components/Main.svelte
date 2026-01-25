<svelte:options runes={true} />

<script>

  import About from "./About.svelte";
import IntroPage from "./IntroPage.svelte";
  import Projects from "./Projects.svelte";




</script>

<main class="flex flex-col flex-1 p-4">
    <IntroPage/>
    <Projects/>
    <About/>        
</main>