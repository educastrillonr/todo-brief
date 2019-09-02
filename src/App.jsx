import React, { Component } from "react";
import Login from "./components/Login";
import Lists from "./containers/Lists";
import firebase, { provider } from "./firebase";
import "./App.css";

class App extends Component {
  state = {
    user: null
  };
  signIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        const user = result.user;
        this.setState({
          user
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return !this.state.user ? (
      <div className="App">
        <Login handleClick={this.signIn} />
      </div>
    ) : (
      <div className="App">
        <Lists userID={this.state.user.uid} />
      </div>
    );
  }
}

export default App;
