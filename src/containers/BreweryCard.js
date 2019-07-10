import React from 'react'
import "materialize-css/dist/css/materialize.min.css"

const BreweryCard = (props) =>{
  // console.log(props)
  return(
    <div >
      <div className="col s12 m6">
        <div className="card yellow darken-2 z-depth-4">
          <div className="card-content black-text">
            <span className="card-title">{props.brewery.name}</span>
            <p>Brewery Type: {props.brewery.brewery_type.toUpperCase()}</p>
            <p>{props.brewery.street}</p>
            <p>{props.brewery.city}, {props.brewery.state}</p>
            <div className="card-action container">
              <a className="black-text" href={props.brewery.website_url}>Visit Website</a>
              <a className="black-text" href={props.brewery.website_url}>View Map</a>
              <a class="btn-floating scale-transition black" onClick={()=>props.handleClick(props)}>
                <i class="material-icons">local_drink</i>
              </a>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BreweryCard
