import React from 'react'

 var Showtime = React.createClass({
   render:function(){
     console.log(this.props.timeClick);
     return(
       <button id={this.props.time} onClick={this.props.timeClick}>{this.props.time}</button>
     )
   }
 })


export default Showtime
