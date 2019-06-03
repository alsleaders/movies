import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavBar extends Component {
  render() {
    return (
      <>
        <div className="topnav">
          <Link to="/">Home</Link>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
      </>
    )
  }
}

export default NavBar
