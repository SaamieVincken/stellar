import { c as create_ssr_component, a as subscribe, o as onDestroy, e as escape } from "./ssr.js";
import { p as page } from "./stores.js";
const app = "";
const Footer_svelte_svelte_type_style_lang = "";
const css = {
  code: "#footer.svelte-pojlgr{color:white;text-align:center;position:fixed;bottom:0;width:100%;z-index:9999;height:30px;background-color:#2d3340;transition:height 0.4s ease}#footer.expanded.svelte-pojlgr{height:100vh}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let stringDate = "";
  function updateDateTime() {
    const Today = /* @__PURE__ */ new Date();
    stringDate = Today.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  }
  updateDateTime();
  const interval = setInterval(updateDateTime, 1e3);
  onDestroy(() => {
    clearInterval(interval);
  });
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<footer class="${["sticky h-10 text-white svelte-pojlgr", ""].join(" ").trim()}" id="footer"><div class="items-center justify-center mt-1 p-1"><p>${escape(stringDate)}</p></div> <div class="flex justify-end items-center"><ul class="flex h-7 -mt-8"><li class="${[
    "mr-2 w-36 text-center text-white",
    $page.url.pathname === "./stellar-tool" ? "active" : ""
  ].join(" ").trim()}" style="background-color: #586278;" data-svelte-h="svelte-e2lv70"><a href="./stellar-tool">Stellar tool</a></li> <li class="${[
    "mr-2 bg-gray-400 w-36 text-center text-white",
    $page.url.pathname === "/stellar-models" ? "active" : ""
  ].join(" ").trim()}" style="background-color: #586278;" data-svelte-h="svelte-1ve2seu"><a href="./stellar-models">Model test</a></li></ul></div></footer>`;
});
export {
  Footer as F
};
