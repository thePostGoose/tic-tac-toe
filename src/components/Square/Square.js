import React, { Component } from "react";
import classes from "./Square.module.scss";

export default class Square extends Component {
  state = {
    value: null,
  };

  onClickHandler = () => {
    this.setState({
      value: "X",
    });
  };

  render() {
    return (
      <button onClick={this.onClickHandler} className={classes.square}>
        {this.state.value}
      </button>
    );
  }
}
