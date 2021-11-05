//cash register in react.js
//You should build a cash register manager in VanillaJS or React.
// Your app should have currencies of Rs. 1, 5, 10, 20, 100, 500, 2000.
// Have an input field for the user aka cashier to enter a bill amount.
// Have an input field for the user aka cashier to enter the cash given by the customer.
// The app should tell the cashier/user the amount to be returned in change to the customer with the minimum number of notes.
import "./styles.css";
import React, { useState } from "react";
import TakeInput from "./TakeInput";

export default function App() {
  const [billAmount, setBillAmount] = useState(0);
  const [show, setShow] = useState(false);
  const [err, setErr] = useState("");

  const checkbillamount = () => {
    if (billAmount === undefined || billAmount === "") {
      setErr("enter valid amount");
      setShow(false);
    } else {
      setShow(true);
    }
  };

  return (
    <div className="App">
      bill amount
      <input type="number" onChange={(e) => setBillAmount(e.target.value)} />
      <button onClick={checkbillamount}>next</button>
      <br />
      {show ? <TakeInput billAmount={billAmount} /> : <p>{err}</p>}
    </div>
  );
}
