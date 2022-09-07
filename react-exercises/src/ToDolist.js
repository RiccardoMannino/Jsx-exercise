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
    const name = event.target.name;
    const todo = this._inputRef.current.value;

    this.setState(() => ({
      [name]: this.state.id.pop(),
    }));
  };

  handleReset2 = (event) => {
    const name = event.target.name;
    const todo = this._inputRef.current.value;

    this.setState((state) => ({
      id: (state.id = [""]),
    }));
  };

  render() {
    return (
      <>
        <ul className="bg-rose-800 w-1/6 ml-2 border-2 rounded-sm">
          {this.state.id.map((todos, index) => (
            <li key={todos + index}>
              {todos}
              <button className="ml-2 " onClick={this.handleReset}>
                Rimuovi Elemento
              </button>
            </li>
          ))}
        </ul>

        <input
          className="border-t-indigo-600 bg-lime-400 p-3 ml-2 mr-2 mt-2"
          ref={this._inputRef}
        ></input>
        <button
          className="bg-sky-500 p-3 mr-2 mt-2"
          onClick={this.handleTodoList}
        >
          Aggiungi Task
        </button>
        <button className="bg-cyan-900 p-3  " onClick={this.handleReset2}>
          Rimuovi Task
        </button>
      </>
    );
  }
}
