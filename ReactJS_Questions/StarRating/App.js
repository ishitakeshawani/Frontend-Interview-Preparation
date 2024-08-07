import Star from "./component/Star";
import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const numberOfStars = 5;
  const [hover, setHover] = useState(0);
  const [rating, setRating] = useState(0);

  const hanldeMouseEnter = (idx) => {
    setHover(idx);
  };
  const hanldeMouseLeave = () => {
    setHover(0);
  };
  const handleclick = (idx) => {
    setRating(idx);
  };
  return (
    <div className="App">
      {Array(numberOfStars)
        .fill(null)
        .map((item, index) => (
          <Star
            key={index}
            index={index}
            filled={index + 1 <= (rating || hover)}
            hanldeMouseEnter={hanldeMouseEnter}
            handleclick={handleclick}
            hanldeMouseLeave={hanldeMouseLeave}
          />
        ))}
    </div>
  );
}
