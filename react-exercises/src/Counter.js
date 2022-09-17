import { useState } from "react";
import { useEffect } from "react";
import { CounterDisplay } from "./CounterDisplay";

// export class Counter extends React.Component {
//   state = {
//     count: this.props.initialValue,
//   };

//   constructor(props) {
//     super(props);

//     setInterval(() => {
//       this.setState((state) => ({
//         count:
//           state.count + this.props.incrementBy >= this.props.incrementBy * 11
//             ? this.props.initialValue
//             : state.count + this.props.incrementBy,
//       }));
//     }, this.props.timeout);
//   }

//   componentDidMount() {
//     this.timerID = setInterval(() => this.tick(), 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   componentDidUpdate() {
//     if (this.state.count >= this.props.incrementBy * 11) {
//       this.setState((state) => ({
//         count: this.props.initialValue,
//       }));
//     }
//   }

//   tick() {
//     this.setState({
//       count: this.state.count + this.props.incrementBy,
//     });
//   }

//   render() {
//     return <CounterDisplay count={this.state.count} />;
//   }
// }
// Counter.defaultProps = {
//   initialValue: 0,
//   incrementBy: 1,
//   timeout: 1000,
// }; oppure settando le props di default (state-03)

export function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervallo = setInterval(() => {
      setCount((counter) => counter + 1);
    }, 1000);

    return () => {
      clearInterval(intervallo);
    };
  }, [count]);

  return <CounterDisplay count={count} />;
}
