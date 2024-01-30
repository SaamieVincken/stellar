import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { F as Footer } from "../../../chunks/Footer.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="app min-h-screen relative">   <main class="absolute inset-0 z-10 bg-white overflow-y-auto">${slots.default ? slots.default({}) : ``}</main> ${validate_component(Footer, "Footer").$$render($$result, { class: "z-20" }, {}, {})}</div>`;
});
export {
  Layout as default
};
