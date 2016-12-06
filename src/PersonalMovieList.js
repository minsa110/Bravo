import React from 'react';
import MovieDisplay from './MovieDisplay.js';
var PersonalMovieList = React.createClass({
  getInitialState() {
    return({data: this.props.data})
  },
  render() {
    return (
      <div>
          {this.state.data.map(function(d, i) {
            return (
              <MovieDisplay key={'movie' + i}
                    title={d.title}
                    src={d.src}
                    chat={this.props.chat}
                />
            )
          }.bind(this))}

      </div>
    )
  }
})

export default PersonalMovieList;
