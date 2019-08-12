import React, { Component } from "react";

class Task extends Component {
  state = { isComplete: false, isEditable: false };

  handleCheckbox = () => {
    this.setState({
      isComplete: !this.state.isComplete
    });
  };

  handleClick = () => {
    this.setState({
      isEditable: !this.state.isEditable
    });
  };

  render() {
    let style = this.state.isComplete
      ? { textDecoration: "line-through" }
      : null;
    if (!this.state.isEditable) {
      return (
        <React.Fragment>
          <li style={style} onClick={this.handleClick}>
            <input type="checkbox" onClick={this.handleCheckbox} />
            {this.props.content}
          </li>
          <button onClick={this.props.delete}>x</button>
        </React.Fragment>
      );
    } else {
      return (
        <li style={style}>
          <input type="text" value={this.props.content} />
        </li>
      );
    }
  }
}

export default Task;
