
import { useState, useEffect } from "react";
import Form from "../../components/Form";
function MovieFormCreate() {
  const [isLoading, setIsLoading] = useState(true);
  const [genres, setGenres] = useState([]);
  const [erros, setErrors] = useState({});
  const inputs = [
    {
      type: "text",
      label: "Titulo",
      name: "title",
      value: ""
    },
    {
      type: "number",
      label: "Rating",
      name: "rating",
      value: ""
    },
    {
      type: "number",
      label: "Premios",
      name: "awards",
      value: ""
    },
    {
      type: "date",
      label: "Fecha de estreno",
      name: "release_date",
      value: ""
    },
    {
      type: "number",
      label: "Duración",
      name: "length",
      value: ""
    },
    {
      type: "select",
      label: "Genero",
      name: "genre_id",
      value: "",
      options: genres.map((genre) => {
        return {
          value: genre.id,
          label: genre.name,
        };
      }),
    }
  ]

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

      const formData = new FormData(e.target);

      const errors = [];

      // Title validation
      if (!formData.get("title") || formData.get("title").trim() === "") {
        errors.push({title: "El título es obligatorio."});
      }

      // Rating validation
      const rating = parseFloat(formData.get("rating"));
      if (isNaN(rating) || rating < 0 || rating > 10) {
        errors.push({rating : "El rating debe ser un número entre 0 y 10."});
      }

      // Awards validation
      const awards = parseInt(formData.get("awards"), 10);
      if (isNaN(awards) || awards < 0) {
        errors.push({awards : "Los premios deben ser un número mayor o igual a 0."});
      }

      // Release date validation
      if (!formData.get("release_date")) {
        errors.push({release_date : "La fecha de estreno es obligatoria."});
      }

      // Length validation
      const length = parseInt(formData.get("length"), 10);
      if (isNaN(length) || length <= 0) {
        errors.push({length : "La duración debe ser un número mayor a 0."});
      }

      // Genre validation
      if (!formData.get("genre_id")) {
        errors.push({genre_id : "El género es obligatorio."});
      }

      // Set errors if any
      if (errors.length > 0) {
        // setErrors(errors);
        const errorMessages = errors.map(error => {
          const key = Object.keys(error)[0];
          const value = error[key];
          return `${key}: ${value}`;
        }).join("\n");
        alert(errorMessages);
        return;
      }
      
      const movie = {}
      for (let [key, value] of formData.entries()) {
        console.log(key, value);        
        movie[key] = value;
      }

      const response = await fetch("http://localhost:3000/api/movies/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(movie),
      });

      if (!response.ok) {
        console.log("Error en la respuesta de la API");
        return;
      }

      const data = await response.json();
      console.log("Respuesta de la API:", data);
      alert("Película creada con éxito");
      window.location.href = "/Tables";
    } catch (error) {
      console.log("Error al realizar la solicitud:", error);
      alert(`error:${error}`);
    }
  };

  useEffect(() => {
    getGenres();
  }, []);

  return <>{isLoading ? <h1>Loading...</h1> : <Form inputs={inputs} handleSubmit={handleSubmit}/>}</>;
}

export default MovieFormCreate;
