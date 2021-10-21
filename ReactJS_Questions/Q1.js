// Create a web app which would take two inputs. It would also have 4 buttons: +, -, x /. Based on the button clicked perform the operation on the two inputs.
// You can do this in React or vanillaJS based on your choice. Your time starts now.

import React from "react";
import { useState } from "react";

const Q1 = () => {
  const [val1, setval1] = useState("");
  const [val2, setval2] = useState("");
  const [output, setoutput] = useState("");

  return (
    <div>
      <p>Enter first value</p>
      <input type="text" onChange={(e) => setval1(e.target.value)} />
      <p>Enter second value</p>
      <input type="text" onChange={(e) => setval2(e.target.value)} />
      <br /> <br />
      <button onClick={() => setoutput(Number(val1) + Number(val2))}>+</button>
      &nbsp;
      <button onClick={() => setoutput(Number(val1) - Number(val2))}>-</button>
      &nbsp;
      <button onClick={() => setoutput(Number(val1) * Number(val2))}>*</button>
      &nbsp;
      <button onClick={() => setoutput(Number(val1) / Number(val2))}>/</button>
      <br />
      <br />
      <p>{output}</p>
    </div>
  );
};

export default Q1;
