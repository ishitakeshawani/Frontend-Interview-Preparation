import { React, useState } from "react";

export default function Q14() {
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
