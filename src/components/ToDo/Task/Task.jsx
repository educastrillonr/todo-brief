import React, { Component } from "react";

class Task extends Component {
  state = { isComplete: false, isEditable: false, value: this.props.content };

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
          <li style={style}>
            <input type="checkbox" onClick={this.handleCheckbox} />
            <p onClick={this.handleClick}>{this.props.content}</p>
          </li>
          <button onClick={this.props.delete}>x</button>
        </React.Fragment>
      );
    } else {
      return (
        <li style={style}>
          <input
            type="text"
            value={this.state.value}
            onKeyUp={this.props.edit}
          />
        </li>
      );
    }
  }
}

export default Task;
