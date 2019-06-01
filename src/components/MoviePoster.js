import React, { Component } from 'react'

class MoviePoster extends Component {
  render() {
    return (
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${this.props.poster}`}
          alt={this.props.alt}
        />
      </div>
    )
  }
}

export default MoviePoster
