import React from 'react'

 var Showtime = React.createClass({
   render:function(){
     console.log('it\'s showtime!');
     return(
       <li>{this.props.time}</li>
     )
   }
 })


export default Showtime
