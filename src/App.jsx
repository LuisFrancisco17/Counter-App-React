import React, { useState } from "react";
import "./App.css";

export const App = ({ value }) => {
  const [count, setCounter] = useState(value);

  const increment = () => {
    setCounter(count + 1);
  };

  const decrement = () => {
    setCounter(count - 1);
  };

  const reset = () => {
    setCounter(value);
  };

  const color = count === 0 ? "yellow" : count >= 1 ? "green" : "red";

  return (
    <>
      <h1> CONTADOR APP </h1>
      <h2 style={{ color }}>{count}</h2>
      <div>
        <button className="button1" onClick={increment}>
          Increment
        </button>
        <button className="button2" onClick={decrement}>
          Decrement
        </button>
        <button className="button3" onClick={reset}>
          Resetear
        </button>
      </div>
    </>
  );
};
