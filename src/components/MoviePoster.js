import React, { Component } from 'react'

class MoviePoster extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.overview}</p>
        <img
          class="MoviePoster"
          src={`https://image.tmdb.org/t/p/w500/${this.props.poster}`}
          alt={this.props.alt}
        />
      </div>
    )
  }
}

export default MoviePoster
