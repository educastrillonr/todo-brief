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
        querySnapshot.exists
          ? this.setState({
              lists: { ...querySnapshot.data() }
            })
          : this.createDoc();
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

  render() {
    return (
      <section>
        {Object.entries(this.state.lists).map(list => (
          <ToDo userID={this.props.userID} list={list[1]} key={list[0]} />
        ))}
      </section>
    );
  }
}

export default Lists;
