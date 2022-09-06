import React from "react";

export class Colors extends React.Component {
  render() {
    //

    const colori = this.props.items.map((colore) => <li>{colore}</li>);
    return (
      <div>
        <ul>{colori}</ul>
      </div>
    );
  }
}
