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
        keys.forEach((key)=>{
          if(val[key].friends.includes(firebase.auth().currentUser.email)){
            listingVals.push(val[key]);
          }
        })
        keys.forEach((key)=>console.log('Here is val[key].friends, ', val[key].friends));
        this.setState({list: listingVals, keys:keys});
      })
    },
    render() {
      var home_screen = null;
      if(this.state.list){
        home_screen = <PersonalMovieList keys={this.state.keys} data={this.state.list} />
      }
      else {
        home_screen = <h1>You should really go out to the movies more!</h1>
      }
      return (
        <div className="App">
          {home_screen}
        </div>
      )
    }
});

export default PersonalHome;
