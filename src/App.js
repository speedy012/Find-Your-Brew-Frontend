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
import { withRouter } from 'react-router-dom';

class App extends React.Component {

  state = {
    allBreweries: [],
    userBreweries: [],
    isLogged: false,
    userInputName: ""
  }

  changesLog = (e) => {
    e.preventDefault()
    this.setState({isLogged: !this.state.isLogged})
     this.props.history.push("/")
  }

  getUserName = (e) => {
    e.preventDefault()
    console.log(e.target.value)
    this.setState({[e.target.name]: e.target.value})
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
    // console.log('app', this.state.userBreweries)
    console.log('app', this.state.isLogged)
    return (
      <React.Fragment>
        <h1> Find Your Brew </h1>
        {this.state.isLogged ? <h3> Welcome,{this.state.userInputName}</h3> : null}
        <Switch>
          <Route exact path="/" render={(routerprops) => {
            return <NavBar isLogged={this.state.isLogged}/>
          }}/>
          <Route exact path="/breweries" component={BreweryContainer}/>
          <Route exact path="/login" render={()=> {
            return <Login islogged={this.state.isLogged} userInputName={this.state.userInputName} getUserName={this.getUserName} changesLog={this.changesLog}/>
          }}/>
          <Route exact path="/signup" render={()=> <SignUp/>}/>
        </Switch>
        <BreweryContainer
         allBreweries={this.state.allBreweries}
         handleClick={this.handleClick}/>
      </React.Fragment>
    )
  }
}

export default withRouter(App);
