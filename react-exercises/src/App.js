import React from "react";
import { Hello } from "./Hello";
import { Message } from "./Message";
import { Welcome } from "./Welcome";

export class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Hello /> */}
        <h1>My Awesome Application</h1>
        <Hello />
        <Message />
        <Welcome />
      </div>
    );
  }
}
