import React, { Component } from 'react'

class Hero extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
        <img src={`https://image.tmdb.org/t/p/w500/${this.props.poster}`} />
      </div>
    )
  }
}

export default Hero
