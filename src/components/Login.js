import React, { useState } from 'react'
// import { useFetch } from '../hooks/fetch.js'


const Login = (props) => {

  //login form state and fetch hook initialization
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')


  //fetch config
  const url = 'http://localhost:3000/api/v1/login'
  const fetchConfig = {
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
  }

  const handleUsername = e => {
    setUsername(e.target.value)
  }

  const handlePassword = e => {
    setPassword(e.target.value)
  }

  const handleSubmit = e => {

    e.preventDefault()
    fetch(url, fetchConfig)
    .then(res=>res.json())
    .then(data=>{
      if (data.errors) {
        alert(data.errors)
      }
      else {
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
          <input type="submit" value="log in" />
        </form>
    </div>
  )
}


export default Login
