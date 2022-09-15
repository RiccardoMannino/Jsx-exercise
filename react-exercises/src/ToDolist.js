import { useState } from "react";

export function ToDoList() {
  const [data, setData] = useState(["la", "lista"]);

  const handleTodoList = (event) => {
    event.preventDefault();

    setData((statoprecedente) => ({
      data: [...statoprecedente, event.target.elements.todo.value],
    }));
  };

  return (
    <>
      <form onSubmit={handleTodoList}>
        <input name="todo"/>
        <button type="submit">Submit</button>
      </form>
      <ul>
        {data.map((todos, index) => (
          <li key={todos + index}>{todos}</li>
        ))}
      </ul>
    </>
  );
}
