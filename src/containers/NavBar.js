import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../containers/NavBar'
import M from "materialize-css/dist/css/materialize.min.css"



const NavBar = (props) => {

  //state to trigger Materialize css
  const [profileActive, setProfileActive] = useState(false)
  const [localBreweriesActive, setLocalBreweriesActive] = useState(false)

  //interpolate HTML for active vs inactive Materialize css
  const profileHTML = profileActive ? "active" : ""
  const localBreweriesHTML = localBreweriesActive ? "active" : ""
  //
  // const [search, setSearch] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    if (e.target.innerHTML === "My Profile") {
      setProfileActive(true)
      setLocalBreweriesActive(false)
    } else if (e.target.innerHTML === "Local Breweries") {
      setLocalBreweriesActive(true)
      setProfileActive(false)
    }
  }

  //recomment to move searchbar to button icon
  // const displaySearchBar = () => {
  //   console.log("clicked")
  //   return (
  //     <SearchBar
  //     searchTerm={props.searchTerm}
  //     setSearchTerm={props.setSearchTerm}
  //     handleSearchChange={props.handleSearchChange}/>
  //   )
  // }
  // <a
  // class="btn-floating btn-large waves-effect waves-light yellow darken-2 black-text"
  // onClick={e => setSearch(!search)}>
  //   <i class="material-icons">search</i>
  // </a>
  // {search ? displaySearchBar() : null }

  // console.log(active)
  if (!props.user) {
    return(
      <nav>
        <div  className="nav-wrapper yellow darken-2">
          <a href="/profile" className="brand-logo black-text">Find Your Brew</a>
          <ul id="nav-mobile z-depth-3" className="right hide-on-med-and-down">
            <li><a href="/login"><Link to="/login">Login</Link></a></li>
            <li><a href="/signup"><Link to="/signup">Sign up</Link></a></li>
          </ul>
        </div>
      </nav>
    )
  } else {
    return(
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper yellow darken-2">
            <a href="/profile" className="brand-logo black-text">Find Your Brew</a>
            <ul id="nav-mobile z-depth-3" className="right hide-on-med-and-down black-text">
              <li
                onClick={e => handleClick(e)}
                className={profileHTML}>
                <a href="/profile"><Link to="/profile">My Profile</Link></a>
              </li>
              <li
                onClick={e => handleClick(e)}
                className={localBreweriesHTML}>
                <a href="/"><Link to="/">Local Breweries</Link></a>
              </li>
              <li>
                <a href="/"><Link to="/" onClick={e => props.logout()}> Log Out </Link></a>
              </li>
            </ul>
          </div>
        </nav>
    </div>
    )
  }
}

export default NavBar
