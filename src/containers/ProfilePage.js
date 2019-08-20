import React, { useState, useEffect } from 'react'
import SearchBar from '../components/SearchBar'
import BreweryContainer from './BreweryContainer'
import "materialize-css/dist/css/materialize.min.css"

const ProfilePage = (props) => {

  const [loading, setLoading] = useState(true)

  //user fetch config
  const token = localStorage.getItem('token')
  const userUrl = 'http://localhost:3000/api/v1/profile'
  // auth token for all fetch requests
  const fetchConfig = {
    headers: {
      'Authorization': token
    }
  }

  // user breweries state
  const [userBreweries, setUserBreweries] = useState([])

  //search state and filter
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const applySearch = () => {
     return userBreweries.filter(brewery=> {
       return brewery.name.toLowerCase().includes(searchTerm.toLowerCase())
     })
   }

  //
  const handleUnfollow = (brewery) => {
    // post brewery id to users breweries
    console.log(brewery)
    fetch(`http://localhost:3000/api/v1/favorite/${props.user.id}/brewery/${brewery.id}`, fetchConfig)
    setLoading(true)
  }

  //componentDidMount
  useEffect(()=>{

    fetch(userUrl, fetchConfig)
    .then(res => res.json())
    .then(data => {
      if (data.errors) {
        alert(data.errors)
      } else {
        setUserBreweries(data.user.breweries)
        setLoading(false)
      }
    })

  }, [loading])

  console.log(userBreweries)
  if (loading) {
    return (
      <div className="yellow lighten-1">
        <h4> Loading your breweries... </h4>
        <div className="progress yellow darken-2">
          <div className="indeterminate"></div>
        </div>
      </div>
    )
  } else {
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
          handleFollow={handleUnfollow}
          note={true}
        />
      </div>
    )
  }
}

export default ProfilePage
