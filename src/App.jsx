import React, { Component } from "react";

import NameFilter from "./components/nameFilter";
import RatingFilter from "./components/RatingFilter";
import MovieList from "./components/MovieList";

import "./App.css";

const theMoviesList = [
  {
    id: 1,
    title: "THE PREDATOR",
    img:
      "https://resizing.flixster.com/PtKfFfpbUm1pTOrrsz9bk6itrP8=/206x305/v1.bTsxMjc3OTIyNztwOzE3OTIyOzEyMDA7ODAwOzExOTA",
    year: "2018",
    rate: "5"
  },
  {
    id: 2,
    title: "THE DOMESTICS",
    img:
      "https://resizing.flixster.com/RRNbzGSgCuZ4dvScWA8JaG11JVI=/206x305/v1.bTsxMjc3NDkwODtqOzE3OTIyOzEyMDA7ODAwOzExODU",
    year: "2017",
    rate: "4"
  },
  {
    id: 3,
    title: "THE LITTLE STRANGER ",
    img:
      "https://resizing.flixster.com/0Ij88KadP-lZIc8WJV14KbQnGS8=/206x305/v1.bTsxMjc2NDcwNztqOzE3OTIyOzEyMDA7NDA1MDs2MDAw",
    year: "2019",
    rate: "3"
  },
  {
    id: 4,
    title: "UNBROKEN: PATH TO REDEMPTION",
    img:
      "https://resizing.flixster.com/8IkTAUE4d2k_s3OboB7x14x9UPs=/206x305/v1.bTsxMjY5MjM0MztqOzE3OTIxOzEyMDA7Njk1OzEwMjQ",
    year: "2015",
    rate: "2"
  },
  {
    id: 5,
    title: "THE MEG",
    img:
      "https://resizing.flixster.com/WzKnd0jlxkS-8OHnCzkKM4JSPk0=/206x305/v1.bTsxMjc5NDg2NTtqOzE3OTIzOzEyMDA7Mjc2NDs0MDk2",
    year: "2007",
    rate: "1"
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minrating: 1,
      movies: theMoviesList,
      titleFilter: ""
    };
    // -----test .addNewMovie
    // setTimeout(() => {
    //   this.addNewMovie({});
    // }, 5000);
  }
  // ----------------------

  addNewMovie(newMovie) {
    this.setState({ movie: this.state.movies.concat(newMovie) });
  }
  moviesFiltred() {
    return this.state.movies.filter(
      el =>
        el.rate >= this.state.minrating &&
        el.title.toLowerCase().includes(this.state.titleFilter.trim())
    );
  }

  render() {
    return (
      <div className="App">
        <header className="movie-app-header">
          <NameFilter
            value={this.state.titleFilter}
            onChange={newTitleFilter => {
              this.setState({
                titleFilter: newTitleFilter
              });
            }}
          />
          <RatingFilter
            count={this.state.minrating}
            onChange={newRating => {
              this.setState({
                minrating: newRating
              });
            }}
          />
        </header>
        <main className="movie-app-list">
          <MovieList movielist={this.moviesFiltred()
          }
          onAddMovie={(newMovie) => this.addNewMovie(newMovie)} /> 
        </main>
      </div>
    );
  }
}

export default App;
//clic stars => information mil rating => ratingfilter lil app
//rating => add props onChange
