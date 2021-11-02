//  Here is an API: [https://otpgenerator.ishanjirety.repl.co/get-otp?name=](https://otpgenerator.ishanjirety.repl.co/get-otp?name=)

// You will enter a name as input from your app and send this API a request with the name along with it (this will be the final URL :

//   [https://otpgenerator.ishanjirety.repl.co/get-otp?name=Nameentered](https://otpgenerator.ishanjirety.repl.co/get-otp?name=Nameentered)

//   ) on button click. In the response, you will get an OTP which should be shown on the screen.

//   Followup1: Make another input section that asks the user to guess the OTP and for checking whether the guess is equal to the actual one or not add a button "Validate" which on clicking shows the message "Success " or "Failure" depending.  The response is coming in the form of

//   ```
//   Name-OTP
//   ```

//   format so something like

//   ```
//   Pratyush-570928
//   ```

//   So compare the OTP value from the response as well as the input which is being entered

//   Followup2: Change the color of validating message to GREEN when success comes up and change it to RED if failure comes up on the click of Validate Button.

import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [name, setName] = useState("Enter your name here");
  const [text, setText] = useState("OTP will be here");
  const [otp, serOtp] = useState("");
  const [res, setRes] = useState("result will be here");
  const [colour, setColour] = useState("");
  const URL = `https://otpgenerator.ishanjirety.repl.co/get-otp?name=${name}`;
  const errorHandler = (e) => {
    setText(e.error);
  };
  const getOtp = () => {
    fetch(URL)
      .then((res) => res.json())
      .then((out) => {
        if (out.success === false) {
          throw out;
        }
        setText(out.otp);
      })
      .catch(errorHandler);
  };

  const validateOtp = () => {
    if (otp.toLocaleLowerCase === text.toLocaleLowerCase) {
      setRes("Sucess");
      setColour("green");
    } else {
      setRes("Failure :(");
      setColour("red");
    }
  };

  return (
    <div className="App">
      <input onChange={(e) => setName(e.target.value)} />
      <button onClick={() => getOtp()}>click</button>
      <p>{text}</p>
      <hr />
      <p>Guess the OTP</p>
      <input placeholder="Name-OTP" onChange={(e) => serOtp(e.target.value)} />
      <button onClick={() => validateOtp()}>validate</button>
      <p style={{ color: colour }}>{res}</p>
    </div>
  );
}
