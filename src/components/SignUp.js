import React, { useState } from 'react'

const SignUp = (props) => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleUsername = e => {
    setUsername(e.target.value)
  }

  const handlePassword = e => {
    setPassword(e.target.value)
  }

  const handleSubmit = e => {

    e.preventDefault()
    console.log(username)
    fetch('http://localhost:3000/api/v1/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({
        user:{
          username: username,
          password: password
        }
      })
    })
    .then(res=>res.json())
    .then(data=>{
      if (data.errors) {
        alert(data.errors)
      }
      else {
        // console.log(data)
        localStorage.setItem('token', data.jwt)
        props.handleLogin(data.user)
        props.history.push("/")
      }
    }).catch(console.log)
  }

  return(
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={(e) => handleUsername(e)}
        />
        <input
          type="password" 
          name="password"
          placeholder="password"
          onChange={(e) => handlePassword(e)}
        />
        <input className="submit" type="submit" value="log in" />
      </form>
    </div>
  )
}


export default SignUp
