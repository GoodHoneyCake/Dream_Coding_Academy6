import React, { Component } from "react";

class HabitAddForm extends Component {
  onAdd = (e) => {
    console.log(e);
  };
  onReset = (e) => {
    console.log(e);
  };
  render() {
    return (
      <form action="" className="add-form">
        <input placeholder="Habit" type="text" className="add-input" />
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default HabitAddForm;
