import "./styles.css";
import { React, useEffect, useState } from "react";

// Create a password checker web app. If password is lesser than 10 characters then show an error to user otherwise show success. Someone can ask to make the submit button disabled. Some can ask to make the input field green or red depending on input.
const Q11 = () => {
  const [password, setpassword] = useState("");
  const [show, setshow] = useState(true);
  const [value, setvalue] = useState(false);

  useEffect(() => {
    if (password.length > 10) {
      // setvalue(false);
      setshow(false);
    } else if (password.length < 10) {
      setshow(true);
      setvalue(false);
    }
  }, [password]);

  const checkit = () => {
    // setshow(false);
    setvalue(true);
  };

  return (
    <div className="App">
      <input type="password" onChange={(e) => setpassword(e.target.value)} />
      <br />
      <br />
      <button disabled={show} onClick={checkit}>
        submit
      </button>
      <p>{value ? password : " "}</p>
    </div>
  );
};

export default Q11;
