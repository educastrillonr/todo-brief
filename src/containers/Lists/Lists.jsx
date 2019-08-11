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

  render() {
    return (
      <section>
        {Object.entries(this.state.lists).map(list => (
          <ToDo list={list[1]} key={list[0]} />
        ))}
        {Object.entries(this.state.lists).map((list, index) =>
          console.log(typeof list + "--->" + index)
        )}
      </section>
    );
  }
}

export default Lists;
