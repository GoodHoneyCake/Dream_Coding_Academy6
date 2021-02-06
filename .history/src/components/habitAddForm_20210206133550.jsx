import React, { Component } from "react";
import Habits from "./habits";

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
      </form>
    );

    //  <Habits onAdd={this.onAdd} onReset={this.onReset} />;
  }
}

export default HabitAddForm;
