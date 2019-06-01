import React, { Component } from 'react'

class MoviePoster extends Component {
  render() {
    const path = this.props.poster.split('.').map((word, index) => {
      console.log({ word })
    })
    console.log('did this work at all')

    return (
      <div>
        Hello, I'm just seeing if this works
        <h3>
          {path.map(path => {
            console.log(path)
            return path
          })}
        </h3>
      </div>
    )
  }
}

export default MoviePoster
