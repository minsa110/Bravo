import React from 'react';
import Chat from './Chat.js';
import MovieDisplay from './MovieDisplay.js';
import './PersonalMovieList.css'
var PersonalMovieList = React.createClass({
  getInitialState() {
    return({data: this.props.data,
            chat: 'bob'
          })
  },
  testings(a) {
    this.setState({
      chat: a
    })
  },
  render() {
    return (
      <div>

          <div className="row">
            <div className="col s6">
              <Chat title={this.state.chat} />
            </div>
            <div className="col s6">
              <h4>Movie List</h4>
              <div id="movieList" className="row">
                {this.state.data.map(function(d, i) {
                  return (
                    <MovieDisplay key={'movie' + i}
                          title={d.title}
                          src={d.src}
                          trying={this.testings}
                      />
                  )
                }.bind(this))}
              </div>
            </div>
          </div>

      </div>
    )
  }
})

export default PersonalMovieList;
