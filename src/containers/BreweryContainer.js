import React from 'react'
import BreweryCard from './BreweryCard'
import "materialize-css/dist/css/materialize.min.css"

class BreweryContainer extends React.Component {

  displayBreweries = () =>{
    return this.props.allBreweries.map(brewery =>{
      return <
      BreweryCard
      key={brewery.id}
      brewery={brewery}
      handleClick={this.props.handleAddClick}
      />
    })
  }

  render() {
    return(
      <div className="row container">
        <h1>Local Breweries</h1>
        {this.props.allBreweries === undefined ? '' : this.displayBreweries()}
      </div>
    )
  }
}

export default BreweryContainer
