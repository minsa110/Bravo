import React from 'react';
import './MovieDisplay.css';
var Movie = React.createClass({
  test() {
    this.props.trying(this.props.title);
  },

  render() {
    return(
      <div id="singleMovie" className="col s3">
        <div class="title">
          <h5 className='title'>{this.props.title}</h5>          
        </div>
        <img onClick={this.test} src={this.props.src} />
      </div>
    )
  }
})

export default Movie;
