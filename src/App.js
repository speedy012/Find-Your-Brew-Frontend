import React from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './containers/NavBar'
import ProfilePage from './containers/ProfilePage'
import BreweryContainer from './containers/BreweryContainer'
import SearchBar from './components/SearchBar'
import { Route, Switch } from 'react-router-dom'
import SignUp from './components/SignUp'
import Login from './components/Login'

class App extends React.Component {

  state = {
    allBreweries: [],
    userBreweries: []
  }

  handleClick = (props) =>{
    this.setState({
      userBreweries: [...this.state.userBreweries, props]
    })
  }

  componentDidMount(){
    fetch("http://localhost:3000/breweries")
    .then(res=>res.json())
    .then(data=>{
      this.setState({
        allBreweries: data
      })
    })
  }

  render() {
    console.log(this.state.userBreweries)
    return (
      <React.Fragment>
        <h1> Find Your Brew </h1>
        <Switch>
          <Route exact path="/" render={(routerprops) => <NavBar/>}/>
          <Route exact path="/breweries" component={BreweryContainer}/>
          <Route exact path="/login" render={()=> <Login/>}/>
          <Route exact path="/signup" render={()=> <SignUp/>}/>
        </Switch>
        <BreweryContainer
         allBreweries={this.state.allBreweries}
         handleClick={this.handleClick}/>
      </React.Fragment>
    )
  }
}

export default App;
