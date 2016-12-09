import React from 'react'
import Showtime from './Showtime.js'
import $ from 'jquery'

var Listing = React.createClass({
    getInitialState: function() {
        return ({imageURL: ''});
    },
    componentDidMount: function() {
      var movieDBURL = 'https://api.themoviedb.org/3/search/movie?api_key=aadd317edcf7fded06137442eb497be2&query=';
      var movieDBImageURL = 'https://image.tmdb.org/t/p/w500/';
      var searchString = this.props.title;
      if (searchString.includes("IMAX")) {
        var len = searchString.length - 24;
        searchString = searchString.substr(0, len);
      }
      if (searchString.includes("3D")) {
        var len = searchString.length - 3;
        searchString = searchString.substr(0, len);
      }
      var imageURL,vote_average;
      var url = movieDBURL + searchString;
      $.get(url).then((data) => {
        imageURL = movieDBImageURL + data.results[0].poster_path;
        vote_average = data.results[0].vote_average;
        this.setState({imageURL: imageURL,vote_average:vote_average});
      })
    },
    update:function(event){
      var time = event.target.id;
      var title = this.props.title;
      this.props.window.time = time;
      this.props.window.title = title;
      this.props.window.imgURL = this.state.imageURL;
      this.props.addEvent();
    },
    render:function(){
      return(
        <ul className='collection with-header'>
          <li className="collection-header"><h4>{this.props.title}</h4>
            <img className="listingImg" src={this.state.imageURL} />
            <p id='vote_average'>Vote Average: {this.state.vote_average}</p>
          </li>
          {this.props.showtimes.map((time,i)=><Showtime key={'showtime-' + i} timeClick={this.update} time={time}/>)}
        </ul>
      )
    }
})

export default Listing
