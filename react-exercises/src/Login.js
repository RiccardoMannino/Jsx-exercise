import React, { useRef } from "react";
import { useState, useEffect } from "react";

export function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
    remember: false,
    login: false,
  });
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleReset = () => {
    setData({ username: "", password: "", remember: false });
  };

  const handleLogin = (event) => {
    const { name, value, checked, type } = event.target;

    setData((data) => {
      return {
        ...data,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const [login, setLogin] = useState(true);

  const LoginButton = () => {
    setLogin(login);
  };

  return (
    <form>
      <input
        onChange={handleLogin}
        name="username"
        ref={inputRef}
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
      <button type="reset" onClick={handleReset}>
        reset
      </button>
    </form>
  );
}
