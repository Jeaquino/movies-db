
import { useState, useEffect } from "react";

function FormCreate() {
  const [isLoading, setIsLoading] = useState(true);
  const [genres, setGenres] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    rating: "",
    awards: "",
    release_date: "",
    length: "",
    genre_id: "",
  });

  const inputOnChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const getGenres = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/genres");

      if (!response.ok) {
        console.log("Error en la respuesta de la API");
        return;
      }

      const genres = await response.json();
      console.log("Respuesta de la API:", genres);

      setGenres(genres.data);
      setIsLoading(false);
    } catch (error) {
      console.log("Error al realizar la solicitud:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/movies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        console.log("Error en la respuesta de la API");
        return;
      }

      const data = await response.json();
      console.log("Respuesta de la API:", data);
    } catch (error) {
      console.log("Error al realizar la solicitud:", error);
    }
  };

  useEffect(() => {
    getGenres();
  }, []);

  const Form = () => {
    return (
      <section>
        <h1>Crear Pelicula</h1>
        <form className="form-create" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Titulo</label>
            <input
              type="text"
              id="name"
              name="title"
              onChange={inputOnChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="rating">Rating</label>
            <input
              type="number"
              id="rating"
              name="rating"
              onChange={inputOnChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="awards">Premios</label>
            <input
              type="number"
              id="awards"
              name="awards"
              onChange={inputOnChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="release_date">Fecha de estreno</label>
            <input
              type="date"
              id="release_date"
              name="release_date"
              onChange={inputOnChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="length">Duración</label>
            <input
              type="number"
              id="length"
              name="length"
              onChange={inputOnChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="length">Genero</label>
            <select name="genre_id" id="genre_id" onChange={inputOnChange}>
              <option value="">Seleccione un genero</option>
              {genres.map((genre) => {
                return (
                  <option key={genre.id + genre.name} value={genre.id}>
                    {genre.name}
                  </option>
                );
              })}
            </select>
          </div>
          <button type="submit">Create</button>
        </form>
      </section>
    );
  };

  return <>{isLoading ? <h1>Loading...</h1> : <Form />}</>;
}

export default FormCreate;
