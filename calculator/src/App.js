import React, { useState } from "react";
import "./App.css";

const App = () => {
  // Using hook concept declare a new state variable, which we'll call "result"
  const [result, setResult] = useState("");

  const createValues = () => {
    const values = [];

    for (let i = 9; i > 0; i--) {
      values.push(
        <button name={i} onClick={handleclick} key={i}>
          {i}
        </button>
      );
    }
    return values;
  };

  const handleclick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const clear = () => {
    setResult("");
  };

  const backspace = () => {
    setResult(result.slice(0, result.length - 1));
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("Error");
    }
  };

  const power = () =>{
    setResult(eval(result*result).toString());
  }

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          <form>
            <input type="text" value={result} placeholder="0" />
          </form>
        </div>

        <div className="values">
          
          {createValues()}
          <button name="0" onClick={handleclick}>
            0
          </button>
          <button name="+" onClick={handleclick}>
            +
          </button>
          <button name="-" onClick={handleclick}>
            -
          </button>
          <button name="*" onClick={handleclick}>
            *
          </button>
          <button name="/" onClick={handleclick}>
            /
          </button>
          <button name="^" onClick={power}>
            ^
          </button>
          <button name="%" onClick={handleclick}>
            %
          </button>
          <button onClick={clear} id="clear">
            C
          </button>
          <button onClick={backspace} id="backspace">
            Del
          </button>
          <button name="." onClick={handleclick}>
            .
          </button>
          <button name="=" onClick={calculate} id={result}>
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
