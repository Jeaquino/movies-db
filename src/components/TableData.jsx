import Table from "react-bootstrap/Table";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "../assets/css/TableData.css";

function TableData({ data, title, urlCreate, urlEdit, urlDelete, urlDetail }) {
  
  const modelDelete = async (e, id) => {  
   try{
    
    const success = confirm("¿Estás seguro de que deseas eliminar esta película ?");
    if (!success) {
      console.log("Eliminación cancelada");
      return; 
    }
    console.log("Eliminando película con ID:", id);
        
    const response = await fetch(`${urlDelete}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
    console.log("Error en la respuesta de la API");
      return;
    }
    
    const data = await response.json();
    console.log("Respuesta de la API:", data);
    window.location.reload();
    
   }catch (error) {
    console.log(error);
   } 
    
  };
  return (
    <>
      <section>
        <div className="table-div-title">
          <h1>{title}</h1>
        </div>
        <div className="table-div-create-button">
          <Link to={`${urlCreate}`}>
            <Button variant="success">Crear</Button>
          </Link>
        </div>
        <Table responsive>
          <thead>
            <tr>
              {Array.from(Object.keys(data[0])).map((prop, index) => (
                <th key={index}>{prop}</th>
              ))}
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {data.map((movie, index) => (
              <tr key={index}>
                {Array.from(Object.keys(movie)).map((element, index) => (
                  <td key={index + element}>{movie[element]}</td>
                ))}
                <td>
                  <div className="d-flex justify-content-between align-items-center margin-left 1rem">
                    <Link to={`${urlDetail}/${movie.id}`}>
                      <Button variant="info"><i className="fa-solid fa-circle-info"></i></Button>
                    </Link>
                    <Link to={`${urlEdit}/${movie.id}`}>
                      <Button variant="warning"><i className="fa-solid fa-pen-to-square"></i></Button>
                    </Link>
                    <Button variant="danger" onClick={(e) => modelDelete(e,movie.id)}><i className="fa-solid fa-trash"></i></Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        {}
      </section>
    </>
  );
}

TableData.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
  urlCreate: PropTypes.string.isRequired,
  urlEdit: PropTypes.string.isRequired,
  urlDelete: PropTypes.string.isRequired,
  urlDetail: PropTypes.string.isRequired,
};

export default TableData;
