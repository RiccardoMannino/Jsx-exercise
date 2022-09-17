import React from "react";
import { Age } from "./Age";

export function Welcome(props) {
  return (
    <div className="welcome">
      <p>
        Welcome, <strong>{props.name}</strong>
      </p>
      <Age age={props.age} />
    </div>
  );
}
