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

  const [user, setUser] = useState(null)

  const logout = (e) => {
    console.log("clicked")
    setUser(null)
    localStorage.removeItem("token")
    return <Redirect to="/" />
  }

  const handleLogin = (user) => {
    console.log(user)
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
  // changesLog = (e) => {
  //   e.preventDefault()
  //   this.setState({isLogged: !this.state.isLogged})
  //   this.props.history.push("/")
  //   fetch("http://localhost:3000/users/2")
  //   .then(res => res.json())
  //   .then(data => {
  //     this.setState({
  //       currentUser: data
  //     })
  //   })
  // }
  //
  // getUserName = (e) => {
  //   e.preventDefault()
  //   console.log(e.target.value)
  //   this.setState({[e.target.name]: e.target.value})
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
  //
  // setSearchTerm = (newSearchTerm) =>{
  //   this.setState({
  //     searchTerm: newSearchTerm
  //   })
  // }
  //
  // applySearch = () =>{
  //   return this.state.allBreweries.filter(brewery=> {
  //     return brewery.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
  //   })
  // }



  // componentDidMount(){
  //   fetch("http://localhost:3000/api/v1/breweries")
  //   .then(res=>res.json())
  //   .then(data=>{
  //     this.setState({
  //       allBreweries: data,
  //       loading: false
  //     })
  //   })
  // }
  console.log(user)

  useEffect(()=>{

    const token = localStorage.getItem('token')

    if (token) {

        fetch('http://localhost:3000/api/v1/auto_login', {
          headers: {
            'Authorization': token
          }
        })
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
  }, [])

  // render() {
    // console.log('app', this.state.currentUser)
    // console.log('app', this.state.currentBrewery)
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
          {...props}/>}}
          />
      </Switch>
      </div>
    )
  }



export default App;
