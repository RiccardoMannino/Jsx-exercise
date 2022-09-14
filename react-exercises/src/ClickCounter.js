import React from "react";
import { useEffect, useState } from "react";

// export class ClickCounter extends React.Component {
//   state = {
//     counter: this.props.initialValue,
//   };

//   counterIncrement = () => {
//     this.setState((state) => ({
//       counter: state.counter + this.props.incrementBy,
//     }));
//   };

//   render() {
//     return (
//       <>
//         <h3>Click: {this.state.counter}</h3>
//         <CounterBotton counterIncrement={this.counterIncrement} />
//       </>
//     );
//   }
// }

export function ClickCounter({ initialValue }) {
  const [counter, setCounter] = useState(initialValue);

  function onCounterChange() {
    console.log(`The counter is now ${counter}`);
  }

  useEffect(() => {
    onCounterChange();
  }, [counter]);

  function handleClick() {
    setCounter((counter) => counter + 1);
  }
  function handleReset() {
    setCounter(initialValue);
  }

  return (
    <div>
      {/* <onCounterChange /> */}
      <h1>Click : {counter}</h1>
      <button className="bg-green-500" onClick={handleClick}>
        Increment
      </button>
      <button className="bg-red-600 ml-2" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}
