import { useState, useEffect } from "react";
import Cell from "./Cell";
import "./GameBoard.css";

const GameBoard = () => {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("circle");
  const [winningMessage, setWinningMessage] = useState(null);
  const [isDraw, setIsDraw] = useState(false); // Nuevo estado para empate


  const message = isDraw ? "It's a draw!" : `It is  ${go}'s turn.`;


  console.log(cells);

  const checkScore = () => {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    winningCombos.forEach((array) => {
      let circleWins = array.every((cell) => cells[cell] === "circle");

      if (circleWins) {
        setWinningMessage("Circle wins!");
        return
      }
    });

    winningCombos.forEach((array) => {
      let crossWins = array.every((cell) => cells[cell] === "cross");

      if (crossWins) {
        setWinningMessage("Cross wins!");
        return
      }
    });

    const isBoardFull = cells.every((cell) => cell === "circle" || cell === "cross");

    if (isBoardFull && !winningMessage) {
      setIsDraw(true); // El juego termina en empate
    }

  };

  useEffect(() => {
    /* CADA VEZ QUE EL ARRAY cells CAMBIE, CORRE LA FUNCION checkScore */
    checkScore();
  }, [cells]);



  return (
    <>
      <div className="app">
        <h2>{winningMessage || message}</h2>
        <div className="gameboard">
          {cells.map((cell, index) => (
            <Cell
              key={index}
              id={index}
              cell={cell}
              setCells={setCells}
              go={go}
              setGo={setGo}
              cells={cells}
              winningMessage={winningMessage}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default GameBoard;

{
  /* <div className="gameboard">
<p></p>
<Tablero />
</div> */
}
