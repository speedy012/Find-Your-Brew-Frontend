import React from 'react'
import { Link } from 'react-router-dom'
import "materialize-css/dist/css/materialize.min.css"


class NavBar extends React.Component {
  render() {
    // console.log('navbar', this.props);
    return(
      <div className="nav-wrapper yellow darken-2">
        <h1 className="z-depth-3"> Find Your Brew </h1>
        <React.Fragment>
          {!this.props.isLogged ?
            <div className="right">

              <Link to="/">Sign Up</Link>&nbsp;
              <Link to="/login">Login</Link>&nbsp;

            </div>
            :
            <div className="right">
              <h4> Welcome, {this.props.userInputName}!</h4>
              <Link to="/">Sign Out</Link>&nbsp;
              <Link to="/profile">Profile</Link>&nbsp;
            </div>
            }
        </React.Fragment>
      </div>
    )
  }
}

export default NavBar
