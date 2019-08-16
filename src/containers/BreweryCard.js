import React, { useState } from 'react'
import "materialize-css/dist/css/materialize.min.css"

const BreweryCard = (props) => {

  const [form, setForm] = useState(false)

  const toggleForm = () =>{
    setForm(!form)
  }

  const displayCommentForm = () =>{
    console.log("clicked")
      return <form onSubmit={props.addComment}>
                <input onChange={props.handleNoteChange} name="noteInput" value={props.noteInput} />
                <button>Add Note</button>
              </form>
  }
  // console.log(props)
    // console.log(state.form)
    return(
      <div >
        <div className="col s12 m6">
          <div className="card yellow darken-2 z-depth-3">
            <div className="card-content black-text" onClick={e=>props.handleLike(props.brewery.id)}>
              <span className="card-title truncate">{props.brewery.name}</span>
              <p>Brewery Type: {props.brewery.brewery_type.charAt(0).toUpperCase()+props.brewery.brewery_type.slice(1)}</p>
              <p>{props.brewery.street}</p>
              <p>{props.brewery.city}, {props.brewery.state}</p>
              <div className="card-action">
                <a className="btn-floating scale-transition black hoverable" href={props.brewery.website_url}>
                  <i className="material-icons">near_me</i>
                </a>
                {props.brewery.fave === true ?
                  <button className="btn-floating scale-transition black hoverable" onClick={()=>props.handleClick(props)}>
                    <i className="material-icons">remove_circle</i>
                  </button>
                  :
                  <button className="btn-floating scale-transition black hoverable" onClick={()=>props.handleClick(props)}>
                    <i className="material-icons">favorite</i>
                  </button>
                }
                {props.brewery.fave === true ?
                  <button className="btn-floating scale-transition black hoverable" onClick={toggleForm}>
                    <i className="material-icons">add_circle</i>
                  </button>
                  :
                  null
                }
                {form === true ? displayCommentForm() : null }
              </div>
            </div>
          </div>
        </div>
      </div>
    )

}

export default BreweryCard
