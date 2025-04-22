

import { useState } from 'react'
import Input from './Input';
function Form({ inputs, handleSubmit }) {

    const movie = {}

    inputs.forEach(e => {
        movie[e.name] = e.value
    }

    )

    const [formData, setFormData] = useState({ ...movie });



    {/* estructura de Movie:
        {
            title: "",
            release_date: "",
            length: "",
            awards:"",
            rating: "",
            genre_id: "",
        }
    */}

    const { title, rating, awards, release_date, length, genre_id } = formData;

    const inputOnChange = ({ target }) => {
        setFormData({
            ...formData,
            [target.name]: target.value,
        });
    };

    return (
        <section>
            <h1>Crear Pelicula</h1>
            <form className="form-create" onSubmit={handleSubmit}>
                {inputs.map((input) => {
                    return (
                        <Input
                            key={input.name}
                            type={input.type}
                            label={input.label}
                            name={input.name}
                            value={formData[input.name]}
                            options={input.options}
                            onChange={inputOnChange}
                        />
                    );
                })
                }
                <button type="submit">Create</button>
            </form>
        </section>
    );
}

export default Form