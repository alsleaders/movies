import React, { Component } from 'react'

class Cast extends Component {
  // return cast
  render() {
    return (
      <section>
        <h3>Actor: {this.props.actor}</h3>
        <h4>Character: {this.props.character}</h4>
      </section>
    )
  }
}

export default Cast
