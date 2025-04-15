import Table from "react-bootstrap/Table";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
function TableData({ data, title, urlCreate, urlEdit, urlDelete, urlDetail }) {
  return (
    <>
      <section>
        <div>
          <h1>{title}</h1>
          <div>
            <Link to={`${urlCreate}`}>
            <Button variant="success">Crear</Button>
            </Link>
          </div>
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
                  <Link to={`${urlDetail}/${movie.id}`}>
                    <Button variant="info">Info</Button>
                  </Link>
                  <Link to={`${urlEdit}/${movie.id}`}>
                    <Button variant="warning">Editar</Button>
                  </Link>
                  <Link to={`${urlDelete}/${movie.id}`}>
                    <Button variant="danger">Eliminar</Button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
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
