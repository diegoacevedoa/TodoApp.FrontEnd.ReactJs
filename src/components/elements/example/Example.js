import React, { useState } from "react";
import PropTypes from "prop-types";

const Example = ({ nombre, lenguaje, value }) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    setCounter(counter + 1);
    // setCounter((c) => c + 1);
  };

  const handleReset = () => {
    setCounter(value);
  };

  const handleSubtract = () => {
    setCounter(counter - 1);
    // setCounter((c) => c + 1);
  };

  return (
    <>
      <h1>Hola planeta {nombre}.</h1>
      <p>Mi primera aplicación {lenguaje}.</p>
      <h2>{counter}</h2>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleSubtract}>-1</button>
    </>
  );
};

Example.propTypes = {
  nombre: PropTypes.string.isRequired,
  lenguaje: PropTypes.string,
  value: PropTypes.number.isRequired,
};

Example.defaultProps = {
  lenguaje: "",
};

export default Example;
