import React, { useState } from "react";
import "../app.css";

const SimpleHabit = (props) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setState(count + 1);
  };

  return (
    <li className="simple">
      <span>Reading</span>
      <span>{count}</span>
      <button onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;
