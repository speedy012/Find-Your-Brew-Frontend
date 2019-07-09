import React from 'react'
import "materialize-css/dist/css/materialize.min.css"

const BreweryCard = (props) =>{
  // console.log(props)
  return(
    <div class="row">
      <div class="col s12 m6">
        <div class="card blue-grey darken-1">
          <div class="card-content white-text">
            <span class="card-title">{props.brewery.name}</span>
            <p>{props.brewery.street}</p>
            <p>{props.brewery.city}, {props.brewery.state}</p>
          </div>
          <div class="card-action">
            <a href={props.brewery.website_url}>Visit Website</a>
            <a onClick={()=>props.handleClick(props)}>Add to Favorites</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BreweryCard
