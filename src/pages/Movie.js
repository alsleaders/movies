import React, { Component } from 'react'
import { Link, Router } from 'react-router-dom'

class Movie extends Component {
  render() {
    return (
      <>
        <h1>This is a movie page and it will have the cast</h1>
        <h2>{this.props.movie}</h2>
        <p>{this.props.description}</p>
      </>
    )
  }
}

export default Movie
