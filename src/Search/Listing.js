import React from 'react'
import Showtime from './Showtime.js'

var Listing = React.createClass({
    render:function(){
      console.log('in listing');
      return(
        <div>
          <h2>{this.props.title}</h2>
          {this.props.showtimes.map((time,i)=><Showtime key={'showtime-' + i} time={time}/>)}
        </div>
      )
    }
})

export default Listing
