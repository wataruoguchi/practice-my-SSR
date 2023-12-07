import { renderToString } from "react-dom/server";
import { App } from "./App";
import React from "react";

export function render() {
  const html = renderToString(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
  return { html };
}
