import React from 'react'

class ProfilePage extends React.Component {
  render() {
    return(
      <div>Hi,{this.props.currentUserInput}!</div>
    )
  }
}

export default ProfilePage
