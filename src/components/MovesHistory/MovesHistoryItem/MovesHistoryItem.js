import React from "react";
import Button from '../../UI/Button/Button'
import classes from "./MovesHistoryItem.module.scss";

const MovesHistoryItem = (props) => {
  const move = props.move + 1;
  const coor = `[${(Math.floor(props.step.currentPos / 3) + 1)}, ${(props.step.currentPos % 3 + 1)}]`;
  const currentValue = (move % 2) ? "X" :"O" ;
  return (
    <li>
      <span>{`Ход ${move}:`}</span>
      <span> {currentValue} </span>
      <span> в {coor}</span>
      <Button onClick={() => props.onClick(move)}>перейти</Button>
    </li>
  );
};

export default MovesHistoryItem;
