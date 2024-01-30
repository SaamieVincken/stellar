import { c as create_ssr_component, b as add_attribute, o as onDestroy, v as validate_component } from "../../../chunks/ssr.js";
import { S as StarModel } from "../../../chunks/StarModel.js";
import { w as writable } from "../../../chunks/index.js";
var SpectralType;
(function(SpectralType2) {
  SpectralType2["O"] = "O";
  SpectralType2["B"] = "B";
  SpectralType2["A"] = "A";
  SpectralType2["F"] = "F";
  SpectralType2["G"] = "G";
  SpectralType2["K"] = "K";
  SpectralType2["M"] = "M";
})(SpectralType || (SpectralType = {}));
var Sequences;
(function(Sequences2) {
  Sequences2["MainSequence"] = "Main sequence";
  Sequences2["NonMainSequence"] = "Non- Main sequence";
})(Sequences || (Sequences = {}));
const InputStellarTool_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".input-style.svelte-14ld6lv{border:2px solid #e8e8e8;padding:5px;font-size:small;text-align:center;color:#5d5d6a;width:150px;margin:5px;caret-color:black}.input-style.svelte-14ld6lv:focus{outline:none;background-color:#eff0f1;color:#5d5d6a}",
  map: null
};
const InputStellarTool = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let _mass = "";
  let _luminosity = "";
  let _temperature = "";
  $$result.css.add(css$1);
  return `<div class="flex flex-col ml-20 mt-7 bg-white"><input class="input-style svelte-14ld6lv" type="text"${add_attribute("placeholder", "Input mass (M☉)", 0)} title="1 solar mass = 1.9891 × 10^30 kilograms"${add_attribute("value", _mass, 0)}> <input class="input-style svelte-14ld6lv" type="text" placeholder="Input luminosity (L☉)" title="1 solar luminosity = 3.828 × 10e26 watts"${add_attribute("value", _luminosity, 0)}> <input class="input-style svelte-14ld6lv" type="text" placeholder="Input temperature (K)" title="Kelvin"${add_attribute("value", _temperature, 0)}></div>`;
});
const TimeBar_svelte_svelte_type_style_lang = "";
const css = {
  code: ".custom-slider.svelte-1or7tjt{background:linear-gradient(to right, #CCE5FF, #FFFFCC)}",
  map: null
};
const TimeBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="fixed flex items-center justify-center w-full z-10" data-svelte-h="svelte-ink67u"><div class="mt-72 w-1/2"><input type="range" value="50" class="h-6 rounded-lg appearance-none cursor-pointer custom-slider mx-auto w-full svelte-1or7tjt"></div> </div>`;
});
const star = writable(void 0);
let phase = "Unknown";
const PhaseInformation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const unsubscribe = star.subscribe((value) => {
  });
  onDestroy(() => {
    unsubscribe();
  });
  return `<div class="fixed flex items-center justify-center w-full"><div class="-mt-52">${validate_component(StarModel, "StarModel").$$render($$result, {}, {}, {})}</div></div> <div>${validate_component(TimeBar, "TimeBar").$$render($$result, {}, {}, {})}</div> <div class="fixed flex items-center justify-center w-full"><div class="mt-80 w-1/2 text-white">${phase.phase !== void 0 ? `          ` : ``}</div></div>`;
});
const StellarTool = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(InputStellarTool, "InputStellarTool").$$render($$result, {}, {}, {})} ${validate_component(PhaseInformation, "PhaseInformation").$$render($$result, {}, {}, {})}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1cb4v3j_START -->${$$result.title = `<title>Stellar tool</title>`, ""}<meta name="stellar tool" content="Tool to view stellar evolution."><!-- HEAD_svelte-1cb4v3j_END -->`, ""} ${validate_component(StellarTool, "StellarTool").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
