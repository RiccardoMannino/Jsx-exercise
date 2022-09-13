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
    const name = event.target.name;

    this.setState((state, item) => ({
      [name]: state.id.filter((i) => i !== item),
    }));
  };

  // handleReset = (item) => {
  //   this.setState((state) => ({
  //     id: state.id.filter((i) => i !== item),
  //   }));
  // };

  handleReset2 = () => {
    this.setState((state) => ({
      id: (state.id = []),
    }));
  };

  render() {
    return (
      <>
        <ul>
          {this.state.id.map((todos, index) => (
            <li key={todos + index}>
              {todos}{" "}
              <button onClick={() => this.handleReset(todos)}>
                Rimuovi Elemento
              </button>
            </li>
          ))}
        </ul>

        <input ref={this._inputRef}></input>
        <button onClick={this.handleTodoList}>Aggiungi Task</button>
        <button onClick={this.handleReset2}>Rimuovi Task</button>
      </>
    );
  }
}
