// Authenticated components
import React from 'react';
import '../node_modules/materialize-css/dist/css/materialize.css';
import Chat from './Chat.js';
import './PersonalHomePage.css';
//import firebase from 'firebase';
var dummydata_1 = [{"title": "Fantastic Beast", "src" : 'http://static2.hypable.com/wp-content/uploads/2016/06/fantastic-beasts-big-poster.jpg' }];
var dummydata_2 = [{"title": "Beauty and the Beast", 'src' : 'http://img.lum.dolimg.com/v1/images/rich_mobile_beautyandthebeast_header_22399e2f.jpeg?region=0%2C0%2C640%2C794'}];

var PersonalHome = React.createClass({

    getInitialState() {
      return {
        'title': dummydata_1[0].title,
        'src': dummydata_1[0].src,
        chatToggle: 'off'
      }
    },

    test() {
      this.setState({chatToggle: 'on'})
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
              <Chat />
            </div>
            <div className="col s6">
              <div className="row">
                <div className="col s3">
                  <h4>{this.state.title}</h4>
                  <img onClick={this.test} src={this.state.src}/>
                </div>
                <div className="col s3">
                  <h4>{dummydata_2[0].title}</h4>
                  <img src={dummydata_2[0].src}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
});

export default PersonalHome;
