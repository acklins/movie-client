import React from "react";
import UserModel from "../../models/user";
const urlUsers = "http://localhost:4000/api/users";

class AddUserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
    };
    this.createUser = this.createUser.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  createUser = (userData) => {
    return fetch(`${urlUsers}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((userData) => userData)
      .catch((err) =>
        console.log("add a user to db function in movie api", err)
      );
  };

  handleChange = (event) => {
    let name = event.target.name;
    this.setState({ [name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const userSignupData = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };

    this.createUser(userSignupData).then((newUserData) => {
      console.log("newuserData", newUserData);
      this.props.history.push("/movie", { newUserData });
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-input">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-input">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-input">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
export default AddUserForm;
