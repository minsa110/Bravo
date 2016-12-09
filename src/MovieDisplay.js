import React from 'react';
import './MovieDisplay.css';
var Movie = React.createClass({
  callChat() {
    this.props.callChat(this.props.id);
  },

  render() {
    return(
      <div id="singleMovie" className="col s6">
        <div className="title">
          <h5 className="theater">{this.props.theater}</h5>
          <h5 className='title'>{this.props.title}</h5>
        </div>
        <img onClick={this.callChat} src={this.props.src} />
        <h5 className="time">{this.props.time}</h5>
      </div>
    )
  }
})

export default Movie;
