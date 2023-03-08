import "./card.css";
const pokemon = [
  {
    id: 248,
    nombre: "Tyranitar",
    imagen: "https://i.ibb.co/fnXfLFN/Tyranitar.webp",
  },
  {
    id: 104,
    nombre: "Cubone",
    imagen: "https://i.ibb.co/McPJpkH/Cubone.png",
  },
  {
    id: 58,
    nombre: "Growlithe",
    imagen: "https://i.ibb.co/mFnh9K9/Growlithe.png",
  },
];

export function Card() {
  return pokemon.map((item, id) => {
    return (
      <div className="card" key={id}>
        <h1>{item.nombre}</h1>
        <img className="image" src={item.imagen} />
      </div>
    );
  });
}

export default Card;
