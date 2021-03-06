// Play with API and get the desired response

import "./styles.css";
import React, { useState } from "react";

export default function Q10() {
  const [v, setv] = useState("write here");
  const url = "https://api.publicapis.org/entries";
  const fetchApi = () => {
    fetch(url)
      .then((res) => res.json())
      .then((p) => setv(p.count));
  };
  return (
    <div className="App">
      <p>{v}</p>
      <button onClick={fetchApi}>fetch</button>
    </div>
  );
}
