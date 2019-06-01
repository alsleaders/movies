import React, { Component } from 'react'
import Movie from './Movie'
import MoviePoster from '../components/MoviePoster'

class MovieFetch extends Component {
  state = {
    movies: []
  }

  componentDidMount() {
    fetch(
      'https://api.themoviedb.org/3/movie/now_playing?api_key=1ee0e857f325866703436281f4225a69&language=en-US&page=1'
    )
      .then(response => {
        console.log(response)
        return response.json()
      })
      .then(results => {
        console.log(results)
        console.log(results.results)
        console.log(results.results[0].title)
        this.setState({
          movies: results.results
        })
      })
  }
  // this is going to need a map
  render() {
    return (
      <div>
        {this.state.movies.map((movie, index) => {
          return (
            <main>
              <Movie
                key={index}
                movie={movie.title}
                description={movie.overview}
              />
              <MoviePoster poster={movie.poster_path} />
            </main>
          )
        })}
      </div>
    )
  }
}

export default MovieFetch
