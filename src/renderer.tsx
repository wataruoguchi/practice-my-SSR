import _templateHtmlDev from "./index.html?raw";

const isProd = import.meta.env.PROD;

const APP_HEAD_TAG = "<!--app-head-->";
const APP_HTML_TAG = "<!--ssr-outlet-->";
const APP_SCRIPT_TAG = "<!--app-script-->";

// Inspired by https://vitejs.dev/guide/ssr.html
export function renderer(
  {
    head,
    content,
  }: {
    head: string;
    content: string;
  },
  template = _templateHtmlDev,
): string {
  return template
    .replace(APP_HEAD_TAG, head)
    .replace(APP_HTML_TAG, content)
    .replace(
      APP_SCRIPT_TAG,
      `${!isProd ? addRefreshRuntime() : ""}<script type="module" src="${
        isProd ? "/dist/entry-client.js" : "/src/entry-client.tsx"
      }"></script>`,
    );
}

// https://github.com/vitejs/vite/issues/12876#issuecomment-1510434993
function addRefreshRuntime(): string {
  return `<script type="module">
      import RefreshRuntime from "/@react-refresh";
      RefreshRuntime.injectIntoGlobalHook(window);
      window.$RefreshReg$ = () => {};
      window.$RefreshSig$ = () => (type) => type;
      window.__vite_plugin_react_preamble_installed__ = true;
    </script>
  `;
}
