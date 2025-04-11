import { useState, useEffect } from "react";
import TableData from "../components/TableData";

const TableMovies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getMovies = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/movies");

      if (!response.ok) {
        console.log("Error en la respuesta de la API");
        return;
      }

      const movies = await response.json();
      console.log("Respuesta de la API:", movies);

      setMovies(movies.data);
      setIsLoading(false);
    } catch (error) {
      console.log("Error al realizar la solicitud:", error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return <>{isLoading ? <h1>Loading...</h1> : <TableData data={movies} />}</>;
};

export default TableMovies;
