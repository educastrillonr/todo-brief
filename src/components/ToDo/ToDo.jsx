import React, { Component } from "react";
import Task from "./Task";
import firebase, { firestore } from "../../firebase";
class ToDo extends Component {
  state = {
    tasks: this.props.list,
    editValue: "",
    index: null
  };

  handleInput = e => {
    if (e.key === "Enter" && e.target.value !== "") {
      let copy = [...this.state.tasks];
      copy.push(e.target.value);
      this.setState({
        tasks: copy
      });
      firestore
        .collection("todo")
        .doc(this.props.userID)
        .update({
          list: firebase.firestore.FieldValue.arrayUnion(e.target.value)
        });
      e.target.value = "";
    }
  };

  editTask = e => {
    e.preventDefault();
    const editValue = e.target.value;
    this.setState({ editValue });
    // if (e.key === "Enter" && e.target.value !== "") {
    //   let copy = [...this.state.tasks];
    //   copy[index] = e.target.value;
    //   this.setState({
    //     tasks: copy
    //   });
    //   e.target.value = "";
    // }
  };

  acceptEdit = index => {
    let copy = [...this.state.tasks];
    copy[index] = this.state.editValue;
    this.setState({
      tasks: copy
    });
    firestore
      .collection("todo")
      .doc(this.props.userID)
      .update({
        list: copy
      });
    this.setState({
      editValue: ""
    });
  };

  removeTask = index => {
    let copy = [...this.state.tasks];
    firestore
      .collection("todo")
      .doc(this.props.userID)
      .update({
        list: firebase.firestore.FieldValue.arrayRemove(copy[index])
      });
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
              edit={this.editTask}
              value={this.state.editValue}
              acceptEdit={() => this.acceptEdit(index)}
              index={index}
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
