import React, { useState, useEffect } from 'react'
import SearchBar from '../components/SearchBar'
import BreweryContainer from './BreweryContainer'
import "materialize-css/dist/css/materialize.min.css"

const ProfilePage = (props) => {

  //search state
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const applySearch = () => {
     return props.breweries.filter(brewery=> {
       return brewery.name.toLowerCase().includes(searchTerm.toLowerCase())
     })
   }

  //componentDidMount
  useEffect(()=>{
    // console.log("useE", loading)
    props.setLoading(false)
  }, [props.loading, props.breweries])


  return(
    <div className="profilepage">
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearchChange={handleSearchChange}
      />
      <h1>Your Breweries</h1>
      <BreweryContainer
        breweries={applySearch()}
        handleFollow={props.handleFollow}
        note={true}
      />
    </div>
  )
}

export default ProfilePage
