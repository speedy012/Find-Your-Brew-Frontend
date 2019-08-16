import React, { useState } from 'react'
import SearchBar from '../components/SearchBar'
import BreweryContainer from './BreweryContainer'

const HomePage = (props) => {

  //search state
  const [searchTerm, setSearchTerm] = useState('')

  const applySearch = () =>{
     return props.breweries.filter(brewery=> {
       return brewery.name.toLowerCase().includes(searchTerm.toLowerCase())
     })
   }

  return(
    <div className="homepage">
      <p>HomePage</p>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={props.setSearchTerm}
      />
      <BreweryContainer
        breweries={props.breweries}
        searchTerm={searchTerm}
        setSearchTerm={props.setSearchTerm}
        applySearch={props.applySearch}/>
    </div>
  )
}


export default HomePage
