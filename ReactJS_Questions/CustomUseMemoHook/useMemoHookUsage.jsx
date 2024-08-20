import React, { useMemo, useState } from "react";
import CustomUseMemoHook from "./CustomUseMemoHook";

const UseMemoHookUsage = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(100);
  const square = () => {
    console.log("printing square");
    return counter * counter;
  };
  const memoizedValue = CustomUseMemoHook(square, [counter]);
  return (
    <div>
      <h3>Counter 1: {counter}</h3>
      <button onClick={() => setCounter((c) => c + 1)}>Add</button>
      <h3>Squared Counter: {memoizedValue}</h3>
      <h3>Counter 2: {counter2}</h3>
      <button onClick={() => setCounter2((c) => c - 1)}>Subtract</button>
    </div>
  );
};

export default UseMemoHookUsage;
