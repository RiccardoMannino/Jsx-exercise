import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component {
  render() {
    return (
      <>
        <p>
          Welcome, <strong>{this.props.name}</strong>
        </p>
        {this.props.age && <Age age={this.props.age} />}
      </> // Se il valore della props age è assente il componente Age non sarà renderizzato(conditional-rendering-02)
    );
  }
}
Welcome.defaultProps = {
  name: "Riccardo",
};
