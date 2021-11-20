import React, { useEffect, useRef } from "react";
import "./styles.css";

//keep input in focus using useRef

export default function App() {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div className="App">
      <input ref={inputRef} type="text" />
    </div>
  );
}
