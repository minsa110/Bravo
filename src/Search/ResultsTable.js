import React from 'react'
import Listing from './Listing.js'

var ResultsTable = React.createClass({
  addEvent:function(){
    console.log('in addEvent!');
    var newEvent = {
      'theatre':this.props.data[0],
      'title':window.title,
      'time':window.time
    }
    console.log(newEvent);
  },
  render:function(){
    var theatre_name = this.props.data[0];
    var listings = this.props.data[1];
    var listings_array = [];
    for(var [title, showtimes] of listings){
      listings_array.push({title:title, showtimes:showtimes});
    }
    return(
      <div>
      <h1>{theatre_name}</h1>
        {
          listings_array.map((d,i)=><Listing key={'listing-' + i} addEvent={this.addEvent} title={d.title} window={window} showtimes={d.showtimes}/>)
        }
      </div>
    )
  }
})

export default ResultsTable
