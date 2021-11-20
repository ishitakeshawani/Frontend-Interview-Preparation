import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

// timer using useRef

export default function App() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef();

  useEffect(()=>{
    intervalRef.current = setInterval(() => {
      setTimer(prevTimer => prevTimer+1);
    },1000);
    return(){
    clearInterval(intervalRef.current)
  },[])

  return (
    <div className="App">
      Hook Timer - {timer}
      <button onClick={()=> clearInterval(intervalRef.current)}>Clear Hook Timer</button>
    </div>
  );
}
