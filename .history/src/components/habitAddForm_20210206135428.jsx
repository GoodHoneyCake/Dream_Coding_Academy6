import React, { Component } from "react";

class HabitAddForm extends Component {
  inputRef = React.createRef();
  onAdd = (e) => {
    e.preventDefault();
    const name = this.inputRef.current.value;
  };
  onReset = (e) => {
    console.log(e);
  };
  render() {
    return (
      <form action="" className="add-form" onSubmit={this.onAdd}>
        <input
          ref={this.inputRef}
          placeholder="Habit"
          type="text"
          className="add-input"
        />
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default HabitAddForm;
