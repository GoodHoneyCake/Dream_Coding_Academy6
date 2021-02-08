import React, { useCallback, useEffect, useRef, useState } from "react";
import "../app.css";

const SimpleHabit = (props) => {
  const [count, setCount] = useState(0);
  const spanRef = useRef();

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  });

  useEffect(() => {
    console.log(`mounted & updated: ${count}`);
  });

  return (
    <li className="simple">
      <span ref={spanRef}>Reading</span>
      <span>{count}</span>
      <button onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;
