import React, { Component } from 'react'

class TM_FILENAME_BASE extends Component {
  render() {
    return (
      <>
        <h2>{this.props.movie}</h2>
        <p>{this.props.description}</p>
      </>
    )
  }
}

export default TM_FILENAME_BASE