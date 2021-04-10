import React, { Component } from "react";
import UserModel from "../models/user";

class Name extends Component {
  state = {
    editName: false,
    updatedName: "",
    user: {},
  };
  editUserHandler = () => {
    this.setState({ editName: !this.state.editName });
  };

  updateUserHandler = () => {
    console.log("usre", this.props.user);
    if (this.state.updatedName) {
      const updatedUserData = {
        name: this.state.updatedName,
      };

      UserModel.update(this.props.user._id, updatedUserData).then((data) => {
        console.log("Updated succes?", data);
        this.setState({
          editName: !this.state.editName,
          updatedName: "",
          user: data,
        });
      });
    } else {
      this.setState({ editName: !this.state.editName });
    }
  };

  handleNameChange = (event) => {
    const updatedName = event.target.value;
    this.setState({ updatedName });
  };

  render() {
    const { editName: isEditNameEnabled, user } = this.state;

    const editNameSection = (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <label htmlFor="nameInput">Edit Name</label>
        <input
          id="nameInput"
          type="text"
          value={this.state.updatedName}
          onChange={this.handleNameChange}
        />
        <button onClick={this.updateUserHandler}>Update</button>
      </div>
    );

    const userName = user?.name ? user?.name : this.props.user.name;

    const showNameSection = (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 style={{ marginRight: ".5em" }}>Welcome {userName}</h1>
        <button onClick={this.editUserHandler}>Edit</button>
      </div>
    );

    return (
      <div className="about">
        <p>{isEditNameEnabled ? editNameSection : showNameSection}</p>
      </div>
    );
  }
}

export default Name;
