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

  acceptEdit = e => {
    if (e.key === "Enter" && e.target.value !== "") {
      this.setState({
        isEditable: !this.state.isEditable
      });
      this.props.acceptEdit(this.props.index);
    }
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
            value={this.props.value}
            placeholder={this.props.content}
            onChange={this.props.edit}
            onKeyUp={this.acceptEdit}
          />
          {/* <button onClick={this.props.acceptEdit}>accept</button> */}
        </li>
      );
    }
  }
}

export default Task;
