 import React from 'react'

 var Showtime = React.createClass({
   componentWillMount:function(){
     var datetime = this.props.time;
     var toDate = new Date(datetime);
     var hours = toDate.getUTCHours();
     var minutes = toDate.getUTCMinutes();

     var ending = 'am';

     if(hours > 12){
       hours = hours - 12;
       ending = 'pm';
     }

     if(minutes < 10){
       minutes += '0';
     }

     this.formattedTime = hours + ':' + minutes + ' ' + ending;

     console.log(this.formattedTime);

   },
   render:function(){
     console.log(this.props.timeClick);
     return(
       <a className='collection-item' id={this.props.time} onClick={this.props.timeClick}>{this.formattedTime}</a>
     )
   }
 })


export default Showtime
