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
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habit[index].count++;
    console.log(habits);
  };
  handleDecrement = (habit) => {
    console.log(habit);
  };
  handleDelete = (habit) => {
    console.log(habit);
  };

  render() {
    return (
      <ul>
        {this.state.habits.map((habit) => (
          <Habit
            habit={habit}
            key={habit.id}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        ))}
      </ul>
    );
  }
}

export default Habits;
