import React from "react";
import { Hello } from "./Hello";

export class App extends React.Component {
  render() {
    return (
      <div>
        <h1>My Awesome Application</h1>
        <Hello />
      </div>
    );
  }
}
