import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { CategoriesProvider } from "./hooks/useCategories";
import { BrowserRouter } from "react-router-dom";
import { SnippetsProvider } from "./hooks/useSnippets";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <SnippetsProvider>
        <CategoriesProvider>
          <App />
        </CategoriesProvider>
      </SnippetsProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
