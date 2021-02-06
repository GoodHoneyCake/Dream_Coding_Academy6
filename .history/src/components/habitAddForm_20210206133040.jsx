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
    return <Habits onAdd={this.onAdd} onReset={this.onReset} />;
  }
}

export default HabitAddForm;
