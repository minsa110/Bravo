import React from 'react'
import Listing from './Listing.js'

var ResultsTable = React.createClass({
  render:function(){
    console.log('in results table')
    console.log(this.props.data);
    var theatre_name = this.props.data[0];
    var listings = this.props.data[1];
    listings = [];
    for(var [title, showtimes] of listings){
      listings.push({title:title, showtimes:showtimes});
    }
    return(
      <div>
      <h1>{theatre_name}</h1>
        {
          listings.map((d,i)=><Listing key={'listing-' + i} title={d.title} showtimes={d.showtimes}/>)
        }
      </div>
    )
  }
})

export default ResultsTable
