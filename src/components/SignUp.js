import React from 'react'

class SignUp extends React.Component {
  render() {
    return(
      <div>
      <form >
        <input  placeholder="Enter a username..." name="currentUserInput" value=""/>
        <input  placeholder="first name" name="first name" value=""/>
        <input  placeholder="last name" name="last name" value=""/>
        <input type="submit" value="Log In"/>
      </form>
      <button>Home</button>
      </div>
    )
  }
}

export default SignUp
