

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.266ef03f.js","_app/immutable/chunks/scheduler.b108d059.js","_app/immutable/chunks/index.310f819c.js"];
export const stylesheets = [];
export const fonts = [];
