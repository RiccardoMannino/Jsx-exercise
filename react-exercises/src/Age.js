import React from "react";

export class Age extends React.Component {
  render() {
    return (
      <>
        <p>Your Age is, {this.props.age}</p>
      </>
    );
  }
} // Se il valore della props age è maggiore di 18 allora verrà renderizzato il componente Age altrimenti non sarà renderizzato
