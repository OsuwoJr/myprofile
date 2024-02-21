<script>
import Step from "./Step.svelte";

let steps = [
    {name:"HTML5", icon:"fa-brands fa-html5"},
    {name:"CSS3", icon:"fa-brands fa-css3"},
    {name:"Javascript", icon:"fa-brands fa-js"}
   
];

let benefits = [
    { name: "Fast", icon: "fa-solid fa-truck-fast", description:" Fast load times and lag free interaction, my highest recommendation."},
    { name: "Intuitive", icon: "fa-solid fa-mobile-screen-button", description:"Strong preference for easy to use, intuitive UX/UI."},
    { name: "Responsive", icon: "fa-solid fa-desktop", description:"Strong preference for easy to use, intuitive UX/UI."},
    { name: "Dynamic", icon: "fa-solid fa-database", description:"Strong preference for easy to use, intuitive UX/UI."},
]
</script>

<main class="flex flex-col flex-1 p-4">
    <section id="introPage" class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14">
        <div class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10">
            <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
                Hi! I'm <span class="poppins text-violet-400">Osuwo</span>Jr <br/>Fullstack<span class="poppins text-violet-400">Developer</span>
            </h2>
            <p>My <span class="poppins text-violet-400"> favorite tech</span> includes Javascript(Vanilla or SvelteKit), TailwindCss or CSS3, and Typescript</p>
            <a href="https://github.com/OsuwoJr" target="_blank" class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 cursor-pointer">
                 <div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200">
                    <h4 class="relative z-[9]">Get in touch &rarr;</h4>
                 </div>
            </a>
        </div>
        <div class="relative shadow-2xl grid place-items-center">
            <img
                src={"images/profile.webp"}
                alt="Zetane Engine"
                class="object-cover z-[2] max-h-[70vh]"
            />

    </section>
    <section id="projects" class="py-20 lg:py-32 flex flex-col gap-24">
       <div class="flex flex-col gap-2 text-center">
        <h6 class="text-lg sm:text-xl md:text-2xl">
            Just but a few of my public creative endeavors.
        </h6>
        <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
            Curious to <span class="poppins text-violet-400">see more</span> of my work?
        </h3>
        
    </div>
    <a href="https://github.com/OsuwoJr" target="_blank" class="mx-auto px-4 py-2 rounded-md border border-solid border-white flex items-center gap-2 -mb-0 -mt-10 hover:border-violet-700 duration-200">
        <i class="fa-regular fa-circle-play"/>
        <p>Check Out My Github</p>
    </a>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
        <Step step={steps[0]}>
            <p>HTML 5</p>
        </Step>
        <Step step={steps[1]}>
            <p> CSS 3</p>
        </Step>
        <Step step={steps[2]}>
           <p>Javascript</p>
        </Step>

    </div>
    </section>
    <section id="about" class="py-20 pt-10 lg:pt-16 sm:gap-20 relative">
      <div  class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4">
        <h6 class="text-lg sm:text-xl md:text-2xl">Want to <span class="poppins text-violet-400">know</span>  more?</h6>
        <h3>About <span class="poppins text-violet-400">Me</span></h3>
      </div>
      
      <div class="flex flex-col items-center gap-20 w-full mx-auto max-w-[800px]">
          {#each benefits as benefit, index}
          <div class="flex gap-6 sm:gap-8 py-10">
            <p class=" poppins text-4xl sm:text-5xl md:text-6xl font-bold poppins text-violet-500">
                0{index + 1}
            </p>
            <div class="flex flex-col gap-6 sm:gap-8">
               <h3 class="text-2xl sm:text-3xl md:text-5xl">
                   {benefit.name}
               </h3>
               <p>{benefit.description}</p>
            </div>
          </div>
          {/each}
      </div>
      <h5 class={" text-2xl sm:text-3xl font-semibold text-center poppins "}>
        The <span class="text-violet-400">Complete</span> Package
    </h5>
    <div
        class="flex flex-col overflow-x-scroll gap-10 max-w-[800px] mx-auto w-full"
    >
        <table class="bg-white text-slate-700 rounded text-center">
            <thead class={"border-b border-solid border-slate-200  "}>
                <tr class="">
                    <th />
                    <th class="whitespace-nowrap p-2 px-4">Candidate #1</th>
                    <th class="whitespace-nowrap p-2 px-4">Candidate #2</th>
                    <th class="whitespace-nowrap p-2 px-4">Candidate #3</th>
                    <th
                        class="bg-violet-700 text-white whitespace-nowrap p-4 px-8"
                        >Me</th
                    >
                </tr>
            </thead>
            <tbody>
                <tr class="border-b border-solid border-slate-200">
                    <td
                        class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm"
                        >Dedication</td
                    >
                    <td><i class="fa-solid fa-xmark text-slate-500" /></td>
                    <td><i class="fa-solid fa-check text-slate-500" /></td>
                    <td><i class="fa-solid fa-xmark text-slate-500" /></td>
                    <td><i class="fa-solid fa-check text-green-500" /></td>
                </tr>
                <tr class="border-b border-solid border-slate-200">
                    <td
                        class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm"
                        >Critical Thought</td
                    >
                    <td><i class="fa-solid fa-xmark text-slate-500" /></td>
                    <td><i class="fa-solid fa-check text-slate-500" /></td>
                    <td><i class="fa-solid fa-check text-slate-500" /></td>
                    <td><i class="fa-solid fa-check text-green-500" /></td>
                </tr>
                <tr>
                    <td
                        class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm"
                        >Interpersonal Skills</td
                    >
                    <td><i class="fa-solid fa-check text-slate-500" /></td>
                    <td><i class="fa-solid fa-check text-slate-500" /></td>
                    <td><i class="fa-solid fa-xmark text-slate-500" /></td>
                    <td><i class="fa-solid fa-check text-green-500" /></td>
                </tr>
                <tr class="border-t border-solid border-slate-200">
                    <td
                        class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm"
                        >Progamming Ability</td
                    >
                    <td><i class="fa-solid fa-check text-slate-500" /></td>
                    <td><i class="fa-solid fa-xmark text-slate-500" /></td>
                    <td><i class="fa-solid fa-check text-slate-500" /></td>
                    <td><i class="fa-solid fa-check text-green-500" /></td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="mx-auto -mt-12 italic sm:hidden opacity-50">
        <p>Scroll to see more &rarr;</p>
    </div>
    <p class="mx-auto">So why not invest?</p>
    </section>
</main>