import React, { useState } from 'react'
import SearchBar from '../components/SearchBar'
import BreweryContainer from './BreweryContainer'
import "materialize-css/dist/css/materialize.min.css"

const ProfilePage = (props) => {


  //search state
  const [searchTerm, setSearchTerm] = useState('')

  const applySearch = () =>{
     return props.breweries.filter(brewery=> {
       return brewery.name.toLowerCase().includes(searchTerm.toLowerCase())
     })
   }

  return(
    <div className="homepage">
      <p>ProfilePage for {props.user.username}</p>

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

export default ProfilePage
