import React from "react";
import classes from "./Button.module.scss";

const Button = ({type, children, onClick}) => {
  const cls = [classes.Button];
  if (type) cls.push(classes[type]);
  return (
    <button className={cls.join(" ")} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
