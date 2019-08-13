import React, { Component } from "react";
import styles from "./Task.module.scss";

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
    if (
      (!this.state.isEditable && this.props.showFinished) ||
      (!this.state.isEditable &&
        !this.props.showFinished &&
        !this.state.isComplete)
    ) {
      return (
        <React.Fragment>
          <li style={style} className={styles.task}>
            <input type="checkbox" onClick={this.handleCheckbox} />
            <p onClick={this.handleClick}>{this.props.content}</p>
            <button onClick={this.props.delete}>x</button>
          </li>
        </React.Fragment>
      );
    } else if (!this.props.showFinished && this.state.isComplete) {
      return null;
    } else if (this.state.isEditable) {
      return (
        <li style={style}>
          <input
            type="text"
            value={this.props.value}
            placeholder={this.props.content}
            onChange={this.props.edit}
            onKeyUp={this.acceptEdit}
          />
        </li>
      );
    }
  }
}

export default Task;
