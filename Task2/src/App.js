import Users from "./components/cards";
import "./App.css";
import React, { Component } from "react";
import logo from "./assets/icon.png";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { users_data: [], loading: false };
    this.updateState = this.updateState.bind(this);
  }

  updateState() {
    this.setState({ loading: true });

    setTimeout(
      async function () {
        const response = await fetch("https://reqres.in/api/users?page=1");
        const jsonresponse = await response.json();
        this.setState({ users_data: jsonresponse["data"], loading: false });
      }.bind(this),
      500
    );
  }

  render() {
    return (
      <>
        <nav>
          <img src={logo} alt="Logo" />
          <h2>
            <b>User Profile Web App</b>
          </h2>
          <br />
          <button onClick={this.updateState}>
            <b>Get Users</b>
          </button>
          <div className="userdatacontainer">
            <Users loading={this.state.loading} users={this.state.users_data} />
          </div>
        </nav>
      </>
    );
  }
}
export default App;
