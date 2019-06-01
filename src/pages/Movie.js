import React, { Component } from 'react'

class TM_FILENAME_BASE extends Component {
  render() {
    return (
      <>
        <h2>{this.props.movie}</h2>
        <p>{this.props.description}</p>
        <img src={this.props.poster} />
      </>
    )
  }
}

export default TM_FILENAME_BASE
