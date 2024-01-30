import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { S as StarModel } from "../../../chunks/StarModel.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-57x5ud_START -->${$$result.title = `<title>Stellar tool</title>`, ""}<meta name="stellar tool" content="Tool to view stellar evolution."><!-- HEAD_svelte-57x5ud_END -->`, ""} <div class="fixed flex items-center justify-center w-full"><div class="-mt-52">${validate_component(StarModel, "StarModel").$$render($$result, {}, {}, {})}</div></div>`;
});
export {
  Page as default
};
