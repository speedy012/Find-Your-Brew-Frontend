import React from 'react';
// import logo from './logo.svg';
import './App.css';

import NavBar from './containers/NavBar'

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <h1> Find Your Brew </h1>
        <NavBar/>

      </div>
    )
  }
}

export default App;
