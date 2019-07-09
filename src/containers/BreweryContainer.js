import React from 'react'
import BreweryCard from './BreweryCard'

class BreweryContainer extends React.Component {

  displayBreweries = () =>{
    return this.props.allBreweries.map(brewery =>{
      return <
      BreweryCard
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
