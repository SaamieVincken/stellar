

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/stellar-tool/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.ce6b8454.js","_app/immutable/chunks/scheduler.b108d059.js","_app/immutable/chunks/index.310f819c.js","_app/immutable/chunks/index.e2c7d0eb.js","_app/immutable/chunks/StarModel.0184633a.js"];
export const stylesheets = ["_app/immutable/assets/6.e04a1d70.css","_app/immutable/assets/StarModel.14242504.css"];
export const fonts = [];
