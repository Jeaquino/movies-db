import React from 'react'

function Input({ type, label, name, value, options = null, onChange }) {
    console.log("options:",options);
    
    return (
        <>
            {type == "select" ? (
                <div className="form-group">
                    <label htmlFor="length">{label}</label>
                    <select name={name} id={name} onChange={onChange} value={value}>
                        <option value="">Seleccione un genero</option>
                        {options.map((option) => {
                            return (
                                <option key={option.value + option.label} value={option.value}>
                                    {option.label}
                                </option>
                            );
                        })}
                    </select>
                </div>
            ) : (
                <div className="form-group">
                    <label htmlFor="length">{label}</label>
                    <input
                        type={type}
                        id={name}
                        name={name}
                        onChange={onChange}
                        value={value}
                    />
                </div>
            )}
        </>
    )
}

export default Input