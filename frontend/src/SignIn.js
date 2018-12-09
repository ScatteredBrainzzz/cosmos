import React, { Component } from "react";
import "./css/main.css";

class Personal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      showPopup: false,
      loggedIn: false
    };
  }
  toggleSignInPopup = () => {
    this.setState({ showPopup: !this.state.showPopup });
  };
  onSubmit = () => {
    this.setState({ loggedIn: true });
  };
  render() {
    return (
      <>
        {this.state.loggedIn ? (
          <p>{this.state.username}</p>
        ) : this.state.showPopup ? (
          <form>
            <input
              type="text"
              value={this.state.username}
              placeholder="Username"
              onChange={event =>
                this.setState({ username: event.target.value })
              }
            />
            <input
              type="password"
              value={this.state.password}
              placeholder="Password"
              onChange={event =>
                this.setState({ password: event.target.value })
              }
            />
            <button type="submit" value="Submit" onClick={this.onSubmit}>Submit</button>
          </form>
        ) : (
          <div className="signin-link" onClick={this.toggleSignInPopup}>
            <p className="sign-in-text">Sign Me In</p>
          </div>
        )}
      </>
    );
  }
}

export default Personal;
