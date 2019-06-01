import React, { Component } from 'react'
import Movie from './Movie'
import MoviePoster from '../components/MoviePoster'
// import RandomMovie from '../components/RandomMovie'
import { Link } from 'react-router-dom'

const random = Math.floor(Math.random() * 20)

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
    console.log('I want an array')
    console.log(this)
    // console.log({movies[9]})
  }
  // this is going to need a map
  render() {
    return (
      <div>
        <section>
          This should just be a highlighted random movie
          {/* <p>{{ movies[random] }}</p> */}
        </section>
        {this.state.movies.map((movie, index) => {
          return (
            <main>
              <Movie
                key={index}
                movie={movie.title}
                description={movie.overview}
              />
              <Link to={`/movies/${movie.id}`}>
                <MoviePoster poster={movie.poster_path} alt={movie.title} />
              </Link>
            </main>
          )
        })}
      </div>
    )
  }
}

export default MovieFetch
