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
        <ul className='collection with-header'>
          <li className="collection-header"><h4>{this.props.title}</h4></li>
          {this.props.showtimes.map((time,i)=><Showtime key={'showtime-' + i} timeClick={this.update} time={time}/>)}
        </ul>
      )
    }
})

export default Listing
