import * as BareMux from "https://cdn.jsdelivr.net/gh/AerialiteLabs/tinyjet-frontend@latest/tinyjet/index.mjs";
const { ScramjetController } = $scramjetLoadController();
const scramjet = new ScramjetController({
	files: {
		wasm: "https://cdn.jsdelivr.net/gh/aerialitelabs/scramjet-static@latest/dist/scramjet.wasm.wasm",
		all: "https://cdn.jsdelivr.net/gh/aerialitelabs/scramjet-static@latest/dist/scramjet.all.js",
		sync: "https://cdn.jsdelivr.net/gh/aerialitelabs/scramjet-static@latest/dist/scramjet.sync.js",
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

function PlaygroundApp() {
	this.css = `
    width: 100%;
    height: 100%;
    color: #f0fef4;
    display: flex;
    padding: 0.5em;
    box-sizing: border-box;
    gap: 0.5em;


    .codesplit {
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;

      gap: 0.5em;
    }

    .mcontainer {
      background: #1e1e1e;
      h2 {
        margin: 0.1em;
      }

      border: 1px solid #313131;
      flex-basis: 100%;
      display: flex;
      flex-direction: column;
    }
    .monaco {
      flex: 1;
    }

    .frame {
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 0.5em;
      iframe {
        width: 100%;
      	border: 1px solid #313131;
      }
    }
    .config {
      border: 1px solid #313131;
      background: #1e1e1e;
      padding: 0.5em;
    }
  `;

	this.fakeorigin = "https://sandboxedorigin.com";
	this.mount = async () => {
		const monaco = await import(
			"https://cdn.jsdelivr.net/npm/monaco-editor/+esm"
		);

		const dedent = (await import("https://cdn.jsdelivr.net/npm/dedent/+esm"))
			.default;

		monaco.editor.setTheme("vs-dark");
		const html = monaco.editor.create(this.htmlbox, {
			value: dedent`
			<html>
				<head>
					<!-- all resources are intercepted by the service worker -->
					<link rel="stylesheet" href="/style.css"></link>
					<script src="/script.js"></script>

					<!-- external resources go through WISP (check network tab) -->
					<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
				</head>
				<body>
					<h1>Scramjet Sandbox Playground</h1>
					<p>
					Scramjet allows any webpage to be run on the same origin in an isolated manner
					</p>


					<button onclick="checkOrigin()">Test emulated origin</button>
					<button onclick="loadResource('https://example.com/')">Load assets through sandbox</button>
					<br><br>

					<h2>iframe test</h2>
					<button onclick="loadiframe()">test iframe nesting</button>
					<br>
				</body>
			</html>
		`,
			language: "html",
			automaticLayout: true,
		});
		const css = monaco.editor.create(this.cssbox, {
			value: dedent`
			/* resources loaded by css are intercepted by service worker */
			@import url('https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

			body, html {
				background: #1e1e1e;
				color: white;
				width: 100%;
				height: 100%;
				font-family: "Roboto";
			}
			iframe {
				zoom: 0.75;
				width: 50%;
				height: 50%;
			}
		`,
			language: "css",
			automaticLayout: true,
		});
		const js = monaco.editor.create(this.jsbox, {
			value: dedent`
			function checkOrigin() {
				// real origin is hidden from the page
				alert("origin: " + window.origin);
			}

			// external resources fetched will be re-
			// directed to the WISP server
			function loadResource(url) {
				fetch(url).then(r => {
					console.log("loaded", r);
				})
			}
			function loadiframe()  {
				if (document.getElementById("nested-frame")) return;
				let frame = document.createElement("iframe");
				frame.id = "nested-frame";
				frame.src = "https://google.com";
				document.body.appendChild(frame);
			}
		`,
			language: "javascript",
			automaticLayout: true,
		});

		const recompile = async () => {
			(await navigator.serviceWorker.ready).active.postMessage({
				type: "playgroundData",
				html: html.getValue(),
				css: css.getValue(),
				js: js.getValue(),
				origin: this.fakeorigin,
			});

			this.frame.src = scramjet.encodeUrl(this.fakeorigin);
		};

		recompile();
		html.getModel().onDidChangeContent(recompile);
		css.getModel().onDidChangeContent(recompile);
		js.getModel().onDidChangeContent(recompile);
	};

	return html`
		<div>
			<div class="codesplit">
				<div class="mcontainer">
					<h2>HTML</h2>
					<div class="monaco" bind:this=${use(this.htmlbox)}></div>
				</div>

				<div class="mcontainer">
					<h2>CSS</h2>
					<div class="monaco" bind:this=${use(this.cssbox)}></div>
				</div>

				<div class="mcontainer">
					<h2>JS</h2>
					<div class="monaco" bind:this=${use(this.jsbox)}></div>
				</div>
			</div>
			<div class="frame" style="flex: 1">
				<iframe style="flex: 1" bind:this=${use(this.frame)}></iframe>
				<div class="config">
					<h1>Config</h1>
					<div>
						<label>fake origin:</label>
						<input bind:value=${use(this.fakeorigin)} />

						<label>wisp server:</label>
						<input bind:value=${use(store.wispurl)} />
					</div>
				</div>
			</div>
		</div>
	`;
}

window.addEventListener("load", async () => {
	const root = document.getElementById("app");
	try {
		root.replaceWith(h(PlaygroundApp));
	} catch (e) {
		root.replaceWith(document.createTextNode("" + e));
		throw e;
	}
});
