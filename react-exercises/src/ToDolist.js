import React, { createRef } from "react";

export class TodoList extends React.Component {
  _inputRef = createRef();

  state = { id: [] };

  handleTodoList = (event) => {
    const name = event.target.name;
    const todo = this._inputRef.current.value;
    const reset = (this._inputRef.current.value = "");

    this.setState(() => ({
      [name]: todo !== "" ? this.state.id.push(todo) : reset,
    }));
  };

  handleReset = (event) => {
    this.setState((state) => ({
      id: (state.id = []),
    }));
  };

  render() {
    return (
      <>
        <ul>
          {this.state.id.map((todos, index) => (
            <li key={todos + index}>{todos}</li>
          ))}
        </ul>

        <input ref={this._inputRef}></input>
        <button onClick={this.handleTodoList}>Aggiungi Task</button>
        <button onClick={this.handleReset}>Rimuovi Task</button>
      </>
    );
  }
}
