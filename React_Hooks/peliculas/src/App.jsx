import { useState, useEffect } from "react";
import "./App.css";
import { MyRoutes } from "./routes/routes";

function App() {
  const [likes, setLikes] = useState(0);
  function darLikes() {
    setLikes(likes + 1);
  }
  function quitarLikes() {
    setLikes(likes - 1);
  }
  useEffect(darLikes, []);
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
