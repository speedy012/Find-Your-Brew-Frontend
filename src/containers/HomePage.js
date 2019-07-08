import React from 'react'
import SearchBar from '../components/SearchBar'
import BreweryContainer from './BreweryContainer'

class HomePage extends React.Component {
  render() {
    return(
      <div className="homepage">
        <p>HomePage</p>
        <SearchBar/>
        <BreweryContainer/>
      </div>
    )
  }
}

export default HomePage
