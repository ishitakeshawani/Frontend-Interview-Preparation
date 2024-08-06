import React, { useState } from "react";
import useBoard from "../hooks/useBoard";

export default function TicTacToe({ boardSize }) {
  const { board, handleClick } = useBoard(boardSize);
  return (
    <div className="game">
      <div
        className="board"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${boardSize},1fr)`,
        }}
      >
        {board.map((cell, index) =>
          cell.map((item, idx) => (
            <div
              className="cell"
              key={idx}
              onClick={() => handleClick(index, idx)}
            >
              {item}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
