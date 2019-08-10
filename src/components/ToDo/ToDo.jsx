import React, { Component } from "react";
import Task from "./Task";
class ToDo extends Component {
  state = {
    tasks: Object.values(this.props.list),
    keys: Object.keys(this.props.list)
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

  removeTask = index => {
    let copy = [...this.state.tasks];
    let keysCopy = [...this.state.keys];
    copy.splice(index, 1);
    keysCopy.splice(index, 1);
    this.setState({
      tasks: copy,
      keys: keysCopy
    });
  };

  render() {
    console.log(this.state.keys);
    console.log(this.state.tasks);

    return (
      <article>
        <ul>
          {this.state.tasks.map((task, index) => (
            <Task
              content={task}
              key={this.state.keys[index]}
              delete={() => this.removeTask(index)}
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
