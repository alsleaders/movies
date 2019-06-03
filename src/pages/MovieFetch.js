import React, { Component } from 'react'
import Movie from './Movie'
import MoviePoster from '../components/MoviePoster'
import Cast from './Cast'
import { Link } from 'react-router-dom'
import Hero from './Hero'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function getRandomInt() {
  return Math.floor(Math.random() * Math.floor(20))
}

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
            <Hero
              title={this.state.RandomMovie.title}
              poster={this.state.RandomMovie.poster_path}
              description={this.state.RandomMovie.overview}
            />
            <hr />
          </main>
        </div>

        <div>
          {this.state.movies.map((movie, index) => {
            return (
              <main>
                <Link to={`/movie/${movie.id}`}>
                  <MoviePoster
                    title={movie.title}
                    poster={movie.poster_path}
                    overview={movie.overview}
                  />
                </Link>
                <hr />
              </main>
            )
          })}
        </div>
      </>
    )
  }
}

export default MovieFetch
