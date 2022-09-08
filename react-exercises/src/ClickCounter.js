import React from "react";
import { CounterBotton } from "./CounterBotton";

export class ClickCounter extends React.Component {
  state = {
    counter: this.props.initialValue,
  };

  counterIncrement = () => {
    this.setState((state) => ({
      counter: state.counter + this.props.incrementBy,
    }));
  };

  render() {
    return (
      <>
        <h3>Click: {this.state.counter}</h3>
        <CounterBotton counterIncrement={this.counterIncrement} />
      </>
    );
  }
}
