import React, { Component } from "react";

class SimpleHabit extends Component {
  state = {
    count: 0,
  };
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return <div></div>;
  }
}

export default SimpleHabit;
