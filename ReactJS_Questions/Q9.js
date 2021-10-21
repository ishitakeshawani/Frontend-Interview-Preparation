// Create two objects with name, age, and power as Ram, 2500, Treta.

// Krishna, 2325, Dwapar. Say if every character in name is worth 35 power points.

// Write a function which takes two objects and return the person with more power based on their name and power both.

import { React, useState } from "react";

export default function Q9() {
  const [val, setval] = useState("");
  const obj1 = {
    name: "ram",
    power: 2500,
    yuga: "treta",
  };

  const obj2 = {
    name: "sita",
    power: 45,
    yuga: "dwapar",
  };

  const checkit = () => {
    var p1 = Number(obj1.name.length) * 35 + obj1.power;
    var p2 = Number(obj2.name.length) * 35 + obj2.power;
    if (p1 > p2) {
      setval(obj1.name);
    } else {
      setval(obj2.name);
    }
  };

  return (
    <div>
      <p>{val}</p>
      <button onClick={checkit}>check</button>
    </div>
  );
}
