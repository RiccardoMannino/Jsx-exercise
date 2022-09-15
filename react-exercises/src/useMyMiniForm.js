import { useState } from "react";

export function useMyMiniForm() {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const miniForm = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setInput((input) => {
      return {
        ...input,
        [name]: value,
      };
    });
  };

  return {
    input: input,
    form: miniForm,
  };
}
