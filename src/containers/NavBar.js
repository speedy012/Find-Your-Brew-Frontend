import React from 'react'
import { Link } from 'react-router-dom'


class NavBar extends React.Component {
  render() {
    return(
      <div className="nav-wrapper">
      <React.Fragment>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign Up</Link>
      NavBar
      </React.Fragment>
      </div>
    )
  }
}

export default NavBar
