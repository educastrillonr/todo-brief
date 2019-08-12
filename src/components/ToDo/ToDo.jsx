import React, { Component } from "react";
import Task from "./Task";
class ToDo extends Component {
  state = {
    tasks: this.props.list
  };

  handleInput = e => {
    if (e.key === "Enter" && e.target.value !== "") {
      let copy = [...this.state.tasks];
      copy.push(e.target.value);
      this.setState({
        tasks: copy
      });
      e.target.value = "";
    }
  };

  editTask = (e, index) => {
    if (e.key === "Enter" && e.target.value !== "") {
      let copy = [...this.state.tasks];
      copy[index] = e.target.value;
      this.setState({
        tasks: copy
      });
      e.target.value = "";
    }
  };

  removeTask = index => {
    let copy = [...this.state.tasks];
    copy.splice(index, 1);
    this.setState({
      tasks: copy
    });
  };

  render() {
    return (
      <article>
        <ul>
          {Object.entries(this.state.tasks).map((task, index) => (
            <Task
              content={task[1]}
              key={task[0]}
              delete={() => this.removeTask(index)}
              edit={() => this.editTask(index)}
            />
          ))}
          <li>
            <input type="text" onKeyUp={this.handleInput} />
          </li>
        </ul>
      </article>
    );
  }
}

export default ToDo;
