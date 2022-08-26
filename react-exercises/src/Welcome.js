import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component {
  render() {
    return (
      <>
        <p>
          Welcome, <strong>{this.props.name}</strong>
        </p>
        {this.props.age > 18 &&
          this.props.age < 65 &&
          this.props.name === "John" && <Age age={this.props.age} />}
      </> // Se il valore della props age è maggiore di 18 e minore di 65 e la props name equivale a "John" allora il componente Age verrà visualizzato(conditional-rendering-04)
    );
  }
}
