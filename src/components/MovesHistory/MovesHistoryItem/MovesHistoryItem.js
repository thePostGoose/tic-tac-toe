import React from "react";
import Button from "../../UI/Button/Button";
import classes from "./MovesHistoryItem.module.scss";

const MovesHistoryItem = ({move, step, stepNumber, onClick}) => {
  ++move;
  const current = step.currentPos;
  let cls = [classes["item-container"]];
  if (move === stepNumber) cls.push(classes["active"]);
  else cls.push(classes["non-active"]);

  const coor = `[${Math.floor(current / 3) + 1}, ${(current % 3) + 1}]`;
  const currentValue = move % 2 ? "X" : "O";
  return (
    <li className={cls.join(" ")}>
      <span>
        <span>{`Ход ${move}:`}</span>
        <span className={classes["coors-wrapper"]}>
          <span
            style={{
              textAlign: "center",
              display: "inline-block",
              width: "1.5em",
            }}
            className={classes["coors-colorizer"]}
          >{currentValue}</span>
          <span>в</span>
          <span className={classes["coors-colorizer"]}> {coor}</span>
        </span>
      </span>
      <Button onClick={() => onClick(move)}>перейти</Button>
    </li>
  );
};

export default MovesHistoryItem;
