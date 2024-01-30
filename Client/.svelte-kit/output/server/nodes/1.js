

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.394681cf.js","_app/immutable/chunks/scheduler.b108d059.js","_app/immutable/chunks/index.310f819c.js","_app/immutable/chunks/stores.4206f000.js","_app/immutable/chunks/singletons.82c0e49b.js","_app/immutable/chunks/index.e2c7d0eb.js"];
export const stylesheets = [];
export const fonts = [];
