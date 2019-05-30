import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Movie from './Movie'
class Home extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/Movie" exact component={Movie}>
              Movie
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default Home
