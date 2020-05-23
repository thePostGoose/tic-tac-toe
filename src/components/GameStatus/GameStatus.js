import React from "react";
import classes from "./GameStatus.module.scss";

const GameStatus = ({winner, stepNumber, xIsNext}) => {
  let status;
  if (winner) {
    status = (
      <span className={classes.coor}>
        <span style={{ display: "flex" }}>
          Выиграл:
          <span className={classes["ch-container"]}>
            {winner.winnerChar}
          </span>
        </span>
      </span>
    );
  } else {
    if (stepNumber === 9) {
      status = (
        <span className={classes.coor}>
          <span style={{ display: "flex" }}>
            Ничья
          </span>
        </span>
      );
    } else {
      status = (
        <span>
          <span style={{ display: "flex" }}>
            Следующий ход:{" "}
            <span className={classes["ch-container"]}>
              {xIsNext ? "X" : "O"}
            </span>
          </span>
        </span>
      );
    }
  }
  return <div className={classes.container}>{status}</div>;
};

export default GameStatus;
