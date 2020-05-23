import React, { Component } from "react";
import classes from "./GameLayout.module.scss";
import GameField from "../../components/Game/GameField/GameField";
import GameInfo from "../../components/Game/GameInfo/GameInfo";

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
      return {
        winnerChar: squares[a],
        winnerLine: [a, b, c],
      };
    }
  }
  return null;
}

export default class GameLayout extends Component {
  state = {
    history: [{ squares: Array(9).fill(null), currentPos: null }],
    xIsNext: true,
    winner: null,
    stepNumber: 0,
    lastWinner: null,
  };

  handleClickSquare(i) {
    this.setState((prevState) => {
      const history = prevState.history.slice(0, prevState.stepNumber + 1);
      const current = history[history.length - 1].squares.slice();
      if (prevState.winner || current[i]) return;
      current[i] = prevState.xIsNext ? "X" : "O";
      const winner = calculateWinner(current);
      const lastWinner = null;

      return {
        history: history.concat({ squares: current, currentPos: i }),
        xIsNext: !prevState.xIsNext,
        winner,
        stepNumber: history.length,
        lastWinner,
      };
    });
  }

  jumpTo(step) {
    let winner = this.state.winner;
    let lastWinner = this.state.lastWinner;
    if (winner) {
      lastWinner = winner;
    }
    if (step < this.state.history.length - 1) {
      winner = null;
    }
    if (step === this.state.history.length - 1) {
      winner = lastWinner;
      lastWinner = null;
    }
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
      winner,
      lastWinner,
    });
  }

  render() {


    return (
      <div className={classes.GameLayout}>
        <GameField
          onClick={(i) => this.handleClickSquare(i)}
          winner={this.state.winner}
          history={this.state.history}
          stepNumber={this.state.stepNumber}
          xIsNext={this.state.xIsNext}
        />
        <GameInfo
          onClick={(step) => this.jumpTo(step)}
          winner={this.state.winner}
          history={this.state.history}
          xIsNext={this.state.xIsNext}
          stepNumber={this.state.stepNumber}
        />
      </div>
    );
  }
}
