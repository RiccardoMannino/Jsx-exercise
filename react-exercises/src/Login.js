import React from "react";
import { useState } from "react";

// export class Login extends React.Component {
//   state = {
//     username: "",
//     password: "",
//     remember: false,
//     login: false,
//   };

//   handleInputChange = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     const type = event.target.type;
//     const checked = event.target.checked;

//     this.setState({
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   onLogin = () => {
//     this.setState(
//       {
//         login: true,
//       }
//       // () => {
//       //   console.log(this.state);
//       // }
//     );
//   };

//   reset = () => {
//     this.setState({
//       username: "",
//       password: "",
//       remember: false,
//     });
//   };

//   render() {
//     return (
//       <>
//         <input
//           name="username"
//           value={this.state.username}
//           onChange={this.handleInputChange}
//         ></input>
//         <input
//           name="password"
//           type="password"
//           value={this.state.password}
//           onChange={this.handleInputChange}
//         ></input>
//         <input
//           name="remember"
//           type="checkbox"
//           checked={this.state.remember}
//           onChange={this.handleInputChange}
//         ></input>

//         {this.state.username && this.state.password ? (
//           <button
//             style={{
//               backgroundColor: this.state.password.length < 8 ? "red" : "green",
//             }}
//             type="submit"
//             name="login"
//             value={this.state.login}
//             onClick={this.onLogin}
//           >
//             Login
//           </button>
//         ) : (
//           <button type="submit" name="login" disabled>
//             Login
//           </button>
//         )}
//         <button onClick={this.reset}>Reset</button>
//       </>
//     );
//   }
// }
export function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
    remember: false,
    login: false,
  });

  function handleLogin(event) {
    const { name, value, checked, type } = event.target;

    setData((data) => {
      return {
        ...data,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  const [login, setLogin] = useState(true);

  function LoginButton() {
    setLogin(login);
  }

  return (
    <form>
      <input
        onChange={handleLogin}
        name="username"
        value={data.username}
      ></input>
      <input
        onChange={handleLogin}
        name="password"
        type="password"
        value={data.password}
      ></input>
      <input
        onChange={handleLogin}
        name="remember"
        type="checkbox"
        value={data.remember}
      ></input>
      {data.username && data.password ? (
        <button
          style={{
            backgroundColor: data.password.length < 8 ? "red" : "green",
          }}
          type="submit"
          name="login"
          onClick={LoginButton}
        >
          Login
        </button>
      ) : (
        <button type="submit" name="login" disabled>
          Login
        </button>
      )}
    </form>
  );
}
