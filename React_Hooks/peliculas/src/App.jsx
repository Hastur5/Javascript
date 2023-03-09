import { useState, useEffect } from "react";
import "./App.css";
import { MyRoutes } from "./routes/routes";

function App() {
  return (
    <div>
      <header>
        <h1 className="title">🎬 Películas</h1>
      </header>
      <MyRoutes />
    </div>
  );
}

export default App;
