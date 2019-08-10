import React, { Component } from "react";

class Task extends Component {
  state = { isComplete: false };

  handleClick = () => {
    this.setState({
      isComplete: !this.state.isComplete
    });
  };

  render() {
    let style = this.state.isComplete
      ? { textDecoration: "line-through" }
      : null;
    return (
      <React.Fragment>
        <li style={style} onClick={this.handleClick}>
          {this.props.content}
        </li>
        <button onClick={this.props.delete}>x</button>
      </React.Fragment>
    );
  }
}

export default Task;
