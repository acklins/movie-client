import React, { Component } from "react";
import { Link } from "react-router-dom";
import MovieModel from "../models/movie";

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
const ROOT_URL = "https://api.themoviedb.org/3/search/movie";
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

class Home extends Component {
  state = {
    movieToSearch: "",
    movieList: [],
  };
  handleChange = (event) => {
    const movieToSearch = event.target.value;
    this.setState({ movieToSearch });
  };
  handleSubmit = () => {
    const { movieToSearch } = this.state;
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
      <div>
        <nav>
          <Link to={"/user"} style={{ marginRight: ".75em" }}>
            Sign Up
          </Link>
        </nav>
        <h2>One of My Favorite Things during the pandemic, Movies!</h2>
        <h1>Welcome to the movieApp</h1>
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
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default Home;
