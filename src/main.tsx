import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { useRoutes, BrowserRouter } from "react-router-dom";
import routes from "~react-pages";

import "virtual:windi.css";
import "./index.css";

function App() {
  return useRoutes(routes);
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
