import React, { Component } from "react";
import app from "../app.css";

class SimpleHabit extends Component {
  state = {
    count: 0,
  };
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <li className="Simple">
        <span>Reading</span>
        <span>{this.state.count}</span>
        <button onClick={this.handleIncrement}>
          <i className="fas fa-plus-square"></i>
        </button>
      </li>
    );
  }
}

export default SimpleHabit;
