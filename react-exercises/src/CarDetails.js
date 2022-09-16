import { useRef, useEffect } from "react";

export function CarDetails({ initialValue }) {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.elements.model.value = initialValue.model;
    inputRef.current.elements.year.value = initialValue.year;
    inputRef.current.elements.color.value = initialValue.color;
  }, [initialValue]);

  return (
    <form ref={inputRef}>
      <label>Modello :</label>
      <input name="model" type="text"></input>
      <br />
      <label>Anno :</label>
      <input name="year" type="text"></input>
      <br />
      <label>Colore :</label>
      <input name="color" type="text"></input>
    </form>
  );
}
