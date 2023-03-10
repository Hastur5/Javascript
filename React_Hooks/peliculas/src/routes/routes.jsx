import { Routes, Route, Link } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import { MovieDetails } from "../pages/MovieDetails";

export function MyRoutes() {
  return (
    <>
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/movies/:movieId" element={<MovieDetails />} />
      <Route path='*' element={<h3> Page not found 404 </h3>}/>
    </Routes>
    </>
  );
}
