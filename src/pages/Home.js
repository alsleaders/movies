import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
class Home extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" exact component={Home}>
              Home
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default Home
