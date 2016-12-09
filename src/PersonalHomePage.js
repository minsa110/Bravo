// Authenticated components
import React from 'react';
import firebase from 'firebase';
import '../node_modules/materialize-css/dist/css/materialize.css';
import './PersonalHomePage.css';
import PersonalMovieList from './PersonalMovieList.js';

var PersonalHome = React.createClass({
    getInitialState() {
      return({list:null, keys:null});
    },
    componentWillMount() {
      var ref = firebase.database().ref('Listings').on('value', (snapshot) => {
        var listingVals = [];
        var val = snapshot.val();
        var keys = Object.keys(val);
        keys.forEach((key)=>listingVals.push(val[key]));
        this.setState({list: listingVals, keys:keys});
        console.log(this.state.list);
      })
    },
    render() {
      return (
        <div className="App">
          {this.state.list && <PersonalMovieList keys={this.state.keys} data={this.state.list} />}
        </div>
      )
    }
});

export default PersonalHome;
