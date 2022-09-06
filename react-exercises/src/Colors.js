import React from "react";

export class Colors extends React.Component {
  render() {
    // in questo modo però il devtools ci notificherà che la lista ha bisogno di avere una key
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
