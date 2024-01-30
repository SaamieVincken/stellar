

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.b445ffb1.js","_app/immutable/chunks/scheduler.b108d059.js","_app/immutable/chunks/index.310f819c.js"];
export const stylesheets = [];
export const fonts = [];
