import React, { Component } from "react";

class HabitAddForm extends Component {
  formRef = React.createRef();
  inputRef = React.createRef();
  onSubmit = (e) => {
    e.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    this.inputRef.current.value = "";
  };
  onReset = (e) => {
    console.log(e);
  };
  render() {
    return (
      <form
        ref={this.inputRef}
        action=""
        className="add-form"
        onSubmit={this.onSubmit}
      >
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
