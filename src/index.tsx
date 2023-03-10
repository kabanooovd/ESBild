import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./index.css"

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error()
}

const root = createRoot(rootElement);
root.render(<App />)


