import { useState, useEffect } from "react";
import Cell from "./Cell";
import "./GameBoard.css";

const GameBoard = () => {
  const initialCells = ["", "", "", "", "", "", "", "", ""];
  const [cells, setCells] = useState(initialCells);
  const [go, setGo] = useState("circle");
  const [winningMessage, setWinningMessage] = useState(null);
  const [isDraw, setIsDraw] = useState(false); // Nuevo estado para empate


  const message = isDraw ? "It's a draw!" : `It is  ${go}'s turn.`; //Mensaje si sale empate


  console.log(cells);

  const checkScore = () => { //Posibilidades de jugadas
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
        setWinningMessage("Circle wins!"); //Gana Circulo
        return
      }
    });

    winningCombos.forEach((array) => {
      let crossWins = array.every((cell) => cells[cell] === "cross");

      if (crossWins) {
        setWinningMessage("Cross wins!");//Gana la Equis
        return
      }
    });

    const isBoardFull = cells.every((cell) => cell === "circle" || cell === "cross");

    if (isBoardFull && !winningMessage) {
      setIsDraw(true); // El juego termina en empate
    }

  };

  const resetGame = () => {
    setCells(initialCells); // Restablece las celdas
    setGo("circle"); // Restablece el turno
    setWinningMessage(null); // Borra el mensaje de ganador o empate
    setIsDraw(false); // Restablece el estado de empate
  };

  useEffect(() => {
    //CADA VEZ QUE EL ARRAY cells CAMBIE, CORRE LA FUNCION checkScore 
    checkScore();
  }, [cells]);


//Celdas del tablero \ Interacciones
  return ( 
    <>
      <div className="app">
        <h2>{winningMessage || message}</h2>
        <button className="reset-button" onClick={resetGame}>
          Reset Game
        </button>
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
