import React, { Component } from 'react'
import classes from './Game.module.scss'
import Board from '../Board/Board'

export default class Game extends Component {
  render() {
    return (
      <div className={classes.game}>
        <div className={classes["game-board"]}>
          <Board />
        </div>
        <div className={classes["game-info"]}>
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}
