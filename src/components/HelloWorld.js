import React, { Component } from 'react'
import Home from '../pages/Home'
import MovieFetch from '../pages/MovieFetch'

class HelloWorld extends Component {
  render() {
    return (
      <>
        <div className="Maincontainer">
          <Home />
          <section>
            <h1>Hello, Hector! love spaceballs</h1>
            <MovieFetch />
          </section>
        </div>
      </>
    )
  }
}

export default HelloWorld
