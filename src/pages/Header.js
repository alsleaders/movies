import React, { Component } from 'react'
import MovienightLogo from './components/Images/Movie_Night.png'

class Header extends Component {
  render() {
    return (
      <>
        <section className="MovieLogoHeader">
          <img src={MovienightLogo} alt="Movie Logo Header" />
        </section>
      </>
    )
  }
}

export default Header
