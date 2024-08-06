import "./styles.css";
import TicTacToe from "./components/TicTacToe";
import { useState } from "react";

export default function App() {
  const [boardSize, setBoardSize] = useState(2);
  return (
    <div className="App">
      <TicTacToe boardSize={boardSize} />
    </div>
  );
}
