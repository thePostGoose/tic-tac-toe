import React from "react";
import classes from "./Square.module.scss";

const Square = (props) => {
  const cls = [classes.square];
  if (props.winner) cls.push(classes.disabled);
  if (props.stayOnWinnerLine) cls.push(classes["winner-line"]);
  return (
    <button onClick={props.onClick} className={cls.join(" ")}>
      {props.value}
    </button>
  );
};

export default Square;
