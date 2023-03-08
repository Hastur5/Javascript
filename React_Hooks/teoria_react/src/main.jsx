import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Card from "../src/components/Card";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App
      nombre="Mau"
      edad={30}
      direccion={{ calle: "Tamaulipas 80", ciudad: "CDMX", pais: "México" }}
    /> */}
    <Card />
  </React.StrictMode>
);
