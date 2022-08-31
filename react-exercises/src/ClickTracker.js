import React from "react";

export class ClickTracker extends React.Component {
  state = {
    bottone: "",
  };

  tracker = (event) => {
    this.setState((state) => ({
      bottone: (state.bottone = event.target.innerText),
    }));
  };

  render() {
    return (
      <>
        <h1>Ultimo bottone cliccato: {this.state.bottone}</h1>
        <button onClick={this.tracker}>bottone 1</button>
        <button onClick={this.tracker}>bottone 2</button>
        <button onClick={this.tracker}>bottone 3</button>
      </>
    );
  }
}
