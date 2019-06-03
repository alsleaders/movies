import React, { Component } from 'react'
import { Link, Router } from 'react-router-dom'
import Cast from './Cast'

class Movie extends Component {
  state = {
    cast: [],
    movie: {}
  }
  componentDidMount() {
    let movieID = this.props.match.params.movieID
    fetch(
      `https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=1ee0e857f325866703436281f4225a69&language=en-US&page=1`
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
      })
    fetch(
      `https://api.themoviedb.org/3/movie/${movieID}?api_key=1ee0e857f325866703436281f4225a69&language=en-US&page=1`
    )
      .then(response => {
        return response.json()
      })
      .then(results => {
        this.setState({
          movie: results
        })
      })
  }
  render() {
    return (
      <>
        <h2>{this.state.movie.title}</h2>
        <p>{this.state.movie.overview}</p>
        {this.state.cast.map((cast, index) => {
          console.log(cast)
          return (
            <div>
              <Cast key={index} actor={cast.name} character={cast.character} />
            </div>
          )
        })}
      </>
    )
  }
}

export default Movie
