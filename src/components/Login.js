import React from 'react'
import NavBar from '../containers/NavBar'

class Login extends React.Component {
  render() {
    return(
      <div>
      <NavBar/>
        {!this.props.isLogged?
          <form onSubmit={this.props.changesLog}>
            <input onChange={this.props.getUserName} placeholder="Enter a username..." name="userInputName" value={this.props.userInputName}/>
            <input type="submit" value="Log In"/>
          </form>
          :
          null
        }
      </div>
    )
  }
}

export default Login
