import React, { createRef } from "react";

export class TodoList extends React.Component {
  _inputRef = createRef();

  state = { id: [""] };

  handleTodoList = (event) => {
    const name = event.target.name;
    const todo = this._inputRef.current.value;
    const reset = (this._inputRef.current.value = "");

    this.setState(() => ({
      [name]: todo !== "" ? this.state.id.push(todo) : reset,
    }));
  };

  handleReset = (event) => {
    console.log(event);
    const name = event.target.name;

    this.setState(() => ({
      [name]: this.state.id.pop(),
    }));
  };

  handleReset2 = (event) => {
    this.setState((state) => ({
      id: (state.id = [""]),
    }));
  };

  render() {
    return (
      <>
        {this.props.render({
          id: this.state.id,
          _inputRef: this._inputRef,
          handleReset: this.handleReset,
          handleReset2: this.handleReset2,
          handleTodoList: this.handleTodoList,
        })}
      </>
    );
  }
}
