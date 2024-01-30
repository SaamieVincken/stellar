

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/stellar-models/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.3535216b.js","_app/immutable/chunks/scheduler.b108d059.js","_app/immutable/chunks/index.310f819c.js","_app/immutable/chunks/StarModel.0184633a.js"];
export const stylesheets = ["_app/immutable/assets/StarModel.14242504.css"];
export const fonts = [];
