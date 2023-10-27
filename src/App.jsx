import { useState } from "react";
import GameBoard from "./components/GameBoard";
import "./App.css";

const App = () => {
  const [playerOneName, setPlayerOneName] = useState("");
  const [playerTwoName, setPlayerTwoName] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);

  const handleStartGame = () => {
    if (playerOneName && playerTwoName && selectedOption) {
      setGameStarted(true);
    }
  };

  return (
    <>
      <div className="container-fluid" id="contenedor">
        <h1>Tic Tac Toe in React.js</h1>
        {gameStarted ? (
          <div>
            <GameBoard />
          </div>
        ) : (
          <div className="container">
            <h2>CHOOSE YOUR WEAPON</h2>
            <div>
              <input
                className="playerOne"
                type="text"
                placeholder="Player 1 username"
                value={playerOneName}
                onChange={(e) => setPlayerOneName(e.target.value)}
              />
              <input
                className="playerTwo"
                type="text"
                placeholder="Player 2 username"
                value={playerTwoName}
                onChange={(e) => setPlayerTwoName(e.target.value)}
              />
            </div>
            <div>
              <button
                className="square-button"
                id="x"
                onClick={() => {
                  setSelectedOption("X");
                  handleStartGame();
                }}
              >
                X
              </button>
              <button
                className="square-button"
                id="o"
                onClick={() => {
                  setSelectedOption("O");
                  handleStartGame();
                }}
              >
                O
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default App;