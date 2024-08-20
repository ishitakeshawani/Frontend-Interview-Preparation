import "./styles.css";
import Accordian from "./Accordian";
import { useState } from "react";

export default function App() {
  const [isopen, setIsOpen] = useState(false);
  const handleChange = () => setIsOpen((prevState) => !prevState);
  return (
    <div className="App">
      <Accordian label="click it" isopen={isopen} onChange={handleChange}>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </Accordian>
    </div>
  );
}
