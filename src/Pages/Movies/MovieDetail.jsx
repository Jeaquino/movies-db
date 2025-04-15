import {useParams} from 'react-router-dom'
import { useState, useEffect } from "react";

function MovieDetail() {
    const { id } = useParams()
    const [movie, setMovie] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const getMovie = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/movies/detail/${id}`)

            if (!response.ok) {
                console.log("Error en la respuesta de la API")
                return
            }

            const movie = await response.json()
            console.log("Respuesta de la API:", movie)

            setMovie(movie.data)
            setIsLoading(false)

        } catch (error) {
            console.log("Error al realizar la solicitud:", error)
        }
    }

    useEffect(() => {
        getMovie()
    }, [])

    const Articulo = () => {
        return (
            <article>
                <h1>{movie.title}</h1>

                <div>
                    <h2>Staff:</h2>
                    <ul>
                        {movie.actors_in_movie.map((actor) => {
                            return (
                                <li key={actor.id}>
                                    {actor.first_name} {actor.last_name}
                                </li>
                            )
                        })}
                    </ul>
                </div>

                <p>Genero: {movie.genres ? movie.genres.name : "Sin genero"}</p>
                <p> {`Duración: ${movie.length ? movie.length + " min" : "Sin informar"}`}</p> 
                <p>Rating: {movie.rating}</p>
                <p>Premios: {movie.awards}</p>
                <p>Fecha de estreno: {movie.release_date.slice(0,10)}</p>
            </article>
        )
    }
  return (
    <>
        {isLoading ? <h1>Loading...</h1> : <Articulo/>}
    </>
  )
}

export default MovieDetail
