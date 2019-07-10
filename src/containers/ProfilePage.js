import React from 'react'
import BreweryCard from './BreweryCard'
import "materialize-css/dist/css/materialize.min.css"

class ProfilePage extends React.Component {

  displayBreweries = () =>{
    return this.props.userBreweries.map(brewery =>{
      return <
      BreweryCard
      key={brewery.id}
      brewery={brewery}
      handleClick={this.props.handleRemoveClick}
      />
    })
  }

  render() {
    return(
      <div>
      {this.props.isLogged ? <h1>My BrewList:</h1> : null }
        <div className="row container">
          {this.props.userBreweries === undefined ? '' : this.displayBreweries()}
        </div>
      </div>
    )
  }
}

export default ProfilePage
