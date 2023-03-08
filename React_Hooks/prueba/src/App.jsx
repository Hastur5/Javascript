import { useState , useEffect } from "react";
import "./App.css";

function App() {
  const [likes, setLikes] = useState(0);
  function darLikes() {
    setLikes(likes + 1);
  }
  function quitarLikes () {
    setLikes(likes - 1)
  }
  useEffect(darLikes,[])
  return (
    <div className="App">
      <h1>{likes}</h1>
      <button onClick={darLikes}>Dar like</button>
      <button onClick={quitarLikes}>Quitar like</button>
    </div>
  );
}

export default App;
