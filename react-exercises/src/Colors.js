import React from "react";

export class Colors extends React.Component {
  render() {
    return (
      // Questo modo non è molto consigliato se la lista cambia ma di sicuro avremo key diverse
      // e inoltre non avremo più l'errore riguardante la key mancante in console
      <div>
        <ul>
          {this.props.items.map((colore, index) => (
            <li key={colore + index}>{colore}</li>
          ))}
        </ul>
      </div>
    );
  }
}
