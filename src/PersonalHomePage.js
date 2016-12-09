// Authenticated components
import React from 'react';
import firebase from 'firebase';
import '../node_modules/materialize-css/dist/css/materialize.css';
import './PersonalHomePage.css';
import PersonalMovieList from './PersonalMovieList.js';
//import firebase from 'firebase';
var dummydata = [{"title": "Fantastic Beast", "src" : '', time: '2:00', theater: '<insert Name of theater>' },
                   {"title": "Beauty and the Beast", 'src' : '', time: '2:00', theater: '<insert Name of theater>'},
                   {title: "Iron Man", 'src': '', time: '2:00', theater: '<insert Name of theater>'},
                   {title: 'Doraemon', 'src': '', time: '2:00', theater: '<insert Name of theater>'},
                   {"title": "Fantastic Beast", "src" : '', time: '2:00', theater: '<insert Name of theater>'}
                ];

var PersonalHome = React.createClass({
    getInitialState() {
      return({list:null, keys:null});
    },
    componentWillMount() {
      var ref = firebase.database().ref('Listings').on('value', (snapshot) => {
        var array = [];
        var val = snapshot.val();
        var keys = Object.keys(val);
        keys.forEach((key)=>array.push(val[key]));
        this.setState({list: array, keys:keys});
        console.log(this.state.list);

        // snapshot.forEach((child,key)=>array.push(child[key]:child));
        // this.setState({list: snapshot.val()})
        // console.log(this.state.list);
        // console.log(this.state.list);
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
