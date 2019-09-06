import React, { useState, useEffect } from 'react'
import SearchBar from '../components/SearchBar'
import BreweryContainer from './BreweryContainer'
import M from "materialize-css/dist/js/materialize.min.js";

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
    M.toast({html: `${brewery.name} has been removed from your profile`});
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

  //conditional return accounts for loading user's breweries

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
        {userBreweries.length === 0 ?
          <h4>You haven't followed any breweries yet...</h4>
          :
          <BreweryContainer
            breweries={applySearch()}
            handleFollow={handleUnfollow}
            note={true}
          />
         }
      </div>
    )
  }
}

export default ProfilePage
