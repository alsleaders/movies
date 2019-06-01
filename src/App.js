import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { styles } from 'ansi-colors'

class App extends Component {
  render() {
    return <HelloWorld />
  }
}

export default App
