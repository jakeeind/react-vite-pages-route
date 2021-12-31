import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import routes from "~react-pages";

import { useRoutes, BrowserRouter } from "react-router-dom";

console.log(routes);

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
