import React from 'react'
import BreweryCard from './BreweryCard'
import "materialize-css/dist/css/materialize.min.css"

const BreweryContainer = (props) => {

  const displayBreweries = () =>{
    return props.breweries.map(brewery =>{
      return <BreweryCard
        key={brewery.id}
        brewery={brewery}
        handleFollow={props.handleFollow}
        note={props.note}
      />
    })
  }

  if (props.breweries) {
    return(
      <div className="row container">
        {displayBreweries()}
      </div>
    )
  }
}

export default BreweryContainer
