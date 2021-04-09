import React, { Component } from "react";
import AddMovieForm from "../components/Forms/AddMovieForm";
// import EditMovieForm from "../components/Forms/EditMovieForm";

const API_KEY = "?api_key=38146de16baac87de16a3e6d99a6d85a";
const ROOT_URL = "https://api.themoviedb.org/3/search/movie";
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

class Movie extends Component {
  state = {
    movieToSearch: "",
    movieList: [],
    user: {},
  };
  componentDidMount() {
    console.log("props", this.props);
    const userData = this.props.location.state.newUserData;
    if (userData) {
      this.setState({ user: userData });
    }
  }
  handleChange = (event) => {
    const movieToSearch = event.target.value;
    this.setState({ movieToSearch });
  };
  handleSubmit = () => {
    const { movieToSearch } = this.state;

    if (!movieToSearch) return;

    fetch(
      `${ROOT_URL}${API_KEY}&language=en-US&query=${movieToSearch}&page=1&include_adult=false`
    )
      .then((data) => data.json())
      .then((movies) => {
        const movieList = movies.results;
        console.log(movies.results[0]);
        this.setState({ movieList });
      });
  };
  render() {
    const { movieToSearch } = this.state;
    let image;
    if (this.state.movieList.length > 0) {
      image = `${IMAGE_URL}${this.state.movieList[0].poster_path}`;
    }

    return (
      <>
        <div className="about">
          <p>
            <h1>
              {" "}
              Welcome {this.state.user.name
                ? this.state.user.name
                : "Onetta"}{" "}
            </h1>
          </p>
        </div>
        <div>
          <label htmlFor="movieInput">Search for Movies</label>
          <input
            id="movieInput"
            type="text"
            value={movieToSearch}
            onChange={this.handleChange}
          />
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
        {this.state.movieList.length > 0 && (
          <div style={{ display: "flex", width: "80%", margin: "auto" }}>
            <img src={image} />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p>{this.state.movieList[0].original_title}</p>
              <AddMovieForm
                movie={this.state.movieList[0]}
                userId={this.state.user._id}
              />
            </div>
          </div>
        )}
        {/* <button onClick={this.editMovieHandler}>Edit</button> */}
        {/* <button onClick={this.removeMovieHandler}>Remove</button> */}
      </>
      /* <div>
          <label htmlFor="movieInput">Search for Movies</label>
          <input
            id="movieInput"
            type="text"
            value={movieToSearch}
            onChange={this.handleChange}
          />
          <button onClick={this.addMovieHandler}>Add</button>
        </div>
        {this.state.movieList.length > 0 && (
          <div style={{ display: "flex", width: "80%", margin: "auto" }}>
            <img src={image} />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p>{this.state.movieList[2].original_title}</p>
              does that add 2 movies [2]???????
            </div> */
    );
  }
}
export default Movie;
