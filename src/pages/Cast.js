import React, { Component } from 'react'

class Cast extends Component {
  // return cast
  render() {
    return (
      <section>
        <p>I want to see if the cast button is working</p>
        <h3>Actor: {this.props.actor}</h3>
        <h4>Character: {this.props.character}</h4>
      </section>
    )
  }
}

export default Cast
