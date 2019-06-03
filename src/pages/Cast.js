import React, { Component } from 'react'

class Cast extends Component {
  // return cast
  render() {
    return (
      <section>
        <h4>Actor: {this.props.actor}</h4>
        <p>Character: {this.props.character}</p>
      </section>
    )
  }
}

export default Cast
