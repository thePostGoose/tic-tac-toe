import React from "react";
import MovesHistoryItem from "./MovesHistoryItem/MovesHistoryItem";
import Button from "../UI/Button/Button";
import classes from "./MovesHistory.module.scss";


const MovesHistory = ({onClick, stepNumber, history}) => {
  return (
    <div className={classes["moves-history"]}>
      <p className={classes['item-container']}>
        В начало <Button onClick={() => onClick(0)}>перейти</Button>
      </p>
      <ul>
        {history.slice(1).map((step, move) => {
          return (
            <MovesHistoryItem
              move={move}
              onClick={onClick}
              key={move}
              step={step}
              stepNumber={stepNumber}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default MovesHistory;
