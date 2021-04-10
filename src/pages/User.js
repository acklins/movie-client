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
        <h3>During this period</h3>
        <h3>in our lifetime we all need to</h3>
        <h3>keep our spirits positive and</h3>
        <h3>have a laugh ready :-)</h3>
        <h3>Join us for a movie a day!</h3>
      </div>
    );
  }
}
export default User;
