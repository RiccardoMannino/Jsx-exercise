import React from "react";
import { Hello } from "./Hello";
import { Message } from "./Message";

export class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Hello /> */}
        <h1>My Awesome Application</h1>
        <Hello />
        <Message />
      </div>
    );
  }
}

//Risposta esercizio components 09
//Riprodurrà il componente Message
