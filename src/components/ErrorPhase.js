import React from "react";

class CounterThatThrowsError extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };

    this.increment = () => this.setState({ count: this.state.count + 1 });
    this.decrement = () => this.setState({ count: this.state.count - 1 });
  }

  render() {
    if (this.state.count === 3) throw new Error("Crashed!");

    return (
      <React.Fragment>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
      </React.Fragment>
    );
  }
}

export class ErrorPhase extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      error: null
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error: error
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log("Error");
    // Output: Error: Crashed!
  }

  componentWillUnmount() {
    console.log("Counter has been unmounted!");
    // Output: Counter has been unmounted!
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ marginLeft: "2em" }}>
          <h1>Oh no! Something's gone wrong!</h1>
        </div>
      );
    }

    return (
      <div className="Error">
        <CounterThatThrowsError />
      </div>
    );
  }
}
