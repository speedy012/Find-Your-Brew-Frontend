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

  // user state and auto_login config
  const [user, setUser] = useState(null)
  const token = localStorage.getItem('token')
  const userUrl = 'http://localhost:3000/api/v1/auto_login'
  const userFetchConfig = {
    headers: {
      'Authorization': token
    }
  }

  // brewery state
  const [breweries, setBreweries] = useState([])
  const breweryUrl = "http://localhost:3000/api/v1/breweries"
  const breweryFetchConfig = {
    headers: {
      'Authorization': token
    }
  }

  // logout and login functions for signup and login page
  const logout = (e) => {
    setUser(null)
    localStorage.removeItem("token")
    return <Redirect to="/login" />
  }

  const handleLogin = (user) => {
    setUser(user)
  }

  // state = {
  //   allBreweries: [],
  //   userBreweries: [],
  //   searchTerm: '',
  //   isLogged: false,
  //   userInputName: "",
  //   currentUser: "",
  //   loading: true
  // }
  //
  // handleAddClick = (props) =>{
  //   this.state.currentUser ?
  //     this.upLink(props)
  //     :
  //     window.alert("Log in to favorite a brewery")
  // }
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

  //apply search term


  // console.log(breweries)

  useEffect(()=>{

    //load breweries
    fetch(breweryUrl, breweryFetchConfig)
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      setBreweries(data)
    })

    //auto_login user
    if (token) {
      fetch(userUrl, userFetchConfig)
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
  }, [])  //dependecies go in empty array?

    // if (this.state.loading){
    //   return (
    //     <div className="yellow darken-2 z-depth-3">
    //     <NavBar isLogged={this.state.isLogged}/>
    //       <div className="progress yellow darken-2">
    //         <div className="indeterminate"></div>
    //       </div>
    //     </div>
    //   )
    // } else {
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

        <Route exact path="/" render={(props) => {
          return <HomePage
          user={user}
          breweries={breweries}
          {...props}/>}}
          />
      </Switch>
      </div>
    )
  }



export default App;
