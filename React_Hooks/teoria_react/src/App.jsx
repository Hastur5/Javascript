import "./App.css";

export function App (props) {
  return (
    <div>
      <h1>😎{props.nombre}</h1>
      <h1>💋{props.edad}</h1>
      <h1>🖤{props.direccion.calle}</h1>
      <h1>{props.direccion.ciudad}</h1>
      <h1>{props.direccion.pais}</h1>
    </div>
  );
}

export default App;
