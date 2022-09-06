import React from "react";

export class Colors extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.items.map((colore) => (
            <li>{colore}</li>
          ))}
        </ul>
      </div>
    );
  }
}
