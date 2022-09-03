import React from "react";
import { ClickCounter } from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";
import { Counter } from "./Counter";
import { Hello } from "./Hello";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
// import { Message } from "./Message";
import { Welcome } from "./Welcome";

export class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Hello /> */}
        <h1>My Awesome Application</h1>
        <Hello />
        {/* <Message /> */}
        {/* <Welcome name="Riccardo" age={18} /> */}
        <Counter timeout={1000} incrementBy={1} initialValue={0} />
        <ClickCounter incrementBy={1} initialValue={0} />
        <ClickTracker />
        <InteractiveWelcome name="Riccardo" />
        <Login />
      </div>
    );
  }
}
