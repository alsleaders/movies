import React, { Component } from 'react'
import Home from '../pages/Home'

class HelloWorld extends Component {
  render() {
    return (
      <>
        <nav>
          <Home />
        </nav>
        <section>
          <h1>Hello, Hector! love spaceballs</h1>
        </section>
      </>
    )
  }
}

export default HelloWorld
