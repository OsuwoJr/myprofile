import { w as attr_class, x as ensure_array_like, y as attr } from "../../chunks/index.js";
import "clsx";
import { B as Button } from "../../chunks/Button.js";
import { e as escape_html } from "../../chunks/context.js";
function Footer($$renderer) {
  $$renderer.push(`<footer class="py-20 sm:py-32 bg-black border-t border-solid border-violet-950 flex flex-col gap-4 sm:gap-8 justify-center items-center"><p class="px-4 py-2 bg-white text-slate-950 font-medium">Connect with me ↓</p> <div class="flex flex-col gap-4 items-center justify-center"><p><b class="pr-2">Email</b> <a href="mailto:osuwoodongo@gmail.com" class="text-violet-400">osuwoodongo@gmail.com</a></p> <p><b class="pr-2">Phone</b> <a href="tel:+254790932575" class="text-violet-400">+254 790932575</a></p> <p><b class="pr-2">WhatsApp</b> <a href="https://wa.me/254790932575" target="_blank" class="text-violet-400">Chat on WhatsApp</a></p> <p><b class="pr-2">GitHub</b> <a href="https://github.com/OsuwoJr" target="_blank" class="text-violet-400">OsuwoJr<sup><span class="text-xs scale-75 pl-0.5"><i class="fa-solid fa-arrow-up-right-from-square text-xs scale-[75%]"></i></span></sup></a></p> <p><b class="pr-2">LinkedIn</b> <a href="https://www.linkedin.com/in/johnfrederick-osuwoodongo-191894230/" target="_blank" class="text-violet-400">John Frederick Odongo Osuwo<sup><span class="text-xs scale-75 pl-0.5"><i class="fa-solid fa-arrow-up-right-from-square text-xs scale-[75%]"></i></span></sup></a></p></div></footer>`);
}
function Header($$renderer, $$props) {
  const tabs = [
    { name: "Projects", link: "#projects" },
    { name: "About Me", link: "#about" },
    {
      name: "Blog",
      link: "https://block-craner-encyclopaedia.vercel.app/"
    }
  ];
  $$renderer.push(`<header${attr_class("sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border border-solid  py-6 bg-transparent border-transparent")}><h1 class="font-medium"><b class="font-extrabold poppins">John Frederick</b> Osuwo Odongo</h1> <div class="sm:flex ml-auto pr-4 items-center gap-4 hidden"><!--[-->`);
  const each_array = ensure_array_like(tabs);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let tab = each_array[$$index];
    $$renderer.push(`<a${attr("href", tab.link)} class="duration-200 hover:text-violet-400"><p>${escape_html(tab.name)}</p></a>`);
  }
  $$renderer.push(`<!--]--></div> `);
  Button($$renderer, { text: "Call Me Now!", phone: "+254790932575" });
  $$renderer.push(`<!----></header>`);
}
function _layout($$renderer, $$props) {
  let { children } = $$props;
  $$renderer.push(`<div class="relative flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen"><div${attr_class("fixed bottom-0 w-full duration-200 flex p-10 z-[10]  pointer-events-none opacity-0")}><button aria-label="Scroll to top" class="ml-auto rounded-full aspect-square bg-slate-900 text-violet-400 px-3 sm:px-4 hover:bg-slate-800 cursor-pointer"><i class="fa-solid fa-arrow-up grid place-items-center aspect-square"></i></button></div> `);
  Header($$renderer);
  $$renderer.push(`<!----> `);
  children?.($$renderer);
  $$renderer.push(`<!----> `);
  Footer($$renderer);
  $$renderer.push(`<!----></div>`);
}
export {
  _layout as default
};
