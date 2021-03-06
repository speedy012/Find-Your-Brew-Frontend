import React, { useState } from 'react'
import "materialize-css/dist/css/materialize.min.css"

const BreweryCard = (props) => {

  const [form, setForm] = useState(false)
  const [review, setReview] = useState('')
  const [allReviews, setAllReviews] = useState([])

  const toggleForm = () => {
    setForm(!form)
  }

  const addComment = () => {
    setAllReviews(...allReviews, review)
  }

  const displayCommentForm = () =>{
      return <form onSubmit={addComment}>
                <input
                  onChange={e => setReview(e.target.value)}
                  name="review"
                  value={review}
                />
                <button>Add Review</button>
              </form>
  }

  return(
    <div >
      <div className="col s12 m6">
        <div className="card yellow darken-2 z-depth-3 hoverable">
          <div className="card-content black-text">
            <span className="card-title truncate">{props.brewery.name}</span>
            <p>Brewery Type: {props.brewery.brewery_type.charAt(0).toUpperCase()+props.brewery.brewery_type.slice(1)}</p>
            <p>{props.brewery.street}</p>
            <p>{props.brewery.city}, {props.brewery.state}</p>
            <div className="card-action">
              <a
              className="btn-floating scale-transition black hoverable"
              onClick={() => window.open(props.brewery.website_url)}>
                <i className="material-icons">near_me</i>
              </a>
              {props.note === true ?
                <button className="btn-floating scale-transition black hoverable"
                onClick={e => props.handleFollow(props.brewery)}>
                  <i className="material-icons">remove_circle</i>
                </button>
                :
                <button className="btn-floating scale-transition black hoverable"
                onClick={e => props.handleFollow(props.brewery)}>
                  <i className="material-icons">favorite</i>
                </button>
              }
              {props.note === true ?
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
