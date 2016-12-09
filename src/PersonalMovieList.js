import React from 'react';
import Chat from './Chat.js';
import MovieDisplay from './MovieDisplay.js';
import './PersonalMovieList.css'
var PersonalMovieList = React.createClass({
  getInitialState() {
    return({data: this.props.data,
            id: null})
  },
  callChat:function(listingId) {
    this.setState({
      id: listingId
    })
  },
  componentWillMount() {
    var listings = [];
    for(var i = 0; i < this.props.keys.length; i++){
      var obj = {
        key:this.props.keys[i],
        val:this.props.data[i]
      }
      listings.push(obj);
    }
    this.setState({data: listings});
    console.log('hello', listings[0].val.ListingInfo.title);
  },
  render() {
    return (
      <div>

          <div className="flexbox-container">
            <div id="movieBox" className="flex-column">
              <h4>Movie List</h4>
              <div id="movieList" className="row">
                {this.state.data.map(function(d, i){

                  return (
                    <MovieDisplay key={'key' + i}
                        title={d.val.ListingInfo.title}
                        theater={d.val.ListingInfo.theatre}
                        time={d.val.ListingInfo.time}
                        src={d.val.ListingInfo.imgURL}
                        id={d.key}
                        callChat={this.callChat}

                    />
                  )
                }.bind(this))}
              </div>
            </div>
            <div className="flex-column">
              {this.state.id && <Chat chatInfo={this.state.id} />}
            </div>
          </div>

      </div>
    )
  }
})

export default PersonalMovieList;
