const urlUsers = "http://localhost:4000/api/users";

class UserModel {
  static index = () => {
    return fetch(`${urlUsers}`)
      .then((res) => res.json())
      .catch((err) => console.log("all function in user api", err));
  };
  static show = (userId) => {
    return fetch(`${urlUsers}/${userId}`)
      .then((res) => res.json())
      .catch((err) => console.log("show 1 user function in movie api", err));
  };
  static create = (userData) => {
    return fetch(`${urlUsers}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .catch((err) =>
        console.log("add a user to db function in movie api", err)
      );
  };
  static update = (userId, updatedUser) => {
    return fetch(`${urlUsers}/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .catch((err) =>
        console.log("update the user db function in the user api", err)
      );
  };
  static destroy = (userId) => {
    return fetch(`${urlUsers}/${userId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .catch((err) => console.log("destroy function in user api", err));
  };
}

export default UserModel;
