import React from "react";
import MovesHistory from "../../MovesHistory/MovesHistory";
import classes from "./GameInfo.module.scss";
import GameStatus from "../../GameStatus/GameStatus";

const GameInfo = ({stepNumber, winner, xIsNext, history, onClick}) => {
  return (
    <div className={classes["game-info"]}>
      <GameStatus
        stepNumber={stepNumber}
        winner={winner}
        xIsNext={xIsNext}
      />
      <MovesHistory
        stepNumber={stepNumber}
        history={history}
        onClick={onClick}
      />
    </div>
  );
};

export default GameInfo;
