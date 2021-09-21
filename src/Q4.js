import React from "react";
import { useState } from "react";

const Q4 = () =>{
    const [text,settext] = useState("");
    const [color,setcolor] = useState("cyan");

    return (
        <div>
            <input type="text" onChange={(e) => settext(e.target.value)}/>
            <p style={{color : color}}>{text}</p>
            <button onClick={() => setcolor("red")}>red</button> &nbsp;
            <button onClick={() => setcolor("green")}>green</button>&nbsp;
            <button onClick={() => setcolor("blue")}>blue</button>
        </div>
    );
}

export default Q4;