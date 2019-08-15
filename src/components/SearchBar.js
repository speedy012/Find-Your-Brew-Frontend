import React from 'react'
import "materialize-css/dist/css/materialize.min.css"

const SearchBar = (props) => {


  const handleChange = (event) => {
    props.setSearchTerm(event.target.value)
  }

  return(
    <div>
      <form className="container input-field col s6">
        <input
          name="searchTerm"
          placeholder="Find Your Brew..."
          value={props.searchTerm}
          onChange={(e) => handleChange(e)}
          className="input black-text"/>
      </form>
    </div>
  )
}


export default SearchBar
