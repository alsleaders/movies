import React, { Component } from 'react'
import Home from './pages/Home.js'
import Header from './pages/Header.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { styles } from 'ansi-colors'
import MovieFetch from './pages/MovieFetch.js'
import Footer from './pages/Footer'

class App extends Component {
  render() {
    return (
      <>
        <div className="Maincontainer">
          <Header />
          <Home />
          <Footer />
        </div>
      </>
    )
  }
}

export default App
