import React from 'react';
import './MovieDisplay.css';

var MovieDisplay = React.createClass({
  render() {
    return(
      <div id="singleMovie" className="col s6">
        <div className="title">
          <h5 className="theater">{this.props.data.theater}</h5>
          <h5 className='title'>{this.props.data.title}</h5>
        </div>
        <img id={this.props.id} onClick={this.props.setChat} src={this.props.data.imgURL} />
        <h5 className="time">{this.props.data.time}</h5>
      </div>
    )
  }
})
export default MovieDisplay;
