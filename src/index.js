import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { CategoriesProvider } from "./hooks/useCategories";
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CategoriesProvider>
        <App />
      </CategoriesProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
