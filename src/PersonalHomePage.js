// Authenticated components
import React from 'react';
import '../node_modules/materialize-css/dist/css/materialize.css';
import Chat from './Chat.js';
import './PersonalHomePage.css';
import PersonalMovieList from './PersonalMovieList.js';
//import firebase from 'firebase';
var dummydata = [{"title": "Fantastic Beast", "src" : 'http://static2.hypable.com/wp-content/uploads/2016/06/fantastic-beasts-big-poster.jpg' },
                   {"title": "Beauty and the Beast", 'src' : 'http://img.lum.dolimg.com/v1/images/rich_mobile_beautyandthebeast_header_22399e2f.jpeg?region=0%2C0%2C640%2C794'},
                   {title: "Iron Man", 'src': 'https://s-media-cache-ak0.pinimg.com/736x/2c/bb/04/2cbb04e7ef9266e1e57a9b0e75bc555f.jpg'}

                ];

var PersonalHome = React.createClass({
    getInitialState() {
      return({num: 0})
    },
    chat() {
      this.setState({num: 1});
    },
    render() {
      return (
      {/*  <div className="App">
					<div className = "navbar">
						<Link className="link" activeClassName='active' to="/page-2">Page 2</Link>
					</div>
					<div className="children">
            <p>Authenticated users only. This is the omepage.</p>
						{this.props.children}
					</div>
				</div> */},


        <div className="App">
          <div className="row">
            <div className="col s6">
              {this.state.num === 1 && <Chat />}
            </div>
            <div className="col s6">
              <div className="row">
                <PersonalMovieList chat={this.chat} data={dummydata} />
              </div>
            </div>
          </div>
        </div>
      )
    }
});

export default PersonalHome;
