import React, { Component } from "react";

class Login extends Component {
  render() {
    return <button onClick={this.props.handleClick}>Log In</button>;
  }
}

export default Login;
