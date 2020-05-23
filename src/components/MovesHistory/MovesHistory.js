import React from "react";
import MovesHistoryItem from "./MovesHistoryItem/MovesHistoryItem";
import Button from "../UI/Button/Button";
import classes from "./MovesHistory.module.scss";


const MovesHistory = (props) => {
  return (
    <div className={classes["moves-history"]}>
      <p className={classes['item-container']}>
        В начало <Button onClick={() => props.onClick(0)}>перейти</Button>
      </p>
      <ul>
        {props.history.slice(1).map((step, move) => {
          return (
            <MovesHistoryItem
              move={move}
              onClick={props.onClick}
              key={move}
              step={step}
              stepNumber={props.stepNumber}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default MovesHistory;
