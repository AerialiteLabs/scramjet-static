import * as BareMux from "https://cdn.jsdelivr.net/gh/AerialiteLabs/tinyjet-frontend@latest/tinyjet/index.mjs";
const { ScramjetController } = $scramjetLoadController();

const scramjet = new ScramjetController({
	files: {
		wasm: "https://cdn.jsdelivr.net/gh/aerialitelabs/scramjet-static@master/dist/scramjet.wasm.wasm",
		all: "https://cdn.jsdelivr.net/gh/aerialitelabs/scramjet-static@master/dist/scramjet.all.js",
		sync: "https://cdn.jsdelivr.net/gh/aerialitelabs/scramjet-static@master/dist/scramjet.sync.js",
	},
	flags: {
		rewriterLogs: false,
		scramitize: false,
		cleanErrors: true,
		sourcemaps: true,
	},
});

scramjet.init();
navigator.serviceWorker.register("./sw.js");

const bareworker = `data:application/javascript;base64,IWZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO2NvbnN0IGU9TWVzc2FnZVBvcnQucHJvdG90eXBlLnBvc3RNZXNzYWdlO2xldCB0PW51bGw7ZnVuY3Rpb24gYShlLHQsYSl7Y29uc29sZS5lcnJvcihgZXJyb3Igd2hpbGUgcHJvY2Vzc2luZyAnJHthfSc6IGAsdCksZS5wb3N0TWVzc2FnZSh7dHlwZToiZXJyb3IiLGVycm9yOnR9KX1hc3luYyBmdW5jdGlvbiBuKGEsbixzKXtjb25zdCBvPWF3YWl0IHMucmVxdWVzdChuZXcgVVJMKGEuZmV0Y2gucmVtb3RlKSxhLmZldGNoLm1ldGhvZCxhLmZldGNoLmJvZHksYS5mZXRjaC5oZWFkZXJzLG51bGwpO2lmKCFmdW5jdGlvbigpe2lmKG51bGw9PT10KXtjb25zdCBhPW5ldyBNZXNzYWdlQ2hhbm5lbCxuPW5ldyBSZWFkYWJsZVN0cmVhbTtsZXQgczt0cnl7ZS5jYWxsKGEucG9ydDEsbixbbl0pLHM9ITB9Y2F0Y2goZSl7cz0hMX1yZXR1cm4gdD1zLHN9cmV0dXJuIHR9KCkmJm8uYm9keSBpbnN0YW5jZW9mIFJlYWRhYmxlU3RyZWFtKXtjb25zdCBlPW5ldyBSZXNwb25zZShvLmJvZHkpO28uYm9keT1hd2FpdCBlLmFycmF5QnVmZmVyKCl9by5ib2R5IGluc3RhbmNlb2YgUmVhZGFibGVTdHJlYW18fG8uYm9keSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyP2UuY2FsbChuLHt0eXBlOiJmZXRjaCIsZmV0Y2g6b30sW28uYm9keV0pOmUuY2FsbChuLHt0eXBlOiJmZXRjaCIsZmV0Y2g6b30pfWxldCBzPW51bGwsbz0iIjtmdW5jdGlvbiBjKCl7cmV0dXJuIG5ldyBFcnJvcigidGhlcmUgYXJlIG5vIGJhcmUgY2xpZW50cyIse2NhdXNlOiJObyBCYXJlVHJhbnNwb3J0IHdhcyBzZXQuIFRyeSBjcmVhdGluZyBhIEJhcmVNdXhDb25uZWN0aW9uIGFuZCBjYWxsaW5nIHNldFRyYW5zcG9ydCgpIG9yIHNldE1hbnVhbFRyYW5zcG9ydCgpIG9uIGl0IGJlZm9yZSB1c2luZyBCYXJlQ2xpZW50LiJ9KX1mdW5jdGlvbiByKHQsYSl7Y29uc3Qgbj1zO2xldCBvPVthXTt0LmZldGNoPy5ib2R5JiZvLnB1c2godC5mZXRjaC5ib2R5KSx0LndlYnNvY2tldD8uY2hhbm5lbCYmby5wdXNoKHQud2Vic29ja2V0LmNoYW5uZWwpLGUuY2FsbChuLHttZXNzYWdlOnQscG9ydDphfSxvKX1mdW5jdGlvbiBsKHQpe3Qub25tZXNzYWdlPWFzeW5jIHQ9Pntjb25zdCBsPXQuZGF0YS5wb3J0LGk9dC5kYXRhLm1lc3NhZ2U7aWYoInBpbmciPT09aS50eXBlKWUuY2FsbChsLHt0eXBlOiJwb25nIn0pO2Vsc2UgaWYoInNldCI9PT1pLnR5cGUpdHJ5e2NvbnN0IHQ9YXN5bmMgZnVuY3Rpb24oKXt9LmNvbnN0cnVjdG9yO2lmKCJiYXJlLW11eC1yZW1vdGUiPT09aS5jbGllbnQuZnVuY3Rpb24pcz1pLmNsaWVudC5hcmdzWzBdLG89YGJhcmUtbXV4LXJlbW90ZSAoJHtpLmNsaWVudC5hcmdzWzFdfSlgO2Vsc2V7Y29uc3QgZT1uZXcgdChpLmNsaWVudC5mdW5jdGlvbiksW2Esbl09YXdhaXQgZSgpO3M9bmV3IGEoLi4uaS5jbGllbnQuYXJncyksbz1ufWNvbnNvbGUubG9nKCJzZXQgdHJhbnNwb3J0IHRvICIscyxvKSxlLmNhbGwobCx7dHlwZToic2V0In0pfWNhdGNoKGUpe2EobCxlLCJzZXQiKX1lbHNlIGlmKCJnZXQiPT09aS50eXBlKWwucG9zdE1lc3NhZ2Uoe3R5cGU6ImdldCIsbmFtZTpvfSk7ZWxzZSBpZigiZmV0Y2giPT09aS50eXBlKXRyeXtpZighcyl0aHJvdyBjKCk7aWYocyBpbnN0YW5jZW9mIE1lc3NhZ2VQb3J0KXJldHVybiB2b2lkIHIoaSxsKTtzLnJlYWR5fHxhd2FpdCBzLmluaXQoKSxhd2FpdCBuKGksbCxzKX1jYXRjaChlKXthKGwsZSwiZmV0Y2giKX1lbHNlIGlmKCJ3ZWJzb2NrZXQiPT09aS50eXBlKXRyeXtpZighcyl0aHJvdyBjKCk7aWYocyBpbnN0YW5jZW9mIE1lc3NhZ2VQb3J0KXJldHVybiB2b2lkIHIoaSxsKTtzLnJlYWR5fHxhd2FpdCBzLmluaXQoKSxhd2FpdCBhc3luYyBmdW5jdGlvbih0LGEsbil7Y29uc3RbcyxvXT1uLmNvbm5lY3QobmV3IFVSTCh0LndlYnNvY2tldC51cmwpLHQud2Vic29ja2V0LnByb3RvY29scyx0LndlYnNvY2tldC5yZXF1ZXN0SGVhZGVycywoYT0+e2UuY2FsbCh0LndlYnNvY2tldC5jaGFubmVsLHt0eXBlOiJvcGVuIixhcmdzOlthXX0pfSksKGE9PnthIGluc3RhbmNlb2YgQXJyYXlCdWZmZXI/ZS5jYWxsKHQud2Vic29ja2V0LmNoYW5uZWwse3R5cGU6Im1lc3NhZ2UiLGFyZ3M6W2FdfSxbYV0pOmUuY2FsbCh0LndlYnNvY2tldC5jaGFubmVsLHt0eXBlOiJtZXNzYWdlIixhcmdzOlthXX0pfSksKChhLG4pPT57ZS5jYWxsKHQud2Vic29ja2V0LmNoYW5uZWwse3R5cGU6ImNsb3NlIixhcmdzOlthLG5dfSl9KSwoYT0+e2UuY2FsbCh0LndlYnNvY2tldC5jaGFubmVsLHt0eXBlOiJlcnJvciIsYXJnczpbYV19KX0pKTt0LndlYnNvY2tldC5jaGFubmVsLm9ubWVzc2FnZT1lPT57ImRhdGEiPT09ZS5kYXRhLnR5cGU/cyhlLmRhdGEuZGF0YSk6ImNsb3NlIj09PWUuZGF0YS50eXBlJiZvKGUuZGF0YS5jbG9zZUNvZGUsZS5kYXRhLmNsb3NlUmVhc29uKX0sZS5jYWxsKGEse3R5cGU6IndlYnNvY2tldCJ9KX0oaSxsLHMpfWNhdGNoKGUpe2EobCxlLCJ3ZWJzb2NrZXQiKX19fW5ldyBCcm9hZGNhc3RDaGFubmVsKCJiYXJlLW11eCIpLnBvc3RNZXNzYWdlKHt0eXBlOiJyZWZyZXNoUG9ydCJ9KSxzZWxmLm9uY29ubmVjdD1lPT57bChlLnBvcnRzWzBdKX0sY29uc29sZS5kZWJ1ZygiYmFyZS1tdXg6IHJ1bm5pbmcgdjIuMS43IChidWlsZCBjNTZkMjg2KSIpfSgpOwovLyMgc291cmNlTWFwcGluZ1VSTD13b3JrZXIuanMubWFw`;
const connection = new BareMux.BareMuxConnection(bareworker);
const flex = css`
	display: flex;
`;
const col = css`
	flex-direction: column;
`;

connection.setTransport(store.transport, [{ wisp: store.wispurl }]);

function Config() {
	this.css = `
    transition: opacity 0.4s ease;
    :modal[open] {
        animation: fade 0.4s ease normal;
    }

    :modal::backdrop {
     backdrop-filter: blur(3px);
    }

    .buttons {
      gap: 0.5em;
    }
    .buttons button {
      border: 1px solid #4c8bf5;
      background-color: #313131;
      border-radius: 0.75em;
      color: #fff;
      padding: 0.45em;
    }
    .input_row input {
      background-color: rgb(18, 18, 18);
      border: 2px solid rgb(49, 49, 49);
      border-radius: 0.75em;
      color: #fff;
      outline: none;
      padding: 0.45em;
    }
    .input_row {
      margin-bottom: 0.5em;
      margin-top: 0.5em;
    }
    .input_row input {
      flex-grow: 1;
    }
    .centered {
      justify-content: center;
      align-items: center;
    }
  `;

	function handleModalClose(modal) {
		modal.style.opacity = 0;
		setTimeout(() => {
			modal.close();
			modal.style.opacity = 1;
		}, 250);
	}

	return html`
      <dialog class="cfg" style="background-color: #121212; color: white; border-radius: 8px;">
        <div style="align-self: end">
          <div class=${[flex, "buttons"]}>
            <button on:click=${() => {
							connection.setTransport("https://cdn.jsdelivr.net/npm/@mercuryworkshop/bare-as-module3/dist/index.mjs", [store.bareurl]);
							store.transport = "https://cdn.jsdelivr.net/npm/@mercuryworkshop/bare-as-module3/dist/index.mjs";
						}}>use bare server 3</button>
            <button on:click=${() => {
							connection.setTransport("https://cdn.jsdelivr.net/npm/@mercuryworkshop/libcurl-transport/dist/index.mjs", [
								{ wisp: store.wispurl },
							]);
							store.transport = "https://cdn.jsdelivr.net/npm/@mercuryworkshop/libcurl-transport/dist/index.mjs";
						}}>use libcurl.js</button>
              <button on:click=${() => {
								connection.setTransport("https://cdn.jsdelivr.net/npm/@mercuryworkshop/epoxy-transport/dist/index.mjs", [
									{ wisp: store.wispurl },
								]);
								store.transport = "https://cdn.jsdelivr.net/npm/@mercuryworkshop/epoxy-transport/dist/index.mjs";
							}}>use epoxy</button>
          </div>
        </div>
        <div class=${[flex, col, "input_row"]}>
          <label for="wisp_url_input">Wisp URL:</label>
          <input id="wisp_url_input" bind:value=${use(store.wispurl)} spellcheck="false"></input>
        </div>
        <div class=${[flex, col, "input_row"]}>
          <label for="bare_url_input">Bare URL:</label>
          <input id="bare_url_input" bind:value=${use(store.bareurl)} spellcheck="false"></input>
        </div>
        <div>${use(store.transport)}</div>
        <div class=${[flex, "buttons", "centered"]}>
          <button on:click=${() => handleModalClose(this.root)}>close</button>
        </div>
      </dialog>
  `;
}

function BrowserApp() {
	this.css = `
    width: 100%;
    height: 100%;
    color: #e0def4;
    display: flex;
    flex-direction: column;
    padding: 0.5em;
    padding-top: 0;
    box-sizing: border-box;

    a {
      color: #e0def4;
    }

    input,
    button {
      font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont,
        sans-serif;
    }
    .version {
    }
    h1 {
      font-family: "Inter Tight", "Inter", system-ui, -apple-system, BlinkMacSystemFont,
      sans-serif;
      margin-bottom: 0;
    }
    iframe {
      background-color: #fff;
      border: none;
      border-radius: 0.3em;
      flex: 1;
      width: 100%;
    }

    input.bar {
      font-family: "Inter";
      padding: 0.1em;
      padding-left: 0.3em;
      border: none;
      outline: none;
      color: #fff;
      height: 1.5em;
      border-radius: 0.3em;
      flex: 1;

      background-color: #121212;
      border: 1px solid #313131;
    }
    .input_row > label {
      font-size: 0.7rem;
      color: gray;
    }
    p {
      margin: 0;
      margin-top: 0.2em;
    }

    .nav {
      padding-top: 0.3em;
      padding-bottom: 0.3em;
      gap: 0.3em;
    }
    spacer {
      margin-left: 10em;
    }

    .nav button {
      color: #fff;
      outline: none;
      border: none;
      border-radius: 0.30em;
      background-color: #121212;
      border: 1px solid #313131;
    }
  `;
	this.url = store.url;

	const frame = scramjet.createFrame();

	this.mount = () => {
		let body = btoa(
			`<body style="background: #000; color: #fff">Welcome to <i>Scramjet</i>! Type in a URL in the omnibox above and press enter to get started.</body>`
		);
		frame.go(`data:text/html;base64,${body}`);
	};

	frame.addEventListener("urlchange", (e) => {
		if (!e.url) return;
		this.url = e.url;
	});

	const handleSubmit = () => {
		this.url = this.url.trim();
		//  frame.go(this.url)
		if (!this.url.startsWith("http")) {
			this.url = "https://" + this.url;
		}

		return frame.go(this.url);
	};

	const cfg = h(Config);
	document.body.appendChild(cfg);
	this.githubURL = `https://github.com/MercuryWorkshop/scramjet/commit/${$scramjetVersion.build}`;

	return html`
      <div>
      <div class=${[flex, "nav"]}>

        <button on:click=${() => cfg.showModal()}>config</button>
        <button on:click=${() => frame.back()}>&lt;-</button>
        <button on:click=${() => frame.forward()}>-&gt;</button>
        <button on:click=${() => frame.reload()}>&#x21bb;</button>

        <input class="bar" autocomplete="off" autocapitalize="off" autocorrect="off" 
        bind:value=${use(this.url)} on:input=${(e) => {
					this.url = e.target.value;
				}} on:keyup=${(e) => e.keyCode == 13 && (store.url = this.url) && handleSubmit()}></input>

        <button on:click=${() => window.open(scramjet.encodeUrl(this.url))}>open</button>

        <p class="version">
          <b>scramjet</b> ${$scramjetVersion.version} <a href=${use(this.githubURL)}>${$scramjetVersion.build}</a>
        </p>
      </div>
      ${frame.frame}
    </div>
    `;
}
window.addEventListener("load", async () => {
	const root = document.getElementById("app");
	try {
		root.replaceWith(h(BrowserApp));
	} catch (e) {
		root.replaceWith(document.createTextNode("" + e));
		throw e;
	}
	function b64(buffer) {
		let binary = "";
		const bytes = new Uint8Array(buffer);
		const len = bytes.byteLength;
		for (let i = 0; i < len; i++) {
			binary += String.fromCharCode(bytes[i]);
		}

		return btoa(binary);
	}
	const arraybuffer = await (await fetch("https://cdn.jsdelivr.net/gh/aerialitelabs/scramjet-static@master/assets/scramjet.png")).arrayBuffer();
	console.log(
		"%cb",
		`
      background-image: url(data:image/png;base64,${b64(arraybuffer)});
      color: transparent;
      padding-left: 200px;
      padding-bottom: 100px;
      background-size: contain;
      background-position: center center;
      background-repeat: no-repeat;
  `
	);
});
