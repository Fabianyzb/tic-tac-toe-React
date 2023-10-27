import React from "react";
import "./GameBoard.css";

const Cell = ({ id, cell, setCells, go, setGo, cells, winningMessage }) => {
  /* evento onCLick para cambiar el array del useState */
  const handleClick = (e) => {
    const taken =
      e.target.firstChild.classList.contains("circle") ||
      e.target.firstChild.classList.contains("cross");

    if (!taken) {
      if (go === "circle") {
        e.target.firstChild.classList.add("circle");
        handleCellChange("circle");
        setGo("cross");
      }
      if (go === "cross") {
        e.target.firstChild.classList.add("cross");
        handleCellChange("cross");
        setGo("circle");
      }
    }
  };

  const handleCellChange = (className) => {
    const nextCells = cells.map((cell, index) => {
      /* SE  RECORRE EL ARRAY Y SI CADA INDEX ES IGUAL AL ID EN EL QUE ESTAMOS, ENTONCES SE REEMPLAZARA "CELL",  */
      if (index === id) {
        /* EL CUAL ES UN STRING VACIO, CON EL CLASSNAME DE "CROSS" O "CIRCLE" */
        return className;
      } else {
        return cell;
      }
    });
    setCells(nextCells);
  };

  return (
    <div className="square" id={id} onClick={!winningMessage && handleClick}>
      <div className={cell}></div>
    </div>
  );
};

export default Cell;
