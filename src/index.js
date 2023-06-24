//  import react
import React from "react";
// import reactDOM
import ReactDOM from "react-dom/client";
// import index.css file
import "./index.css";
// import App
import App from "./App";

// call main root element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // call App using react strickmode
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
