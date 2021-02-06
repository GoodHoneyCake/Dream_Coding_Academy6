import React, { Component } from "react";
import Habits from "./habits";

class HabitAddForm extends Component {
  onAdd = (e) => {
    console.log(e);
  };
  onClick = (e) => {
    console.log(e);
  };
  render() {
    return <Habits onAdd={onAdd} onClick={onClick} />;
  }
}

export default HabitAddForm;
