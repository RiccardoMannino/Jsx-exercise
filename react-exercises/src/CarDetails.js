import { useState, useRef } from "react";

export function CarDetails({
  props = {
    model: "",
    year: "",
    color: "",
  },
}) {
  const [input, setInput] = useState(props);
  const inputRef = useRef();

  function handleInputChange(event) {
    setInput(event.target.value);
  }

  return (
    <form>
      <label></label>
      <input name="model" type="text"></input>
      <input name="year" type="text"></input>
      <input name="color" type="text"></input>
    </form>
  );
}
