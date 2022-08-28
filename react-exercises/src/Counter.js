import React from "react";

export class Counter extends React.Component {
  state = {
    count: this.props.initialValue,
  };

  constructor(props) {
    super(props);

    setInterval(() => {
      this.setState((state) => {
        return {
          count: state.count + this.props.incrementBy,
        };
      });
    }, this.props.timeout);
  }
  // in questo caso il setState ha bisogno di essere chiamato con una callback function perchè
  // il suo valore in aggiornamento dipende dal valore corrente. Quindi questa forma si usa per aggiornare un componente come nel nostro caso.

  render() {
    return <h1>Count: {this.state.count}</h1>;
  }
}
// Counter.defaultProps = {
//   initialValue: 0,
//   incrementBy: 1,
//   timeout: 1000,
// }; oppure settando le props di default (state-03)
