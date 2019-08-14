import React from 'react'
import { Link } from 'react-router-dom'
import "materialize-css/dist/css/materialize.min.css"


const NavBar = (props) => {
    // console.log('navbar', this.props);
    return(
      <div className="nav-wrapper yellow darken-2">
        <h1 className="z-depth-3"> Find Your Brew </h1>
        <React.Fragment>
          {!props.user ?
            <div className="right">
              <Link to="/signup">Sign Up</Link>&nbsp;
              <Link to="/login">Login</Link>&nbsp;
            </div>
            :
            <div className="right">
              <h4> Welcome, {props.userInputName}!</h4>
              <button id="button" onClick={props.logout}> Log out </button>
              <Link to="/profile">Profile</Link>&nbsp;
            </div>
            }
        </React.Fragment>
      </div>
    )
}

export default NavBar
