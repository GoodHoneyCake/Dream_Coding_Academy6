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
    return <Habits onAdd={} onClick={} />;
  }
}

export default HabitAddForm;
