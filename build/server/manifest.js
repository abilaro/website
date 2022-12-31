const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-d8bc3274.js","imports":["_app/immutable/start-d8bc3274.js","_app/immutable/chunks/index-03def008.js","_app/immutable/chunks/singletons-33ee9df6.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-44325901.js'),
			() => import('./chunks/1-fea55428.js'),
			() => import('./chunks/2-021eb871.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: () => import('./chunks/_server.ts-b8bd9310.js')
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

export { manifest };
//# sourceMappingURL=manifest.js.map
