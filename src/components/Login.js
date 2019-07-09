import React from 'react'
import NavBar from '../containers/NavBar'

class Login extends React.Component {
  render() {
    return(
      <div>
      <NavBar/>
        <form >
          <input  placeholder="Enter a username..." name="" value=""/>
          <input type="submit" value="Log In"/>
        </form>
      </div>
    )
  }
}

export default Login
