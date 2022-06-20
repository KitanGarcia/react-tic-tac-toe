import { useState } from "react";
import Cell from "./Cell";

function Board() {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [xCurrent, setXCurrent] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null);

  const selectCell = (index) => {
    if (board[index]) {
      return;
    }

    const boardCopy = [...board];
    boardCopy[index] = xCurrent ? "X" : "O";

    xCurrent ? console.log("X") : console.log("O");

    setBoard(boardCopy);
    setXCurrent(!xCurrent);
  };

  const checkVictory = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  return (
    <div>
      <h1>
        {gameOver
          ? `Game Over: ${winner} wins`
          : xCurrent
          ? "X's turn"
          : "O's turn"}
      </h1>
      <div className="Board">
        <div className="row">
          <Cell value={board[0]} handleClick={() => selectCell(0)} />
          <Cell value={board[1]} handleClick={() => selectCell(1)} />
          <Cell value={board[2]} handleClick={() => selectCell(2)} />
        </div>
        <div className="row">
          <Cell value={board[3]} handleClick={() => selectCell(3)} />
          <Cell value={board[4]} handleClick={() => selectCell(4)} />
          <Cell value={board[5]} handleClick={() => selectCell(5)} />
        </div>
        <div className="row">
          <Cell value={board[6]} handleClick={() => selectCell(6)} />
          <Cell value={board[7]} handleClick={() => selectCell(7)} />
          <Cell value={board[8]} handleClick={() => selectCell(8)} />
        </div>
      </div>
    </div>
  );
}

export default Board;
