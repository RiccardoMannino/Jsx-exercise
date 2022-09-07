import React from "react";

export class CounterDisplay extends React.Component {
  render() {
    return <h1 style={{ color: "green" }}>Count: {this.props.count}</h1>;
  }
}
