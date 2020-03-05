import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Grid from "./components/grid";
import Pagination from "./components/pagination";
import Filter from "./components/filter";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      searchInput: "",
      totalResults: 0,
      currentPage: 1,
      totalPages: 1
    };
    this.apiKey = process.env.REACT_APP_API; //"f23de9a3c4e41599fd3a141124625c10"
    console.log("App constructor", this.props);
  }

  handleSubmit = e => {
    e.preventDefault();
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchInput}`
    )
      .then(data => data.json())
      .then(data => {
        console.log(data);
        this.setState({
          movies: [...data.results],
          totalResults: data.total_results
        });
      });
  };

  handlePopTv = e => {
    e.preventDefault();
    fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${this.apiKey}&language=en-US&page=1`
    )
      .then(data => data.json())
      .then(data => {
        console.log(data);
        this.setState({
          movies: [...data.results],
          totalResults: data.total_results
        });
      });
  };

  handleRatedTv = e => {
    e.preventDefault();
    fetch(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${this.apiKey}&language=en-US&page=1`
    )
      .then(data => data.json())
      .then(data => {
        console.log(data);
        this.setState({
          movies: [...data.results],
          totalResults: data.total_results
        });
      });
  };

  handlePopFilm = e => {
    e.preventDefault();
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=en-US&page=1`
    )
      .then(data => data.json())
      .then(data => {
        console.log(data);
        this.setState({
          movies: [...data.results],
          totalResults: data.total_results
        });
      });
  };

  handleRatedFilm = e => {
    e.preventDefault();
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${this.apiKey}&language=en-US&page=1`
    )
      .then(data => data.json())
      .then(data => {
        console.log(data);
        this.setState({
          movies: [...data.results],
          totalResults: data.total_results
        });
      });
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({ searchInput: e.target.value });
  };

  nextPage = pageNumber => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchInput}&page=${pageNumber}`
    )
      .then(data => data.json())
      .then(data => {
        console.log(data);
        this.setState({ movies: [...data.results], currentPage: pageNumber });
      });
  };

  componentDidMount() {
    console.log("App- Mounted");
  }

  render() {
    console.log("App- Rendered");
    const numberPages = Math.floor(this.state.totalResults / 20);
    return (
      <React.Fragment>
        <NavBar
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <Filter
          handlePopTv={this.handlePopTv}
          handleRatedTv={this.handleRatedTv}
          handlePopFilm={this.handlePopFilm}
          handleRatedFilm={this.handleRatedFilm}
        />
        <Grid movies={this.state.movies} />
        {this.state.totalResults > 20 ? (
          <Pagination
            pages={numberPages}
            nextPage={this.nextPage}
            currentPage={this.state.currentPage}
          />
        ) : (
          ""
        )}
      </React.Fragment>
    );
  }
}

export default App;
