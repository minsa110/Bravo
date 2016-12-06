import React from 'react';

var Movie = React.createClass({

  render() {
    return(
      <div>
        <h4 className='title'>{this.props.title}</h4>
      <img onClick={this.props.chat} src={this.props.src} />
      </div>
    )
  }
})

export default Movie;
