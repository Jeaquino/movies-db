import PropTypes from "prop-types";

function Count({value, setValue}) {
    return (
    <div>
      <button onClick={() => setValue(value + 1)}> Contador {value} </button>
    </div>
  )
}

export default Count

Count.propTypes = {
    value: PropTypes.number.isRequired,
    setValue: PropTypes.func.isRequired,
};