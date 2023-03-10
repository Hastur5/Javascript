import "./MovieCard.css";
import { Link } from "react-router-dom";

export function MovieCard({ movie }) {
  const imageURL = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
  return (
    <div>
      <img
        width={230}
        height={345}
        src={imageURL}
        alt={movie.title}
        className="movieImage"
      />
      <div>{movie.title}</div>
    </div>
  );
}

// import "./MovieCard.css"
// import {Link} from "react-router-dom"

// export function MovieCard({ movie }) {
//   const imageURL = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
//   return (
//     <Link to={"/movies/"+movie.id}>
//           <img
//             width={230}
//             height={345}
//             src={imageURL}
//             alt={movie.title}
//             className="movieImage"
//           />
//           <div>{movie.title}</div>
//         </Link>
//   );
// }

// export function Componente({}) {
//   return (<h1>hello world</h1>);
// }
