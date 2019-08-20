import React from 'react'
import { Link } from 'react-router-dom'
import "materialize-css/dist/css/materialize.min.css"


const NavBar = (props) => {
    // console.log('navbar', props);

  if (!props.user) {
    return(
      <div className="nav-wrapper yellow darken-2">
        <div className="z-depth-3">
        <h1>Find Your Brew</h1>
            <div className="right">
              <Link to="/signup">Sign Up</Link>&nbsp;
              <Link to="/login">Login</Link>&nbsp;
            </div>
         </div>
      </div>
    )
  } else {
    return(
      <div className="nav-wrapper yellow darken-2">
        <div className="z-depth-3">
          <h1> Find Your Brew </h1>
          <div className="right">
            <h4> Welcome, {props.user.username}!</h4>
              <Link to="/profile">Profile</Link>&nbsp;
              <Link to="/">Local Breweries</Link>&nbsp;
              <button id="button" onClick={e => props.logout()}> Log out </button>
          </div>
        </div>
      </div>
    )
  }
}

export default NavBar
