
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-center">
        <button className="btn btn-primary me-2" onClick={handleDecrement}>
          -
        </button>
        <h3>{count}</h3>
        <button className="btn btn-primary ms-2" onClick={handleIncrement}>
          +
        </button>
      </div>
      <div className="d-flex justify-content-center mt-3">
        <button className="btn btn-danger" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
