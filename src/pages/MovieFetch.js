import React, { Component } from 'react'
import Movie from './Movie'
import MoviePoster from '../components/MoviePoster'
import Cast from './Cast'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function getRandomInt() {
  return Math.floor(Math.random() * Math.floor(20))
}

// let movieId = {this.props.match.params.movieId}

class MovieFetch extends Component {
  state = {
    movies: [],
    RandomMovie: {},
    cast: []
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
        console.log(results.cast)
        console.log(results.results[0].title)
        this.setState({
          movies: results.results
        })
        return results.results
      })
      .then(results => {
        let Int = getRandomInt()
        let RandomMovie = results[Int]
        console.log('results array')
        console.log('RandomMovies', RandomMovie)
        console.log(results)
        this.setState({
          RandomMovie: RandomMovie
        })
        console.log('RandomMOVIETEST', this.state.RandomMovie.title)
      })
    //get the cast
    fetch(
      'https://api.themoviedb.org/3/movie/420817/credits?api_key=1ee0e857f325866703436281f4225a69&language=en-US&page=1'
    )
      .then(response => {
        console.log(response)
        return response.json()
      })
      .then(results => {
        console.log(results.cast)
        console.log(results.cast[0].character)
        this.setState({
          cast: results.cast
        })
        return results.cast
      })
  }

  // this is going to need a map
  render() {
    return (
      <>
        <div>
          <main>
            <h3>
              Not sure what you want to see? Here's a random movie, now showing!
            </h3>
            <Movie
              movie={this.state.RandomMovie.title}
              description={this.state.RandomMovie.overview}
            />
            <MoviePoster poster={this.state.RandomMovie.poster_path} />
            <hr />
          </main>
        </div>

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
                <hr />
              </main>
            )
          })}
        </div>

        <div>
          {this.state.cast.map((cast, index) => {
            console.log(cast)
            return (
              <main>
                <Cast
                  key={index}
                  actor={cast.name}
                  character={cast.character}
                />
              </main>
            )
          })}
        </div>
      </>
    )
  }
}

export default MovieFetch
