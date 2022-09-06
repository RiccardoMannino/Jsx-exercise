import React from "react";

export class TodoList extends React.Component {
  state = ["buttare la spazzatura", "pulire casa", "studiare"];

  handleTodoList = (event) => {
    event.preventDefault();

    const todos = event.target.elements.todos.value;
    console.log(todos);
  };

  render() {
    return (
      <>
        <ul>
          {this.state.map((todos, index) => (
            <li key={todos + index}>{todos}</li>
          ))}
        </ul>
        <input name="todos"></input>
        <button onClick={this.handleTodoList}>Aggiungi Task</button>
      </>
    );
  }
}
