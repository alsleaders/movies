import React, { Component } from 'react'
import Movie_Night from './Components/Images/Movie_Night.png'
class Header extends Component {
  render() {
    return (
      <section className="MovieLogoHeader">
        <img src={Movie_Night} alt="Movie Logo Header" />
      </section>
    )
  }
}

export default Header
