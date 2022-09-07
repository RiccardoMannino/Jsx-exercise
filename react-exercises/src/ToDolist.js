import React, { createRef } from "react";

export class TodoList extends React.Component {
  _inputRef = createRef();

  state = { id: [""] };

  handleTodoList = (event) => {
    const name = event.target.name;
    const todo = this._inputRef.current.value;

    this.setState(() => ({
      [name]: this.state.id.push(todo),
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
      </>
    );
  }
}
