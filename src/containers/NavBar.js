import React from 'react'
import { Link } from 'react-router-dom'
import "materialize-css/dist/css/materialize.min.css"


const NavBar = (props) => {
    // console.log('navbar', props);

  if (!props.user) {
    return(
      <div className="nav-wrapper yellow darken-2">
        <h1 className="z-depth-3"> Find Your Brew </h1>
            <div className="right">
              <Link to="/signup">Sign Up</Link>&nbsp;
              <Link to="/login">Login</Link>&nbsp;
            </div>
      </div>
    )
  } else {
    return(
      <div className="nav-wrapper yellow darken-2">
        <h1 className="z-depth-3"> Find Your Brew </h1>
          <div className="right">
            <h4> Welcome, {props.user.username}!</h4>
            <button id="button" onClick={(e) => props.logout(e)}> Log out </button>
            <Link to="/profile">Profile</Link>&nbsp;
            <Link to="/">Home</Link>&nbsp;
          </div>
      </div>
    )
  }
}

export default NavBar
