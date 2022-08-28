import React from "react";

export class Counter extends React.Component {
  state = {
    count: 0,
  };

  constructor(props) {
    super(props);

    setInterval(() => {
      this.setState((state) => {
        return {
          count: state.count + 1,
        };
      });
    }, 1000);
  }
  // in questo caso il setState ha bisogno di essere chiamato con una callback function perchè
  // il suo valore in aggiornamento dipende dal valore corrente. Quindi questa forma si usa per aggiornare un componente come nel nostro caso.

  render() {
    return <h1>Count: {this.state.count}</h1>;
  }
}
