function Coffe() {
  const caliente = true;
  //   if (caliente) {
  //     return <h1>Café caliente</h1>;
  //   } else {
  //     return <h1>Café frío</h1>;
  //   }
  return <h1>{caliente ? "Café caliente" : "Café frío"}</h1>; // Esto es con operadores ternarios.
}

export default Coffe;

//Solamente es ejemplo de cómo funciona un operador ternario.