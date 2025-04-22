import React from "react";
import Controls from "./Controls";
import Value from "./Value";
import "./Counter.css";

class Counter extends React.Component {
  static defaultProps = {
    initialValue: 1,
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState((prevState) => ({
      value: prevState.value + 1,
    }));
  };

  handleDescrement = () => {
    this.setState((prevState) => ({
      value: prevState.value - 1,
    }));
  };

  render() {
    const { value } = this.state;

    return (
      <div className="Counter">
        <Value value={value} />
        <Controls
          onIncrement={this.handleIncrement}
          onDescrement={this.handleDescrement}
        />
      </div>
    );
  }
}

export default Counter;
