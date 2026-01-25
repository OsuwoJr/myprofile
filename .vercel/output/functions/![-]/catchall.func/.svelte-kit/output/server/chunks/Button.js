import { y as attr } from "./index.js";
import { e as escape_html } from "./context.js";
function Button($$renderer, $$props) {
  let { text, link = "", email = "", phone = "" } = $$props;
  $$renderer.push(`<a class="relative overflow-hidden px-2 md:px-5 py-2 group rounded-full bg-white text-slate-950 max-w-max border border-transparent transition-transform duration-300 ease-in-out focus:outline-none hover:border-violet-500 active:border-violet-300"${attr("href", email ? `mailto:${email}?subject=Hello&body=Hi%20there,%0D%0A%0D%0AI%27m%20reaching%20out%20regarding...` : phone ? `tel:${phone}` : link)}${attr("target", link ? "_blank" : null)}${attr("rel", link ? "noopener noreferrer" : null)}>${escape_html(text)}</a>`);
}
export {
  Button as B
};
