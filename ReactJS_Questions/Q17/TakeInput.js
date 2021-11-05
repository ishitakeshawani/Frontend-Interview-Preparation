import React, { useState } from "react";

const TakeInput = (props) => {
  const [cashGiven, setCashGiven] = useState(0);
  const [res, setres] = useState(false);
  const [er, setEr] = useState("");
  const notes = [2000, 500, 100, 20, 10, 5, 1];
  const [ans, setans] = useState([]);

  const calc = (amt) => {
    let note = Array(7).fill(0);

    for (let i = 0; i < notes.length; i++) {
      note[i] = Math.trunc(amt / notes[i]);
      amt = amt % notes[i];
    }
    console.log(note);
    setans(note);
  };

  const checkcash = () => {
    if (cashGiven === undefined || cashGiven === "") {
      setEr("enter enough money");
      setres(false);
    } else if (Number(cashGiven) === Number(props.billAmount)) {
      setEr("No amount should be returned");
      setres(false);
    } else if (Number(cashGiven) < Number(props.billAmount)) {
      setEr("Cash is less than bill, please enter right amount");
      setres(false);
    } else if (Number(cashGiven) > Number(props.billAmount)) {
      setres(true);
      setEr("");
      const amt = Number(cashGiven) - Number(props.billAmount);
      calc(amt);
    } else {
      setres(true);
    }
  };

  return (
    <div>
      <input type="number" onChange={(e) => setCashGiven(e.target.value)} />
      <button onClick={checkcash}>check</button>
      {res ? (
        <ul>
          <li>{ans[0]}</li>
          <li>{ans[1]}</li>
          <li>{ans[2]}</li>
          <li>{ans[3]}</li>
          <li>{ans[4]}</li>
          <li>{ans[5]}</li>
          <li>{ans[6]}</li>
        </ul>
      ) : (
        er
      )}
    </div>
  );
};

export default TakeInput;
