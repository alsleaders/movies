import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class HelloWorld extends Component {
  render() {
    return (
      <section>
        <h1>Hello, Hector! love spaceballs</h1>
        <Link to="/">Home</Link>
      </section>
    )
  }
}

export default HelloWorld
