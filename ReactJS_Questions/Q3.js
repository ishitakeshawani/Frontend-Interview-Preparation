// Create a web app where I can input a text. Now, create three buttons h1, h2, h3.
//  When I click on any of the button, the text should become h1, h2, or h3.

import React from "react";
import { useState } from "react";

const Q3 = () => {
  const [text, settext] = useState("");
  const [size, setsize] = useState();

  return (
    <div>
      <input type="text" onChange={(e) => settext(e.target.value)} />
      <p style={{ fontSize: size }}>{text}</p>
      <button onClick={() => setsize(32)}>h1</button>&nbsp;
      <button onClick={() => setsize(24)}>h2</button>&nbsp;
      <button onClick={() => setsize(18.72)}>h3</button>
    </div>
  );
};

export default Q3;
