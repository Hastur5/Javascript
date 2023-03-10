import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../data/httpClient";
import { getMovieImg } from "../utils/getMovieImg";

export function MovieDetails() {
  const { movieId } = useParams;
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    get("/movie/" + movieId).then((data) => {
      setMovie(data);
    });
  }, [movieId]);

  const imageURL = getMovieImg(movie.poster_path, 500);

  return (
    <div>
      <img src={imageURL} alt="" />
      <h1>{movie.title}</h1>
    </div>
  );
}
