import { useState } from "react";

export function useCounter(initialValue) {
  const [counter, setCounter] = useState(initialValue);

  function handleIncrement() {
    setCounter((counter) => counter + 1);
  }
  function handleDecrement() {
    setCounter((counter) => counter - 1);
  }
  function handleReset() {
    setCounter(initialValue);
  }

  return {
    counter: counter,
    increment: handleIncrement,
    decrement: handleDecrement,
    reset: handleReset,
  };
}
