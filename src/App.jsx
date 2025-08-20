import React, { useState } from "react";

const App = () => {
  const [number, setNumber] = useState(0);
  const [values, setValues] = useState("");
  const minus = () => {
    if (number <= 0) return;
    setNumber(number - 1);
  };
  const plus = () => {
    setNumber(number + 1);
  };
  const reset = () => {
    setNumber(0);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Stop form reload
    const temp = parseInt(values);
    if (!isNaN(temp)) {
      setNumber(temp + number);
      setValues("");
    } else {
      alert(" please enter valid number ");
    }
  };

  return (
    <>
      <div>
        <div className="flex items-center space-x-5 text-6xl text-center">
          <button onClick={minus}>-</button>
          <h1>{number}</h1>
          <button onClick={plus}>+</button>
          <button onClick={reset}>Reset</button>
        </div>
        <form onSubmit={handleSubmit}>
          <h1>If you want to add custom number, please type below </h1>
          <input
            type="number"
            placeholder="Type any number: "
            value={values}
            onChange={(e) => setValues(e.target.value)}
          />
          <button disabled={!values}>Add</button>
        </form>
      </div>
    </>
  );
};

export default App;
