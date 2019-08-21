import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import M from "materialize-css/dist/css/materialize.min.css"


const NavBar = (props) => {

  //state to trigger Materialize css
  const [profileActive, setProfileActive] = useState(false)
  const [localBreweriesActive, setLocalBreweriesActive] = useState(false)

  //interpolate HTML for active vs inactive Materialize css
  const profileHTML = profileActive ? "active" : ""
  const localBreweriesHTML = localBreweriesActive ? "active" : ""

  const handleClick = (e) => {
    e.preventDefault()
    if (e.target.innerHTML === "Profile") {
      setProfileActive(true)
      setLocalBreweriesActive(false)
    } else if (e.target.innerHTML === "Local Breweries") {
      setLocalBreweriesActive(true)
      setProfileActive(false)
    }
  }

  // console.log(active)
  if (!props.user) {
    return(
      <nav>
        <div className="nav-wrapper yellow darken-2">
        <a className="brand-logo black-text">Find Your Brew</a>
        <ul id="nav-mobile z-depth-3" className="right hide-on-med-and-down">
          <li><a><Link to="/login">Login</Link></a></li>
          <li><a><Link to="/signup">Sign up</Link></a></li>
        </ul>
        </div>
      </nav>
    )
  } else {
    return(
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper yellow darken-2">
          <a className="brand-logo black-text">Find Your Brew</a>
          <ul id="nav-mobile z-depth-3" className="right hide-on-med-and-down">
            <li
              onClick={e => handleClick(e)}
              className={profileHTML}>
              <a><Link to="/profile">Profile</Link></a>
            </li>
            <li
              onClick={e => handleClick(e)}
              className={localBreweriesHTML}>
              <a><Link to="/">Local Breweries</Link></a>
            </li>
            <li><a><button id="button" onClick={e => props.logout()}> Log out </button></a></li>
          </ul>
          </div>
        </nav>
    </div>
    )
  }
}

export default NavBar
