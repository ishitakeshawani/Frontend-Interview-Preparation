// See the Twitter post component. It gives you an indicator of the character count. Replicate that behavior.

import { useState, React, useEffect } from "react";

export default function App() {
  const [len, setlen] = useState("");
  const [lv, setlv] = useState(0);
  const [cont, setcont] = useState(10);
  const [prelv, setprelv] = useState(0);

  function change(e) {
    setlen(e.target.value);
    setprelv(lv);
  }

  useEffect(() => {
    setlv(len.length);
    if (lv >= 10 && lv < prelv) {
      setcont((prev) => prev + 1);
    } else if (lv > 10 && lv > prelv) {
      setcont((prev) => prev - 1);
    }
  }, [lv, len]);

  return (
    <div className="App">
      <input value={len} onChange={change} />
      <p>length of input is = {lv}</p>
      {lv > 10 ? <p>{cont}</p> : " "}
      <p> prev value of len is {prelv} there</p>
    </div>
  );
}
