import React,{ useState } from 'react'

export default function Counter() {
  const [v,setv] = useState(0);
  return (
    <div className="App">
     <h1>{v}</h1>
      <button onClick={() => setv(prevState => (prevState+1))}>+</button>
      <button onClick={() => setv(prevState => (prevState-1))}>-</button>      
    </div>
  );
}
