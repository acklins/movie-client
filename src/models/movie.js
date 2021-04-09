const urlMovies = "http://localhost:4000/api/movies";

class MovieModel {
  static index = () => {
    return fetch(`${urlMovies}`)
      .then((res) => res.json())
      .catch((err) => console.log("all function in movie api", err));
  };
  static show = (movieId) => {
    return fetch(`${urlMovies}/${movieId}`)
      .then((res) => res.json())
      .catch((err) => console.log("show 1 movie function in movie api", err));
  };
  static create = (movieData) => {
    return fetch(`${urlMovies}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movieData),
    })
      .then((res) => res.json())
      .catch((err) =>
        console.log("add a movie to db function in movie api", err)
      );
  };
  static update = (movieId, updatedMovie) => {
    return fetch(`${urlMovies}/${movieId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedMovie),
    })
      .then((res) => res.json())
      .catch((err) =>
        console.log("update th emovie db function in movie api", err)
      );
  };
  static destroy = (movieId) => {
    return fetch(`${urlMovies}/${movieId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .catch((err) => console.log("destroy function in movie api", err));
  };
}

export default MovieModel;
