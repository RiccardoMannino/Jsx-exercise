import React from "react";
import Button from "react-bootstrap/Button";

export class CounterBotton extends React.Component {
  render() {
    return (
      <Button variant="success" onClick={this.props.counterIncrement}>
        Increment
      </Button>
    );
  }
}
