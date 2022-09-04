import React from "react";

export class Login extends React.Component {
  state = {
    username: "",
    password: "",
    remember: false,
    login: false,
  };

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const type = event.target.type;
    const checked = event.target.checked;

    this.setState({
      [name]: type === "checkbox" ? checked : value,
    });
  };

  onLogin = () => {
    this.setState(
      {
        login: true,
      }
      // () => {
      //   console.log(this.state);
      // }
    );
  };

  render() {
    return (
      <>
        <input
          name="username"
          value={this.state.username}
          onChange={this.handleInputChange}
        ></input>
        <input
          name="password"
          type="password"
          value={this.state.password}
          onChange={this.handleInputChange}
        ></input>
        <input
          name="remember"
          type="checkbox"
          checked={this.state.remember}
          onChange={this.handleInputChange}
        ></input>

        {this.state.username && this.state.password ? (
          <button
            type="submit"
            name="login"
            value={this.state.login}
            onClick={this.onLogin}
          >
            Login
          </button>
        ) : (
          <button type="submit" name="login" disabled>
            Login
          </button>
        )}
      </>
    );
  }
}
