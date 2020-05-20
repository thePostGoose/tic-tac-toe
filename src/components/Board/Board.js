import React from "react";
import classes from "./Board.module.scss";
import Square from "../Square/Square";

function renderSquare(i, props) {
  return (
    <Square
      value={props.squares[i]}
      onClick={() => props.onClick(i)}
      disabled={props.disabled}
    />
  );
}

const Board = (props) => {
  return (
    <div>
      <div className={classes["board-row"]}>
        {renderSquare(0, props)}
        {renderSquare(1, props)}
        {renderSquare(2, props)}
      </div>
      <div className={classes["board-row"]}>
        {renderSquare(3, props)}
        {renderSquare(4, props)}
        {renderSquare(5, props)}
      </div>
      <div className={classes["board-row"]}>
        {renderSquare(6, props)}
        {renderSquare(7, props)}
        {renderSquare(8, props)}
      </div>
    </div>
  );
};
export default Board;
