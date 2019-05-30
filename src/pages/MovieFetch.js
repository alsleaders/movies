import React, { Component } from 'react'

class MovieFetch extends Component {
  componentDidMount() {
    fetch(
      'https://api.themoviedb.org/3/movie/now_playing?api_key=1ee0e857f325866703436281f4225a69&language=en-US&page=1'
    )
      .then(response => {
        console.log(response)
        return response.json()
      })
      .then(results => {
        console.log(results)
        console.log(results.results)
        console.log(results.results[0].title)
        return results
      })
  }
  // this is going to need a map
  render() {
    return <div />
  }
}

export default MovieFetch
