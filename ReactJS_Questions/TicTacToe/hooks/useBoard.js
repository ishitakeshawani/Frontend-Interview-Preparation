import React, { useState } from "react";

function createBoardArray(boardSize) {
  let newBoard = Array(boardSize)
    .fill(null)
    .map(() => Array(boardSize).fill(null));
  return newBoard;
}

export default function useBoard(boardSize) {
  let [board, setBoard] = useState(createBoardArray(boardSize));
  let [currentPlayer, setCurrentPlayer] = useState("X");

  const changePlayer = () => {
    let newValue = currentPlayer == "X" ? "0" : "X";
    setCurrentPlayer(newValue);
  };

  const checkWinner = (row, col) => {
    if (board[row].every((cell) => cell === currentPlayer)) return true;
    if (board.every((item) => item[col] === currentPlayer)) return true;
    if (
      row === col &&
      board.every((row, index) => row[index] === currentPlayer)
    )
      return true;

    if (
      row + col === boardSize - 1 &&
      board.every((row, index) => row[boardSize - 1 - index] === currentPlayer)
    )
      return true;

    if (board.every((item) => item.every((cell) => cell != null))) {
      alert("Its a draw");
      resetGame();
      changePlayer();
      return;
    }

    return null;
  };

  const handleClick = (row, col) => {
    let rowId = parseInt(row);
    let colId = parseInt(col);
    if (board[rowId][colId] || checkWinner(rowId, colId) == true) return;
    let newBoard = [...board];
    newBoard[rowId][colId] = currentPlayer;
    setBoard(newBoard);
    if (checkWinner(row, col)) {
      alert(`${currentPlayer} wins!`);
      resetGame();
      changePlayer();
      return;
    }
    changePlayer();
  };

  const resetGame = () => {
    setBoard(createBoardArray(boardSize));
  };

  return { board, handleClick };
}
