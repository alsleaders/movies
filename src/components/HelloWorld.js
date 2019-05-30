import React, { Component } from 'react'
import Home from '../pages/Home'
import MovieFetch from '../pages/MovieFetch'

class HelloWorld extends Component {
  render() {
    return (
      <>
        <nav>
          <Home />
        </nav>
        <section>
          <h1>Hello, Hector! love spaceballs</h1>
          <MovieFetch />
        </section>
      </>
    )
  }
}

export default HelloWorld
