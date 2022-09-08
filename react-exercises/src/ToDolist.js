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
        <ul className=" flex-col p-2  bg-slate-600 w-fit ml-2 rounded">
          {this.state.id.map((todos, index) => (
            <>
              <li
                className="  bg-red-600 text-zinc-100 w-fit mr-4 mb-2 rounded flex justify-between"
                key={todos + index}
              >
                {todos}
              </li>
              <button
                className=" bg-lime-500 min-w-fit ml-5 rounded mb-2
               "
                onClick={this.handleReset}
              >
                Rimuovi Elemento
              </button>
            </>
          ))}
        </ul>

        <input
          className="border-t-indigo-600 bg-lime-400 p-3 ml-2 mr-2 mt-2"
          ref={this._inputRef}
        ></input>
        <button
          className="bg-sky-500 p-3 mr-2 mt-2 rounded"
          onClick={this.handleTodoList}
        >
          Aggiungi Task
        </button>
        <button
          className="bg-cyan-900 p-3 rounded "
          onClick={this.handleReset2}
        >
          Rimuovi Task
        </button>
      </>
    );
  }
}
