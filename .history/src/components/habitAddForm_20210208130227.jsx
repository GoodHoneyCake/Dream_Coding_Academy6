import React from "react";

const HabitAddForm = (props) => {
  const formRef = React.createRef();
  const inputRef = React.createRef();

  const onSubmit = (e) => {
    e.preventDefault();
    const name = this.inputRef.current.value;
    name && props.onAdd(name);

    formRef.current.reset();
  };

  return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        placeholder="Habit"
        type="text"
        className="add-input"
      />
      <button className="add-button">Add</button>
    </form>
  );
};
export default HabitAddForm;
