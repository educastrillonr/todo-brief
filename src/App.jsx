import React, { Component } from "react";
import Login from "./components/Login";
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
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        // const token = result.credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        this.setState({
          user
        });
        // navigate("OnboardingPage");

        // ...
      })

      .catch(function(error) {
        console.log(error);
        // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // // The email of the user's account used.
        // const email = error.email;
        // // The firebase.auth.AuthCredential type that was used.
        // const credential = error.credential;
        // ...
      });
  };

  render() {
    return (
      <div className="App">
        <Login handleClick={this.signIn} />
      </div>
    );
  }
}

export default App;
