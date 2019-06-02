import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Movie from './Movie'
import NavBar from '../pages/NavBar'
import MovieFetch from './MovieFetch'
import Cast from './Cast'

class Home extends Component {
  render() {
    return (
      <>
        <NavBar />
        <div>
          <Router>
            <Switch>
              <Route path="/" exact component={MovieFetch} />
              <Route path="/movie/:movieId" component={MovieFetch} />
              <Route path="/cast" component={Cast} />
              <MovieFetch />
              <Movie />
              <Cast />
            </Switch>
          </Router>
        </div>
      </>
    )
  }
}

export default Home
