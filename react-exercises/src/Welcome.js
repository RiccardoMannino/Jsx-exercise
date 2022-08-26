import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component {
  render() {
    return (
      <>
        <p>
          Welcome, <strong>{this.props.name}</strong>
        </p>
        <Age age={this.props.age} />
      </>
    );
  }
}
Welcome.defaultProps = {
  name: "Riccardo",
};
