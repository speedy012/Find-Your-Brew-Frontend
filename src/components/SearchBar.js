import React from 'react'
import "materialize-css/dist/css/materialize.min.css"

class SearchBar extends React.Component {

  handleChange = (event) => {
    this.props.setSearchTerm(event.target.value)
  }
  render() {
    return(
      <div>
      <form className="container input-field col s6">
        <input
          name="searchTerm"
          placeholder="Find Your Brew..."
          value={this.props.searchTerm}
          onChange={this.handleChange}
          className="input black-text"/>
      </form>
      </div>
    )
  }
}

export default SearchBar
