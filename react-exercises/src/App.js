import React from "react";
import { Hello } from "./Hello";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <h1>My Awesome Application</h1>
        <Hello />
      </div>
    );
  }
}
// risposta esercizio components 08
// Riprodurrà il componente più volte
