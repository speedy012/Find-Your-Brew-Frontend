import React from 'react'
import { Link } from 'react-router-dom'


class NavBar extends React.Component {
  render() {
    console.log('navbar', this.props);
    return(

      <div className="nav-wrapper">
      <React.Fragment>
        {!this.props.isLogged ?
          <div>
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
