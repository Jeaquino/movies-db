import { useState, useEffect } from "react";
import TableData from "../components/TableData";

const TableMovies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const getMovies = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/movies?association=si");

      if (!response.ok) {
        console.log("Error en la respuesta de la API");
        return;
      }

      const movies = await response.json();
      console.log("Respuesta de la API:", movies);

      movies.data.forEach((movie) => {
        movie.genres && movie.genres.name ? movie.genero = movie.genres.name : movie.genero = "Sin genero";
        delete movie.genres;
        delete movie.actors_in_movie;
        delete movie.genre_id;
      });

      console.log("Array modificado: ",movies.data);
      
    
      setMovies(movies.data);
      setIsLoading(false);
    } catch (error) {
      console.log("Error al realizar la solicitud:", error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return <>{isLoading ? <h1>Loading...</h1> 
    : <TableData 
        data={movies} 
        title={"Tabla de Peliculas"}
        urlCreate="CreateMovie" 
        urlEdit="EditMovie" 
        urlDelete="http://localhost:3000/api/movies/deleteMovie" 
        urlDetail="DetailMovie"
        />

        }
        </>;
};

export default TableMovies;
