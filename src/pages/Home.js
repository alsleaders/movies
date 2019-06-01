import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Movie from './Movie'
import NavBar from '../pages/NavBar'

class Home extends Component {
  render() {
    return (
      <>
        <NavBar />
        <div>
          <Router>
            <Switch>
              <Route path="/Movie" exact component={Movie}>
                Movie
              </Route>
            </Switch>
          </Router>
        </div>
      </>
    )
  }
}

export default Home
