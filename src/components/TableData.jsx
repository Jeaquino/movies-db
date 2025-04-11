import Table from "react-bootstrap/Table";
import PropTypes from "prop-types";

function TableData({data}) {
    return (
      <Table responsive>
      <thead>
        <tr>
          {Array.from(Object.keys(data[0])).map((prop, index) => (
            <th key={index}>{prop}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((movie, index) => (
          <tr key={index}>
            {Array.from(Object.keys(movie)).map((element, index) => (
              <td key={index+element}>{movie[element]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
    )
  }

TableData.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TableData;

