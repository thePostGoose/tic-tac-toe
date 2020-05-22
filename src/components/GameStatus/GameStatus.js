import React from "react";
import classes from "./GameStatus.module.scss";

const GameStatus = (props) => {
  let status;
  if (props.winner) {
    status = (
      <span className={classes.coor}>
        <span style={{ display: "flex" }}>
          Выиграл:
          <span className={classes["ch-container"]}>{props.winner}</span>
        </span>
      </span>
    );
  } else {
    status = (
      <span>
        <span style={{ display: "flex" }}>
          Следующий ход:{" "}
          <span className={classes["ch-container"]}>
            {props.xIsNext ? "X" : "O"}
          </span>
        </span>
      </span>
    );
  }
  return <div className={classes.container}>{status}</div>;
};

export default GameStatus;
