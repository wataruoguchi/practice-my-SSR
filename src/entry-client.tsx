import { App } from "./App";
import React from "react";
import { hydrateRoot } from "react-dom/client";

const rootElm = document.getElementById("root");
if (!rootElm) throw new Error("root element not found");

hydrateRoot(
  rootElm,
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
