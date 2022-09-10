import React from "react";

export function Sum({ numbers = [] }) {
  return (
    <h1>
      La somma degli elementi è :{numbers.reduce((num1, num2) => num1 + num2)}
    </h1>
  );
}
