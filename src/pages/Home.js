import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Movie from './Movie'
import NavBar from '../pages/NavBar'
import MovieFetch from './MovieFetch'

class Home extends Component {
  render() {
    return (
      <>
        <NavBar />
        <div>
          <Router>
            <Switch>
              <Route path="/" exact component={MovieFetch} />
              <Route path="/movies/:movieId" component={Movie} />
              <MovieFetch />
              <Movie />
            </Switch>
          </Router>
        </div>
      </>
    )
  }
}

export default Home
