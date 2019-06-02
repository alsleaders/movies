import React, { Component } from 'react'

class RandomMovie extends Component {
  render() {
    return (
      <div>
        I should not have to do this
        {this.props.movies[Math.floor(Math.random() * 20)]}
      </div>
    )
  }
}

export default RandomMovie
