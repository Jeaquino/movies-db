import BoxGenre from "./BoxGenre";
import { useState, useEffect } from "react";
const GenresInDb = () => {

  const [genres, setGenres] = useState([]);

  const getGenres = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/genres", { headers: { cors: "no-cors" } });

      if (!response.ok) {
        console.log("Error en la respuesta de la API");
        return;
      }

      const genres = await response.json();
      console.log("Respuesta de la API:", genres.data);

      setGenres(genres.data);
    } catch (error) {
      console.log("Error al realizar la solicitud:", error);
    }
  };

  useEffect(() => {
    getGenres(genres);
  },[])

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Genres in Data Base
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            {genres.map((elemento, i) => (
              <BoxGenre key={i + elemento.name} name={elemento.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenresInDb;
