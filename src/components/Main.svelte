<svelte:options runes={true} />

<script>
    import IntroPage from "./IntroPage.svelte";
    import Projects from "./Projects.svelte";
    import CoreSkills from "./CoreSkills.svelte";
    import ProfessionalExperience from "./ProfessionalExperience.svelte";
    import Education from "./Education.svelte";
    import SEOGrowth from "./SEOGrowth.svelte";
    import CreativeMedia from "./CreativeMedia.svelte";
    import AdditionalStrengths from "./AdditionalStrengths.svelte";
</script>

<main class="flex flex-col flex-1 min-h-0 w-full p-4">
    <IntroPage/>
    <CoreSkills/>
    <ProfessionalExperience/>
    <SEOGrowth/>
    <CreativeMedia/>
    <Education/>
    <AdditionalStrengths/>
    <Projects/>
</main>