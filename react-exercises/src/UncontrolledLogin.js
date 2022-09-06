import React, { createRef } from "react";

export class UncontrolledLogin extends React.Component {
  _formRef = createRef();

  handleFormSubmit = (event) => {
    event.preventDefault();

    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    const remember = event.target.elements.remember.checked;

    console.log({
      username,
      password,
      remember,
    });
  };
  handleFormPrefill = () => {
    this._formRef.current.elements.username.value = "Richi";
    this._formRef.current.elements.password.value = "hello123";
    this._formRef.current.elements.remember.checked = true;
  };

  componentDidMount() {
    this._formRef.current.elements.username.focus();
  }
  

  render() {
    return (
      <div>
        <h3>My Uncontrolled Form</h3>

        <form ref={this._formRef} onSubmit={this.handleFormSubmit}>
          <input name="username"></input>
          <input name="password" type="password"></input>
          <input name="remember" type="checkbox"></input>

          <button type="submit">Login</button>
          <button type="reset">Reset</button>
          <button type="button" onClick={this.handleFormPrefill}>
            Prefill Form
          </button>
        </form>
      </div>
    );
  }
}
