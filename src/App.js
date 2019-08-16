import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
// import './App.css';
import "materialize-css/dist/css/materialize.min.css"
import NavBar from './containers/NavBar'
import ProfilePage from './containers/ProfilePage'
import BreweryContainer from './containers/BreweryContainer'
import HomePage from './containers/HomePage'
import SignUp from './components/SignUp'
import Login from './components/Login'
import { Switch, Route, Redirect } from 'react-router-dom';

const App = (props) => {

  //app loader
  const [loading, setLoading] = useState(true)

  // user state, location, and auto_login config
  const [user, setUser] = useState(null)
  const [userLocation, setUserLocation] = useState({ latitude: "0", longitude: "0"})
  const token = localStorage.getItem('token')
  const userUrl = 'http://localhost:3000/api/v1/auto_login'
  // auth token for all fetch requests
  const fetchConfig = {
    headers: {
      'Authorization': token
    }
  }

  // brewery state
  const [breweries, setBreweries] = useState([])
  const breweryUrl = "http://localhost:3000/api/v1/breweries"

  // logout and login functions for signup and login page
  const logout = (e) => {
    setUser(null)
    localStorage.removeItem("token")
    return <Redirect to="/login" />
  }

  const handleLogin = (user) => {
    setUser(user)
  }

  //brewery like and dislike
  const handleFollow = (breweryId) => {

    // post brewery id to users breweries
    fetch(`http://localhost:3000/api/v1/favorite/${user.id}/brewery/${breweryId}`, fetchConfig)
    .then(res=>res.json())
    .then(data=>{
      if (data.errors) {
        alert(data.errors)
      }
      else {
        console.log(`${user.breweries.last.name} has been added to your profile`)
        // localStorage.setItem('token', data.jwt)
        // props.handleLogin(data.user)
        // props.history.push("/")
      }
    }).catch(console.log)
  }

  // state = {
  //   allBreweries: [], done
  //   userBreweries: [],
  //   searchTerm: '', done
  //   isLogged: false,
  //   userInputName: "", done
  //   currentUser: "", done
  //   loading: true done
  // }
  //
  //
  // upLink = (props)=>{
  //   this.addToFavoriteState(props)
  //   // console.log("favorite", props.brewery.id)
  //   fetch("http://localhost:3000/api/v1/favorites", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //         },
  //     body: JSON.stringify({
  //       user_id: this.state.currentUser.id,
  //       brewery_id: props.brewery.id
  //       })
  //     })
  //     .then(r=>r.json())
  //     .then(res=>console.log(res))
  //     .catch(err=> console.log(err))
  // }
  //
  // addToFavoriteState = (props) =>{
  //   let brewery = props.brewery
  //   if (!this.state.userBreweries.includes(brewery)) {
  //     brewery.fave = true
  //     this.setState({
  //       userBreweries: [...this.state.userBreweries, brewery]
  //     })
  //   } else {
  //     brewery.fave = false
  //   }
  //
  // }
  //
  // handleRemoveClick = (props) =>{
  //   let foundBrewery = this.state.userBreweries.find(brewery => brewery.id === props.brewery.id)
  //   foundBrewery.fave = false
  //   console.log(foundBrewery)
  //   let updatedArr = []
  //   this.state.userBreweries.map(brewery =>{
  //     if (brewery.id === foundBrewery.id){
  //
  //     } else {
  //       updatedArr.push(brewery)
  //     }
  //   })
  //   this.setState({
  //     userBreweries: updatedArr,
  //     allBreweries: [...this.state.allBreweries, foundBrewery]
  //   })
  // }
  //

  const filterBreweries = () => {
    return breweries.filter(brewery => {
      if (parseFloat(brewery.latitude) <= parseFloat(userLocation.latitude) + 1
        && parseFloat(brewery.latitude) >= parseFloat(userLocation.latitude) - 1
        && parseFloat(brewery.longitude) <= parseFloat(userLocation.longitude) + 1
        && parseFloat(brewery.longitude) >= parseFloat(userLocation.longitude) - 1)
      { return brewery }
    })
  }

  useEffect(()=>{
    console.log("useEffect triggers")

    //get and set user location
    const success = (pos) => {
      let crd = pos.coords;
      setUserLocation({ latitude: crd.latitude, longitude: crd.longitude })
    }

    const error = (err) => {
      alert(`ERROR(${err.code}): ${err.message}`);
    }
    const userLocation = navigator.geolocation.getCurrentPosition(success, error)

    if (token) {
      //load breweries
      fetch(breweryUrl, fetchConfig)
      .then(res=>res.json())
      .then(data=>{
        setBreweries(data)
        setLoading(false)
      })
      //auto_login user
      fetch(userUrl, fetchConfig)
      .then(res => res.json())
      .then(data => {
        if (data.errors) {
          localStorage.removeItem('token')
          alert(data.errors)
        } else {
          setUser(data)
        }
      })
    }
  }, [loading])  //dependecies go in array per guides, leaving array empty makes useEffect run once?

  //conditional return needs to account for loading breweries, getting user & user location,
  // and presence of localStorage token for login

  if (!token) {
    return (
      <div className="yellow lighten-1">
      <NavBar
        user={user}
        logout={logout}
      />
        <Switch>
          <Route exact path="/login" render={(props) => {
            return <Login
            handleLogin={handleLogin}
            {...props}/>}}
          />
          <Route exact path="/signup" render={(props) => {
            return <SignUp
            handleLogin={handleLogin}
            {...props}/>}}
            />
        </Switch>
      </div>
    )
  } else if (loading && token) {
    return (
      <div className="yellow darken-2 z-depth-3">
      <NavBar />
        <div className="progress yellow darken-2">
          <div className="indeterminate"></div>
        </div>
      </div>
    )
  } else if (!loading && token ){
    console.log("app loaded", breweries[0])
      return (
        <div className="yellow lighten-1">
        <NavBar
          user={user}
          logout={logout}
        />
        <Switch>
          <Route exact path="/login" render={(props) => {
            return <Login
            handleLogin={handleLogin}
            {...props}/>}}
          />
          <Route exact path="/signup" render={(props) => {
            return <SignUp
            handleLogin={handleLogin}
            {...props}/>}}
            />
          //user profile page will display followed breweries w/ability to make notes
          <Route exact path="/profile" render={(props) => {
            return <ProfilePage
            user={user}
            breweries={user.breweries}
            handleFollow={handleFollow}
            {...props}/>}}
            />
          //homepage will display local breweries on a map for user to follow/visit
          <Route exact path="/" render={(props) => {
            return <HomePage
            user={user}
            userLocation={userLocation}
            breweries={filterBreweries()}
            handleFollow={handleFollow}
            {...props}/>}}
            />
        </Switch>
        </div>
      )
    }
  } // comment out for loading troubleshoot



export default App;
