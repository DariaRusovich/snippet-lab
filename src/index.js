import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { SnippetsProvider } from "./hooks/useSnippets";
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <SnippetsProvider>
        <App />
      </SnippetsProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
