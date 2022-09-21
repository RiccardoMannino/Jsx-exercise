import { useState } from "react";
import { GithubUser } from "./GithubUser";

export function GithubUserList({ username }) {
  const [input, setInput] = useState(username);

  function handleUserList(event) {
    event.preventDefault();

    setInput((input) => [...input, event.target.elements.user.value]);
  }

  return (
    <div>
      <ul>
        {input.map((username, index) => (
          <li key={index}>
            <GithubUser username={username} />
          </li>
        ))}
      </ul>

      <form onSubmit={handleUserList}>
        <input type="text" name="user" />
        <button type="submit">Ciao sono un bottone</button>
      </form>
    </div>
  );
}
