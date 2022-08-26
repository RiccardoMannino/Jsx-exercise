import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component {
  render() {
    return (
      <>
        <p>
          Welcome, <strong>{this.props.name}</strong>
        </p>
        {this.props.age > 18 && this.props.age < 65 && (
          <Age age={this.props.age} />
        )}
      </> // il componente Age verrà visualizzato se il valore di age sarà maggiore di 18 e minore di 65(conditional-rendering-03)
    );
  }
}
Welcome.defaultProps = {
  name: "Riccardo",
};
