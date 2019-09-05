import React from "react";
import { moviesData } from "../moviesData";
import MovieItem from "./MovieItem";

// console.log(moviesData);

// function removeMovie(movie) {
//   const updateMovies = this.state.movies.filter(function(item) {
//     return item.id !== movie.id;
//   });
//   console.log(updateMovies);
// }


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: moviesData
    }
    // this.removeMovie = this.removeMovie.bind(this);
  }

  removeMovie = movie => {
    const updateMovies = this.state.movies.filter(function(item) {
      return item.id !== movie.id;
    });
    // console.log(updateMovies);

    this.setState({
      movies: updateMovies
    });

  }

  render () {
    console.log("render", this.state, this);
    return (
      <div>
        { this.state.movies.map(movie => {
          return <MovieItem
              key={movie.id}
              movie ={movie}
              removeMovie = {this.removeMovie}
            />;
        })}
      </div>
    );
  }
}
export default App;
