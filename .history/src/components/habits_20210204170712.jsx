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
    console.log(habit);
  };
  handleDecrement = (habit) => {};
  handleDelete = (habit) => {};

  render() {
    return (
      <ul>
        {this.state.habits.map((habit) => (
          <Habit
            habit={habit}
            key={habit.id}
            handleIncrement={handleIncrement}
          />
        ))}
      </ul>
    );
  }
}

export default Habits;
