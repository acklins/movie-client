import React from "react";
import MovieModel from "../../models/movie";

const urlMovies = "http://localhost:4000/api/movies";

function AddMovieForm({ movie, userId }) {
  const addMovieHandler = (event) => {
    event.preventDefault();
    const {
      original_title: title,
      poster_path: img,
      overview: description,
    } = movie;
    console.log("id", userId);
    const movieData = {
      title,
      img,
      description,
      name: title,
      user: [userId],
    };

    MovieModel.create(movieData).then((data) => {
      console.log("movieData succes?", data);
    });
  };

  return <button onClick={addMovieHandler}>Add</button>;
}

export default AddMovieForm;
