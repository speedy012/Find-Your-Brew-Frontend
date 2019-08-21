import React, { useState } from 'react'
import SearchBar from '../components/SearchBar'
import BreweryContainer from './BreweryContainer'

const HomePage = (props) => {

  //home page should be a map like yelp? stretch goal
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const applySearch = () => {
     return props.breweries.filter(brewery=> {
       return brewery.name.toLowerCase().includes(searchTerm.toLowerCase())
     })
   }

  return(
    <div className="homepage">
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearchChange={handleSearchChange}
      />
      <BreweryContainer
        breweries={applySearch()}
        handleFollow={props.handleFollow}
        note={false}
      />
    </div>
  )
}


export default HomePage
