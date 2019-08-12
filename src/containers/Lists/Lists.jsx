import React, { Component } from "react";
import { firestore } from "../../firebase";
import ToDo from "../../components/ToDo";

class Lists extends Component {
  state = {
    lists: []
  };

  componentDidMount() {
    // Use Firebase SDK, firestore object, to fetch collection of top trump cards
    // onSnapshot() watches the collection in the db & listens for changes
    firestore
      .collection("todo")
      .doc(this.props.userID)
      .get()
      .then(querySnapshot => {
        // cards becomes an array of objects returned from the collection
        // const lists = querySnapshot.docs.map(doc => {
        //   return { ...doc.data(), docId: doc.id }; // Need to get each document id and add to card object
        // });
        // console.log(querySnapshot);
        // console.log("querySanophot exists, need to fetch data")
        querySnapshot.exists
          ? this.setState({
              lists: { ...querySnapshot.data() }
            })
          : this.createDoc();

        // console.log(querySnapshot.doc(this.props.userID));
        // setting cards in component state equal to data in collection
        // Initially set filtered list equal to the cards pulled from the database
        // this.setState({
        //   lists: lists
        // });
      });
  }

  createDoc = () => {
    firestore
      .collection("todo")
      .doc(this.props.userID)
      .set({
        list: ["this is your first list"]
      });
    this.componentDidMount();
  };

  // handleAdd = () => {
  //   this.setState({
  //     showInput: true
  //   });
  // };

  // handleInputTitle = e => {
  //   // console.log();

  //   this.setState({
  //     newListTitle: e.target.value
  //   });
  // };

  // handleInputTask = e => {
  //   this.setState({
  //     newTask: e.target.value
  //   });
  //   // console.log(this.state.newListTitle);
  // };

  // handleSubmit = e => {
  //   e.preventDefault();
  //   // console.log(e.target.value);
  //   firestore
  //     .collection("todo")
  //     .doc(this.props.userID)
  //     .update(
  //       {
  //         list: [this.state.newTask]
  //       }
  //       // { merge: true }
  //     );
  //   this.setState({
  //     showInput: false
  //   });
  //   this.componentDidMount();
  // };

  // getInputBoxes = () => {
  //   if (this.state.showInput) {
  //     return (
  //       <form onSubmit={this.handleSubmit}>
  //         <input
  //           onChange={this.handleInputTitle}
  //           type="text"
  //           placeholder="title of your new list"
  //         />
  //         <input
  //           onChange={this.handleInputTask}
  //           type="text"
  //           placeholder="first item on the list"
  //         />
  //         <button type="submit">submit</button>
  //       </form>
  //     );
  //   }
  // };

  render() {
    return (
      <section>
        {Object.entries(this.state.lists).map(list => (
          <ToDo userID={this.props.userID} list={list[1]} key={list[0]} />
        ))}
        {/* {this.getInputBoxes()} */}
        {/* <button onClick={this.handleAdd}>Add a todo list </button> */}

        {/* {Object.entries(this.state.lists).map((list, index) =>
          console.log(typeof list + "--->" + index)
        )} */}
      </section>
    );
  }
}

export default Lists;
