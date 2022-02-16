// Add a submit button to password change field.
// Disable submit button if passwords don't match
// Clicking on submit should console the password field

import "./styles.css";
import { useState, React, useEffect } from "react";

export default function App() {
  const [firstPassword, setFirstPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (firstPassword !== secondPassword) {
      setError(true);
    } else {
      setError(false);
    }
  }, [firstPassword, secondPassword]);

  function handleSubmit() {}

  return (
    <div className="App">
      <input onChange={(e) => setFirstPassword(e.target.value)} /> <br />
      <br />
      <input onChange={(e) => setSecondPassword(e.target.value)} />
      <button onClick={handleSubmit} disabled={error}>
        submit
      </button>
      <p>{error}</p>
    </div>
  );
}
