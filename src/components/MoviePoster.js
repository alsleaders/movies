import React, { Component } from 'react'

class MoviePoster extends Component {
  render() {
    return (
      <div>
        Hello, I'm just seeing if this works
        <img src={`https://image.tmdb.org/t/p/w500/${this.props.poster}`} />
      </div>
    )
  }
}

export default MoviePoster
