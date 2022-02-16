// Any signup form, password reset form has this functionality. Take two passwords from user. Show error only if both passwords don't match.

import "./styles.css";
import {useState,React} from 'react';

export default function App() {
  const [firstPassword,setFirstPassword] = useState("");
  const [secondPassword,setSecondPassword] = useState("");
  const [error,setError] = useState("");

  function handleSubmit (){
    if(firstPassword !== secondPassword){
      setError("password does not match!");
    }else{
      setError("");
    }
  }

  return <div className="App">
    <input onChange={(e)=>setFirstPassword(e.target.value)} /> <br/><br/>
    <input onChange={(e)=>setSecondPassword(e.target.value)} />
    <button onClick={handleSubmit}>submit</button>
    <p>{error}</p>
  </div>;

}
