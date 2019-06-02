import React, { Component } from 'react'
import { Link, Router } from 'react-router-dom'

class Movie extends Component {
  render() {
    return (
      <>
        <h2>{this.props.movie}</h2>
        <p>{this.props.description}</p>
      </>
    )
  }
}

export default Movie
