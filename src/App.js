import React, { Component } from 'react'
// import HelloWorld from './components/HelloWorld'
import Home from './pages/Home.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { styles } from 'ansi-colors'

class App extends Component {
  render() {
    return (
      <>
        <div className="Maincontainer">
          <Home />
          <section>
            <h1>Hello, Hector! love spaceballs</h1>
          </section>
        </div>
      </>
    )
  }
}

export default App
