import React from "react";
import MovesHistory from "../../MovesHistory/MovesHistory";
import classes from "./GameInfo.module.scss";
import GameStatus from '../../GameStatus/GameStatus'

const GameInfo = (props) => {

  return (
    <div className={classes["game-info"]}>
      <GameStatus winner={props.winner} xIsNext={props.xIsNext}/>
      <MovesHistory history={props.history} onClick={props.onClick}/>
    </div>
  );
};

export default GameInfo;
