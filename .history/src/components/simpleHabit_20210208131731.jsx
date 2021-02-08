import "../app.css";

import React from "react";

const SimpleHabit = (props) => {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  return (
    <li className="simple">
      <span>Reading</span>
      <span>{this.state.count}</span>
      <button onClick={this.handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;
