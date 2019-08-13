import React from 'react'
import "materialize-css/dist/css/materialize.min.css"

class BreweryCard  extends React.Component {

  state = {
    form: false
  }

  toggleForm = () =>{
    this.setState({
      form: !this.state.form
    })
  }


  displayCommentForm = () =>{
    console.log("clicked")
      return <form onSubmit={this.props.addComment}>
                <input onChange={this.props.handleNoteChange} name="noteInput" value={this.props.noteInput} />
                <button>Add Note</button>
              </form>
  }
  // console.log(props)
  render(){
    console.log(this.state.form)
    return(
      <div >
        <div className="col s12 m6">
          <div className="card yellow darken-2 z-depth-3">
            <div className="card-content black-text">
              <span className="card-title truncate">{this.props.brewery.name}</span>
              <p>Brewery Type: {this.props.brewery.brewery_type.charAt(0).toUpperCase()+this.props.brewery.brewery_type.slice(1)}</p>
              <p>{this.props.brewery.street}</p>
              <p>{this.props.brewery.city}, {this.props.brewery.state}</p>
              <div className="card-action">
                <a className="btn-floating scale-transition black hoverable" href={this.props.brewery.website_url}>
                  <i className="material-icons">near_me</i>
                </a>
                {this.props.brewery.fave === true ?
                  <button className="btn-floating scale-transition black hoverable" onClick={()=>this.props.handleClick(this.props)}>
                    <i className="material-icons">remove_circle</i>
                  </button>
                  :
                  <button className="btn-floating scale-transition black hoverable" onClick={()=>this.props.handleClick(this.props)}>
                    <i className="material-icons">favorite</i>
                  </button>
                }
                {this.props.brewery.fave === true ?
                  <button className="btn-floating scale-transition black hoverable" onClick={this.toggleForm}>
                    <i className="material-icons">add_circle</i>
                  </button>
                  :
                  null
                }
                {this.state.form === true ? this.displayCommentForm() : null }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BreweryCard
