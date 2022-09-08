import React from "react";

export class Container extends React.Component {
  render() {
    return (
      <div className="bg-white border-red-600 border-2 p-4 m-2">
        <div className="contenitore">{this.props.children}</div>
      </div>
    );
  }
}
