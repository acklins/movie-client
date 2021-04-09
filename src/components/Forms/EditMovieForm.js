import React from "react";
import MovieModel from "../../models/movie";

function EditMovieForm({ movieId }) {
  MovieModel.update(movie).then((data) => {
    console.log(data);
  });
  const EditMovieHandler = (event) => {
    event.preventDefault();
    const {
      original_title: title,
      poster_path: img,
      overview: description,
    } = movie;

    const movieData = {
      title,
      img,
      description,
      name: title,
    };
    updateMovie(movieData).then((movieData) => {
      console.log("movieData succes?", movieData);
    });
  };

  return <button onClick={EditMovieHandler}>Edit</button>;
}

export default EditMovieForm;
