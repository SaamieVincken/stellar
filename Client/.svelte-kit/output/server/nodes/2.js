

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/stellar-models/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.d977e0e4.js","_app/immutable/chunks/scheduler.b108d059.js","_app/immutable/chunks/index.310f819c.js","_app/immutable/chunks/Footer.124aad84.js","_app/immutable/chunks/stores.4206f000.js","_app/immutable/chunks/singletons.82c0e49b.js","_app/immutable/chunks/index.e2c7d0eb.js"];
export const stylesheets = ["_app/immutable/assets/Footer.34cf1330.css"];
export const fonts = [];
