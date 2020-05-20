import React, { Component } from "react";
import classes from "./Game.module.scss";
import Board from "../Board/Board";

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default class Game extends Component {
  state = {
    history: [{squares: Array(9).fill(null), currentPos: null}],
    xIsNext: true,
    winner: null,
    disabled: "",
    stepNumber: 0,
  };

  handleClickSquare(i) {
    this.setState((prevState) => {
      const history = prevState.history.slice(0, prevState.stepNumber + 1);
      const current = history[history.length - 1].squares.slice();
      if (prevState.winner || current[i]) return;
      current[i] = prevState.xIsNext ? "X" : "O";
      const winner = calculateWinner(current);
      let disabled = prevState.disabled;
      if (winner) disabled = true;

      return {
        history: history.concat({squares: current, currentPos: i}),
        xIsNext: !prevState.xIsNext,
        winner,
        disabled,
        stepNumber: history.length,
        currentSquare: i,
      };
    });
  }

  jumpTo(step) {
    let winner = this.state.winner;
    let disabled = this.state.disabled;
    if (step < this.state.history.length) {
      winner = null;
      disabled = "";
    }
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
      winner,
      disabled,
    });
  }
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const squares = current.squares;
    const winner = this.state.winner;
    // let style = {border: '1px solid green'} 
    const moves = history.map((step, move) => {

      let currentMove = " (";
      if (move) {
        if (move % 2) {
          currentMove += "X";
        } else {
          currentMove += "O";
        }
        currentMove += " поставлен в позицию " + step.currentPos;
      }
      const desk = move ? "Перейти к ходу номер" + move + currentMove + ')' : "К началу игры";
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desk}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = "Выиграл: " + winner;
    } else {
      status = "Следующий ход: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div className={classes.game}>
        <div className={classes["game-board"]}>
          <Board
            squares={squares}
            onClick={(i) => this.handleClickSquare(i)}
            disabled={this.state.disabled}
          />
        </div>
        <div className={classes["game-info"]}>
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}
