import React from 'react'

const BreweryCard = (props) =>{

  return(
    <div onClick={()=> props.handleClick(props.brewery)}>
      <div>
      {props.brewery.name}
      </div>
    </div>
  )
}

export default BreweryCard
