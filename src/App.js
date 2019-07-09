import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import "materialize-css/dist/css/materialize.min.css"
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
    userBreweries: [],
    searchTerm: ''
  }

  handleClick = (props) =>{
    this.setState({
      userBreweries: [...this.state.userBreweries, props]
    })
  }

  setSearchTerm = (newSearchTerm) =>{
    this.setState({
      searchTerm: newSearchTerm
    })
  }

  applySearch = () =>{
    return this.state.allBreweries.filter(brewery=> {
      return brewery.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
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
        <SearchBar
        searchTerm={this.state.searchTerm}
        setSearchTerm={this.setSearchTerm}
        />
        <BreweryContainer
         allBreweries={this.applySearch()}
         handleClick={this.handleClick}/>
      </React.Fragment>
    )
  }
}

export default App;
