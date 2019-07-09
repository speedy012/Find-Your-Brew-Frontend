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
      handleClick={this.props.handleClick}
      />
    })
  }

  render() {
    return(
      <div>
        {this.props.allBreweries === undefined ? '' : this.displayBreweries()}
      </div>
    )
  }
}

export default BreweryContainer
