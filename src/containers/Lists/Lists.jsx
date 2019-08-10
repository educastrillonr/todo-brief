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
      .get()
      .then(querySnapshot => {
        // cards becomes an array of objects returned from the collection
        const lists = querySnapshot.docs.map(doc => {
          return { ...doc.data(), docId: doc.id }; // Need to get each document id and add to card object
        });
        console.log(Object.values(lists[0].list));

        // setting cards in component state equal to data in collection
        // Initially set filtered list equal to the cards pulled from the database
        this.setState({
          lists: lists
        });
      });
  }

  render() {
    return (
      <section>
        {this.state.lists.map((list, index) => (
          <ToDo list={list} key={index} />
        ))}
      </section>
    );
  }
}

export default Lists;
