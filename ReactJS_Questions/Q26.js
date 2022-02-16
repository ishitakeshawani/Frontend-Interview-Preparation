// Password should contain a number. Show error if user misses character.

import "./styles.css";
import { useState, React } from "react";

export default function App() {
  const [firstPassword, setFirstPassword] = useState("");

  const [error, setError] = useState("");

  function handleSubmit() {
    if (!/\d/.test(firstPassword)) {
      setError("password should contain number!");
    } else {
      setError("");
    }
  }

  return (
    <div className="App">
      <input onChange={(e) => setFirstPassword(e.target.value)} /> <br />
      <br />
      <button onClick={handleSubmit}>submit</button>
      <p>{error}</p>
    </div>
  );
}
