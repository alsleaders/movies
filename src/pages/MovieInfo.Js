import React, { Component } from 'react'
// Need poster,overview,and rating
class MovieInfo extends Component {
  render() {
    return (
      <div>
        {this.props.poster}
        {this.props.overview}
        {this.props.rating}
      </div>
    )
  }
}

export default MovieInfo
