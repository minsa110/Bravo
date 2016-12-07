// Authenticated components
import React from 'react';
import '../node_modules/materialize-css/dist/css/materialize.css';
import './PersonalHomePage.css';
import PersonalMovieList from './PersonalMovieList.js';
//import firebase from 'firebase';
var dummydata = [{"title": "Fantastic Beast", "src" : 'http://static2.hypable.com/wp-content/uploads/2016/06/fantastic-beasts-big-poster.jpg' },
                   {"title": "Beauty and the Beast", 'src' : 'http://img.lum.dolimg.com/v1/images/rich_mobile_beautyandthebeast_header_22399e2f.jpeg?region=0%2C0%2C640%2C794'},
                   {title: "Iron Man", 'src': 'https://s-media-cache-ak0.pinimg.com/736x/2c/bb/04/2cbb04e7ef9266e1e57a9b0e75bc555f.jpg'},
                   {title: 'Doraemon', 'src': 'https://upload.wikimedia.org/wikipedia/en/3/3f/Doraemon_movie_2016.jpeg'},
                   {"title": "Fantastic Beast", "src" : 'http://static2.hypable.com/wp-content/uploads/2016/06/fantastic-beasts-big-poster.jpg' }
                ];

var PersonalHome = React.createClass({

    render() {
      return (

        <div className="App">

          <PersonalMovieList data={dummydata} />
        </div>
      )
    }
});

export default PersonalHome;
