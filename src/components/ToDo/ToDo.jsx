import React, { Component } from "react";
import Task from "./Task";
import firebase, { firestore } from "../../firebase";
import styles from "./ToDo.module.scss";

class ToDo extends Component {
  state = {
    tasks: this.props.list,
    editValue: "",
    index: null,
    showFinished: true
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

  toggleFinishedTasks = () => {
    this.setState({
      showFinished: !this.state.showFinished
    });
  };

  render() {
    return (
      <article className={styles.wrapper}>
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
              showFinished={this.state.showFinished}
            />
          ))}
          <li>
            <input type="text" onKeyUp={this.handleInput} />
          </li>
          <div>
            <input type="checkbox" onClick={this.toggleFinishedTasks} />
            <p>Hide done tasks</p>
          </div>
        </ul>
      </article>
    );
  }
}

export default ToDo;
