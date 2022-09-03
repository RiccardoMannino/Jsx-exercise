import React from "react";
import { Welcome } from "./Welcome";

export class InteractiveWelcome extends React.Component {
  state = {
    username: this.props.name,
  };

  handleInteractiveWelcome = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      name: "username",
    });
  };

  render() {
    return (
      <>
        <input
          name="username"
          value={this.state.username}
          onChange={this.handleInteractiveWelcome}
        />
        <Welcome name={this.props.name} />
      </>
    );
  }
}
