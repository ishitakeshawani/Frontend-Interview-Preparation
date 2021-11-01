// Create an Input Element, which shows a display message according to the Input text with the click of a button. If you type - 
// "Tanvi" - then show, "She is the best CEO ever!"
// "Tanay" - then show, "He is our FUNNY mentor!"
// "Swapnil" - then show, "He helps us CONQUER jobs!"
// "Akanksha" - then show, "She is our CHEERFUL Interviewer!"



import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [takeInput, setTakeInput] = useState("");
  const [output, setOutput] = useState("output will be here..");
  const checkInput = () => {
    if (takeInput === "Tanvi") {
      setOutput("She is the best CEO ever!");
    } else if (takeInput === "Tanay") {
      setOutput("He is our FaUNNY mentor");
    } else if (takeInput === "Akansha") {
      setOutput("She is our CHEERFUL Interviewer!");
    } else if (takeInput === "Swapnil") {
      setOutput("He help us CONQUER jobs!");
    }
  };

  return (
    <div className="App">
      <input onChange={(e) => setTakeInput(e.target.value)} />
      <button onClick={checkInput}>click</button>
      <p>{output}</p>
    </div>
  );
}
