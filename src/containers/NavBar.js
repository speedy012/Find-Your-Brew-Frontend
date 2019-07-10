import React from 'react'
import { Link } from 'react-router-dom'
import "materialize-css/dist/css/materialize.min.css"


class NavBar extends React.Component {
  render() {
    // console.log('navbar', this.props);
    return(
      <div className="nav-wrapper yellow darken-2">
      <i className="material-icons">local_drink</i>
      <h1> Find Your Brew </h1>
      <React.Fragment>
        {!this.props.isLogged ?
          <div className="right">
            <Link to="/">Home</Link>&nbsp;
            <Link to="/login">Login</Link>&nbsp;

          </div>
          :
          <div>
            <Link to="/">Home</Link>&nbsp;
            <Link to="/profile">Profile</Link>&nbsp;
          </div>
          }
      </React.Fragment>
      </div>
    )
  }
}

export default NavBar
