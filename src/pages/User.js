import React, { Component } from "react";
import { Link } from "react-router-dom";
import SignUp from "../components/Forms/SignUp";

class User extends Component {
  render() {
    return (
      <div>
        <h1>Hurray you made it!</h1>
        <h1> Sign Up</h1>
        <SignUp history={this.props.history} />
        <h2>During this period</h2>
        <h2>in our lifetime we all need to</h2>
        <h2>keep our spirits positive and</h2>
        <h2>have a laugh ready :-)</h2>
        <h2>Join us for a movie a day!</h2>
      </div>
    );
  }
}
export default User;
