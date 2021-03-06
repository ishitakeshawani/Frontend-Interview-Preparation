// Create a web app where I can input a text. Now create two buttons + and -.
//  On clicking + increase the fontSize by 2px and vice versa

import React from "react";
import { useState } from "react";

const Q2 = () => {
  const [text, settext] = useState("");
  const [size, setsize] = useState(14);
  return (
    <div>
      <input type="text" onChange={(e) => settext(e.target.value)} />
      <p style={{ fontSize: size }}>{text}</p>
      <br />
      <button onClick={() => setsize(Number(size) + 2)}>+</button>&nbsp;
      <button onClick={() => setsize(Number(size) - 2)}>-</button>
    </div>
  );
};

export default Q2;
