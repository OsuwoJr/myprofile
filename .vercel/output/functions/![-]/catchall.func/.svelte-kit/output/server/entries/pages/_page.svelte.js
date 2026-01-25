import "clsx";
import { x as ensure_array_like, y as attr, w as attr_class, z as clsx } from "../../chunks/index.js";
import { e as escape_html } from "../../chunks/context.js";
import { B as Button } from "../../chunks/Button.js";
function About($$renderer) {
  const benefits = [
    {
      name: "Fast",
      icon: "fa-solid fa-truck-fast",
      description: "Fast load times and smooth interactions for a seamless user experience."
    },
    {
      name: "Intuitive",
      icon: "fa-solid fa-mobile-screen-button",
      description: "User-friendly interfaces with a strong focus on usability and simplicity."
    },
    {
      name: "Responsive",
      icon: "fa-solid fa-desktop",
      description: "Adaptable designs that perform flawlessly across all devices and screen sizes."
    },
    {
      name: "Dynamic",
      icon: "fa-solid fa-database",
      description: "Data-driven, interactive elements that enhance user engagement and functionality."
    }
  ];
  $$renderer.push(`<section id="about" class="py-20 pt-10 lg:pt-16 relative"><div class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4"><h6 class="text-lg sm:text-xl md:text-2xl">Want to <span class="poppins text-violet-400">know</span> more?</h6> <h3>About <span class="poppins text-violet-400">Me</span></h3></div> <div class="flex flex-col items-center gap-20 w-full mx-auto max-w-[800px]"><!--[-->`);
  const each_array = ensure_array_like(benefits);
  for (let index = 0, $$length = each_array.length; index < $$length; index++) {
    let benefit = each_array[index];
    $$renderer.push(`<div class="flex gap-6 sm:gap-8 py-10 items-start"><p class="poppins text-4xl sm:text-5xl md:text-6xl font-bold text-violet-500">0${escape_html(index + 1)}</p> <div class="flex flex-col gap-4 sm:gap-6"><h3 class="text-2xl sm:text-3xl md:text-5xl font-semibold">${escape_html(benefit.name)}</h3> <p class="w-full sm:w-[400px] text-lg sm:text-xl">${escape_html(benefit.description)}</p></div></div>`);
  }
  $$renderer.push(`<!--]--></div> <h5 class="text-2xl sm:text-3xl font-semibold text-center poppins mb-8">The <span class="text-violet-400">Complete</span> Package</h5> <div class="flex flex-col overflow-x-scroll gap-10 max-w-[800px] mx-auto w-full shadow-lg rounded-lg"><table class="bg-white text-slate-700 rounded text-center"><thead class="border-b border-slate-200 bg-violet-50"><tr><th></th><th class="whitespace-nowrap p-2 px-4">Candidate #1</th><th class="whitespace-nowrap p-2 px-4">Candidate #2</th><th class="whitespace-nowrap p-2 px-4">Candidate #3</th><th class="bg-violet-700 text-white p-4 px-8">Me</th></tr></thead><tbody><tr class="border-b border-slate-200"><td class="border-r border-slate-200 font-semibold p-4 text-sm">Dedication</td><td><i class="fa-solid fa-xmark text-slate-500"></i></td><td><i class="fa-solid fa-check text-slate-500"></i></td><td><i class="fa-solid fa-xmark text-slate-500"></i></td><td><i class="fa-solid fa-check text-green-500"></i></td></tr><tr class="border-b border-slate-200"><td class="border-r border-slate-200 font-semibold p-4 text-sm">Critical Thought</td><td><i class="fa-solid fa-xmark text-slate-500"></i></td><td><i class="fa-solid fa-check text-slate-500"></i></td><td><i class="fa-solid fa-check text-slate-500"></i></td><td><i class="fa-solid fa-check text-green-500"></i></td></tr><tr class="border-b border-slate-200"><td class="border-r border-slate-200 font-semibold p-4 text-sm">Interpersonal Skills</td><td><i class="fa-solid fa-check text-slate-500"></i></td><td><i class="fa-solid fa-check text-slate-500"></i></td><td><i class="fa-solid fa-xmark text-slate-500"></i></td><td><i class="fa-solid fa-check text-green-500"></i></td></tr><tr><td class="border-r border-slate-200 font-semibold p-4 text-sm">Programming Ability</td><td><i class="fa-solid fa-check text-slate-500"></i></td><td><i class="fa-solid fa-xmark text-slate-500"></i></td><td><i class="fa-solid fa-check text-slate-500"></i></td><td><i class="fa-solid fa-check text-green-500"></i></td></tr></tbody></table></div> <div class="mx-auto -mt-12 italic sm:hidden opacity-50"><p>Scroll to see more →</p></div> <div class="text-center mt-12"><p class="text-xl sm:text-2xl font-semibold">So, why not invest in <span class="text-violet-400">the best?</span></p> <a href="https://github.com/OsuwoJr" target="_blank" class="mt-4 inline-block px-6 py-3 bg-violet-700 text-white font-bold rounded hover:bg-violet-800 transition duration-300">Explore My Projects</a></div></section>`);
}
function IntroPage($$renderer) {
  const techStack = [
    {
      category: "Programming Languages",
      items: [
        "JavaScript (Vanilla, SvelteKit, ReactJS)",
        "TypeScript",
        "Rust",
        "Motoko"
      ]
    },
    {
      category: "Frameworks & Libraries",
      items: ["Node.js", "Next.js", "Framer Motion", "Flutter"]
    },
    {
      category: "CSS Frameworks",
      items: ["Tailwind CSS", "CSS3", "Bootstrap"]
    },
    {
      category: "Other Skills",
      items: [
        "Community and Social Media Management",
        "Product and Project Management",
        "Prompt Engineer",
        "Start Up Consultant/researcher"
      ]
    }
  ];
  const resumeLink = "/files/JohnFrederickOdongoOsuwoResume.pdf";
  $$renderer.push(`<section id="introPage" class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14"><div class="flex flex-col lg:justify-center items-center md:items-start text-center lg:text-left gap-6 md:gap-8 lg:gap-10"><h2 class="font-semibold text-3xl md:text-6xl">Hi! I'm <span class="poppins text-violet-400">Osuwo</span> Jr <br/>Fullstack <span class="poppins text-violet-400 font-bold">WEB2/WEB3</span> <span class="poppins text-violet-400">Developer</span></h2> <p class="text-lg">My <span class="poppins text-violet-400">favorite tech</span> includes:</p> <ul class="list-disc list-inside text-left"><!--[-->`);
  const each_array = ensure_array_like(techStack);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let { category, items } = each_array[$$index];
    $$renderer.push(`<li><strong class="poppins text-violet-400 font-bold">${escape_html(category)}:</strong> ${escape_html(items.join(", "))}</li>`);
  }
  $$renderer.push(`<!--]--></ul> <div class="flex gap-4">`);
  Button($$renderer, { text: "View Resume", link: resumeLink });
  $$renderer.push(`<!----> `);
  Button($$renderer, { text: "Download Resume", link: resumeLink });
  $$renderer.push(`<!----></div></div> <div class="relative shadow-2xl grid place-items-center"><img src="images/profile.webp" alt="Osuwo Jr, Fullstack Developer" class="object-cover z-[2] max-h-[70vh]"/></div></section>`);
}
function Step($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { step, link = "https://github.com/OsuwoJr/", children } = $$props;
    $$renderer2.push(`<a${attr("href", link)} target="_blank" class="p-4 sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg border border-solid border-violet-700 text-center cursor-pointer group hover:border-violet-400 duration-200"><div class="bg-slate-950 grid place-items-center px-4 text-5xl md:text-6xl -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 mx-auto duration-200"><i${attr_class(clsx(step.icon))}></i></div> <h3 class="font-medium text-xl sm:text-2xl md:text-3xl">${escape_html(step.name)}</h3> `);
    children?.($$renderer2);
    $$renderer2.push(`<!----> <div class="flex-1 flex justify-betweeen gap-4 items-end"><div class="ml-auto cursor-pointer hover:text-slate-950 duration-200 relative after:absolute after:top-0 after:right-full after:bg-white after:w-full after:h-full after:duration-200 hover:after:translate-x-full after:z-[-1] overflow-hidden"><p class="z-4">Go to →</p></div></div></a>`);
  });
}
function Projects($$renderer) {
  const steps = [
    { name: "HTML5", icon: "fa-brands fa-html5" },
    { name: "CSS3", icon: "fa-brands fa-css3" },
    { name: "JavaScript", icon: "fa-brands fa-js" },
    { name: "TypeScript", icon: "fa-brands fa-js" },
    { name: "Rust", icon: "fa-solid fa-cogs" },
    // Using a gear/cogs icon for Rust
    { name: "Motoko", icon: "fa-solid fa-cube" },
    // Using a cube for decentralized Motoko
    { name: "Flutter", icon: "fa-solid fa-mobile-alt" },
    // Using mobile icon for Flutter
    { name: "Node.js", icon: "fa-brands fa-node-js" }
  ];
  $$renderer.push(`<section id="projects" class="py-20 lg:py-32 flex flex-col gap-24"><div class="flex flex-col gap-2 text-center"><h6 class="text-lg sm:text-xl md:text-2xl">Just a few of my public creative endeavors.</h6> <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">Curious to <span class="poppins text-violet-400">see more</span> of my work?</h3></div> <a href="https://www.youtube.com/@tefroofficial?sub_confirmation=1" target="_blank" class="mx-auto px-4 py-2 rounded-md border border-solid border-white flex items-center gap-2 -mb-0 -mt-10 hover:border-violet-700 duration-200"><i class="fa-regular fa-circle-play"></i> <p>Check Out My YouTube</p></a> <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10"><!--[-->`);
  const each_array = ensure_array_like(steps);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let step = each_array[$$index];
    Step($$renderer, {
      step,
      children: ($$renderer2) => {
        $$renderer2.push(`<p>${escape_html(step.name)}</p>`);
      }
    });
  }
  $$renderer.push(`<!--]--></div></section>`);
}
function Main($$renderer) {
  $$renderer.push(`<main class="flex flex-col flex-1 p-4">`);
  IntroPage($$renderer);
  $$renderer.push(`<!----> `);
  Projects($$renderer);
  $$renderer.push(`<!----> `);
  About($$renderer);
  $$renderer.push(`<!----></main>`);
}
function _page($$renderer) {
  Main($$renderer);
}
export {
  _page as default
};
