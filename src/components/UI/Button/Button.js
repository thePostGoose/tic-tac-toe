import React from "react";
import classes from "./Button.module.scss";

const Button = (props) => {
  const cls = [classes.Button];
  if (props.type) cls.push(classes[props.type]);
  return (
    <button className={cls.join(" ")} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
