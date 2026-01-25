export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","assets/particles.json","favicon-16x16.png","favicon-32x32.png","favicon.ico","favicon.png.ico","faviconSm.png","files/JohnFrederickOdongoOsuwoResume.pdf","images/faviconSm.png","images/profile.webp","profile.webp","site.webmanifest"]),
	mimeTypes: {".png":"image/png",".json":"application/json",".pdf":"application/pdf",".webp":"image/webp",".webmanifest":"application/manifest+json"},
	_: {
		client: {start:"_app/immutable/entry/start.BPrH4Jkd.js",app:"_app/immutable/entry/app.CVp28M9x.js",imports:["_app/immutable/entry/start.BPrH4Jkd.js","_app/immutable/chunks/9Vn8MGd-.js","_app/immutable/chunks/CWIBN2Iv.js","_app/immutable/chunks/0LWPl_M8.js","_app/immutable/entry/app.CVp28M9x.js","_app/immutable/chunks/CWIBN2Iv.js","_app/immutable/chunks/C-tmgscj.js","_app/immutable/chunks/0LWPl_M8.js","_app/immutable/chunks/CW3eGBZa.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
