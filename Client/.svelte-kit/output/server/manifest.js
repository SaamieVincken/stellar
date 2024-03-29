export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","giphy.gif","robots.txt","Video(1).mov","Video.mov"]),
	mimeTypes: {".png":"image/png",".gif":"image/gif",".txt":"text/plain",".mov":"video/quicktime"},
	_: {
		client: {"start":"_app/immutable/entry/start.89e75aa2.js","app":"_app/immutable/entry/app.af2dab16.js","imports":["_app/immutable/entry/start.89e75aa2.js","_app/immutable/chunks/scheduler.b108d059.js","_app/immutable/chunks/singletons.82c0e49b.js","_app/immutable/chunks/index.e2c7d0eb.js","_app/immutable/entry/app.af2dab16.js","_app/immutable/chunks/scheduler.b108d059.js","_app/immutable/chunks/index.310f819c.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/stellar-models",
				pattern: /^\/stellar-models\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/stellar-tool",
				pattern: /^\/stellar-tool\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
