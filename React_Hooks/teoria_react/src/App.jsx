import "./App.css";

function App() {
  const datos = {
    nombre: "Mau",
    edad: 30,
  };
  return (
    <div>
      <h1>{datos.nombre}</h1>
      <h1>{datos.edad}</h1>
    </div>
  );
}

export default App;
