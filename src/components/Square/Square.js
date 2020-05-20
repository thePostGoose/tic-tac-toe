import React from "react";
import classes from "./Square.module.scss";

const Square = (props) => {
  const cls = [classes.square]
  if (props.disabled) cls.push(classes.disabled)
  return (
    <button onClick={props.onClick} className={cls.join(' ')}>
      {props.value}
    </button>
  );
};

export default Square;
