import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Load n8n demo component
import("@n8n_io/n8n-demo-component/n8n-demo.bundled.js").catch(() => {
  console.warn("n8n-demo-component could not be loaded");
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
