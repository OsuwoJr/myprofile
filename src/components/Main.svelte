<svelte:options runes={true} />

<script>
    import About from "./About.svelte";
    import IntroPage from "./IntroPage.svelte";
    import Projects from "./Projects.svelte";
    import ProfessionalSummary from "./ProfessionalSummary.svelte";
    import CoreSkills from "./CoreSkills.svelte";
    import ProfessionalExperience from "./ProfessionalExperience.svelte";
    import SelectedProjects from "./SelectedProjects.svelte";
    import Education from "./Education.svelte";
    import SEOGrowth from "./SEOGrowth.svelte";
    import CreativeMedia from "./CreativeMedia.svelte";
    import AdditionalStrengths from "./AdditionalStrengths.svelte";
</script>

<main class="flex flex-col flex-1 p-4">
    <IntroPage/>
    <ProfessionalSummary/>
    <CoreSkills/>
    <ProfessionalExperience/>
    <SelectedProjects/>
    <SEOGrowth/>
    <CreativeMedia/>
    <Education/>
    <AdditionalStrengths/>
    <Projects/>
    <About/>        
</main>