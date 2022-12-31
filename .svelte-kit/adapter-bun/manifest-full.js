export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-d8bc3274.js","imports":["_app/immutable/start-d8bc3274.js","_app/immutable/chunks/index-03def008.js","_app/immutable/chunks/singletons-33ee9df6.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: () => import('./entries/endpoints/_server.ts.js')
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
