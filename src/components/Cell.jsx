import React from "react";
import "./GameBoard.css";

const Cell = ({ id, cell, setCells, go, setGo, cells, winningMessage }) => {
  /* cada vez que se haga click para cambiar el array del useState */
  const handleClick = (e) => {
    const taken = //Revisar si donde estamos haciendo click contiene un child element que tiene un className(si tiene una X o O)
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
