const store = $store(
	{
		url: "https://google.com",
		wispurl:
			_CONFIG?.wispurl || "wss://gointospace.app/wisp/",
		bareurl:
			_CONFIG?.bareurl || null,
		proxy: "",
		transport: "https://cdn.jsdelivr.net/npm/@mercuryworkshop/epoxy-transport/dist/index.mjs",
	},
	{ ident: "settings", backing: "localstorage", autosave: "auto" }
);
self.store = store;
