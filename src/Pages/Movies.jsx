import { Routes, Route } from "react-router-dom";
import TableMovies from "../components/TableMovies";
import DetailMovie from "../components/DetailMovie";

function Movies() {
  return (
    <>
      <section>
        <div>
          <h1>Movies</h1>
        </div>
        <Routes>
          <Route path="/" element={<TableMovies />} />
          <Route path="/Tables/movies/detail/:id" element={<DetailMovie />} />
        </Routes>
      </section>
    </>
  );
}

export default Movies;
