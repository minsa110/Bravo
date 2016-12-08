import React from 'react'
import Showtime from './Showtime.js'

var Listing = React.createClass({
    update:function(event){
      console.log('in update!!');
      var time = event.target.id;
      var title = this.props.title;
      this.props.window.time = time;
      this.props.window.title = title;
      this.props.addEvent();
    },
    render:function(){
      return(
        <div>
          <h2>{this.props.title}</h2>
          {this.props.showtimes.map((time,i)=><Showtime key={'showtime-' + i} timeClick={this.update} time={time}/>)}
        </div>
      )
    }
})

export default Listing
