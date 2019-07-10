import React from 'react'
import "materialize-css/dist/css/materialize.min.css"

const BreweryCard = (props) =>{
  // console.log(props)
  return(
    <div >
      <div className="col s12 m6">
        <div className="card yellow darken-2 z-depth-3">
          <div className="card-content black-text">
            <span className="card-title truncate">{props.brewery.name}</span>
            <p>Brewery Type: {props.brewery.brewery_type.toUpperCase()}</p>
            <p>{props.brewery.street}</p>
            <p>{props.brewery.city}, {props.brewery.state}</p>
            <div className="card-action">
              <a className="btn-floating scale-transition black hoverable" href={props.brewery.website_url}>
                <i className="material-icons">near_me</i>
              </a>
              <button className="btn-floating scale-transition black hoverable" onClick={()=>props.handleClick(props)}>
                <i className="material-icons">favorite</i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BreweryCard
