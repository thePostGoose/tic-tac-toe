import React from "react";
import classes from "./GameField.module.scss";

import Square from "../../Square/Square";

function renderField(width, hight, { history, stepNumber, onClick }) {
  function createRow(i) {
    return (
      <div key={i} className={classes.row}>
        {Array(width)
          .fill("")
          .map((_, index) => {
            let arg = i * width + index;
            return (
              <Square
                key={arg}
                value={history[stepNumber].squares[arg]}
                onClick={() => onClick(arg)}
              />
            );
          })}
      </div>
    );
  }

  const field = Array(hight)
    .fill("")
    .map((_, index) => {
      return createRow(index);
    });
  return <div className={classes.field}>{field}</div>;
}

const GameField = (props) => {
  return renderField(3, 3, props);
};

export default GameField;
