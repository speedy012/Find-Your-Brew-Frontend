import React from 'react'
import "materialize-css/dist/css/materialize.min.css"

const SearchBar = (props) => {

  return(
    <div>
      <form className="container input-field col s4">
        <input
          name="searchTerm"
          placeholder="Find Your Brew..."
          value={props.searchTerm}
          onChange={(e) => props.handleSearchChange(e)}
          className="input black-text"/>
      </form>
    </div>
  )
}


export default SearchBar
