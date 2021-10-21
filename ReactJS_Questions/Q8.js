// Create two objects with name, age, and yuga as Ram, 25, Treta.
// Krishna, 31, Dwapar. Write a function which takes two objects and return the person with more age.

import { React, useState } from "react";

export default function Q8() {
  const [person, setperson] = useState("");

  const obj1 = {
    name: "ram",
    age: 25,
    yuga: "treta",
  };

  const obj2 = {
    name: "sita",
    age: 45,
    yuga: "dwapar",
  };

  const check = () => {
    const v = obj1.age > obj2.age ? obj1.name : obj2.name;
    setperson(v);
  };

  return (
    <div>
      <p>{person}</p>
      <button onClick={check}>getname</button>
    </div>
  );
}
