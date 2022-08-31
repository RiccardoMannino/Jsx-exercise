import React from "react";

export class CounterBotton extends React.Component {
  render() {
    return <button onClick={this.props.counterIncrement}>Increment</button>;
  }
}
