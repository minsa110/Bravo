import React from 'react'

var Notification = React.createClass({
    render:function(){
      return(
        <div id={this.props.theKey}>
          <p>Owner has invited you to see "Titanic" @ 12:00 pm on 12/2/2016</p>
          <button>Accept</button>
          <button id={this.props.theKey} onClick={this.props.deny}>Deny</button>
        </div>
      )
    }
})

export default Notification
