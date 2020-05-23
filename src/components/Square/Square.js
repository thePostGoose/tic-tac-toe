import React from "react";
import classes from "./Square.module.scss";

const Square = ({winner, stayOnWinnerLine, onClick, value}) => {
  const cls = [classes.square];
  if (winner) cls.push(classes.disabled);
  if (stayOnWinnerLine) cls.push(classes["winner-line"]);
  return (
    <button onClick={onClick} className={cls.join(" ")}>
      {value}
    </button>
  );
};

export default Square;
