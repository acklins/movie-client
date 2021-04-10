import React, { useState } from "react";
import UserModel from "../models/user";

function User(props) {
  const [name, setName] = useState("");

  function editUserHandler(event) {
    event.preventDefault();

    UserModel.update({ name }).then((data) => {
      props.history.push("/movies");
    });
  }
  return (
    <div>
      <form editUserHandler={this.editUserHandle}>
        <div className="form-input">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
      </form>
    </div>
  );
}
export default User;
