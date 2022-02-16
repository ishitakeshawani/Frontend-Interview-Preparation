// Create a password reset form
// Put a button show password near the input element.
// Clicking should show password to the user.
// Text on show password should change to hide password when password is shown.
// Click on hide password and password goes back to hidden again.

import "./styles.css";
import { useState, React, useEffect } from "react";

export default function App() {
  const [type, setType] = useState(true);

  const showPassword = () => {
    setType(!type);
  };

  return (
    <div className="App">
      <input type={type ? "password" : "text"} />
      <button onClick={showPassword}>
        {type ? "show Password" : "hide Password"}
      </button>
    </div>
  );
}
