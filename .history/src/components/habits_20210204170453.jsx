import React, { Component } from "react";
import Habit from "./habit";

class Habits extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };

  handleIncrement = (habit) => {
    this.setState((habit.count = this.state.habits.count + 1));
  };
  handleDecrement = () => {};
  handleDelete = () => {};

  render() {
    return (
      <ul>
        {this.state.habits.map((habit) => (
          <Habit habit={habit} key={habit.id} />
        ))}
      </ul>
    );
  }
}

export default Habits;
