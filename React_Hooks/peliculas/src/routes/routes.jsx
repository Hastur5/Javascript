import { Routes, Route, Link } from "react-router-dom";
import { MovieCard } from "../components/MovieCard";
import { ContextMovieCard } from "../components/ContextMovieCard";
import { LandingPage } from "../pages/LandingPage";
import { MovieDetails } from "../pages/MovieDetails";

export function MyRoutes() {
  return (
    <>
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/movie/:movieId" element={<MovieDetails />} />
      <Route path='*' element={<h3> Page not found 404 </h3>}/>
    </Routes>
    <Link to={"/movies/"+ movie.id}>{MovieCard}</Link>
    </>
  );
}
