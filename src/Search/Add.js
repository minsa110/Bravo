import React from 'react';
import $ from 'jquery'
import ResultsTable from './ResultsTable.js'
import firebase from 'firebase';

// var movieDBURL = 'https://api.themoviedb.org/3/search/movie?api_key=aadd317edcf7fded06137442eb497be2&query=';
// var movieDBImageURL = 'https://image.tmdb.org/t/p/w500/';

//for Google Place search
var googleMap;

// Gets data from GraceNote and puts it into
// a Map where the keys are Theatres, and the values are Maps of movie titles and showtimes.
var AddPage = React.createClass({
    getInitialState: function() {
        return ({searchResults: null, pins: []});
    },
    componentDidMount: function() {
        this.L = window.L;
        this.map = this.L.map(this.root).setView([
            39.5, -98.4
        ], 3);
        var tileLayer = this.L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png')
        tileLayer.addTo(this.map);
    },
    componentWillMount: function() {
        // Get Current StartDate
        var date = new Date();
        var startDay = date.getDate();
        var endDay = startDay + 15;
        if (startDay < 10) {
            startDay = '0' + startDay;
        }
        if (endDay < 10) {
            endDay = '0' + endDay;
        }
        this.startDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + startDay;
        this.endDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + endDay;
    },
    getListings: function(event) {
        //Clear Previous Markers
        $('.leaflet-marker-icon').remove();


        // url to get movie listings
        var showTimes = new Map(); // holds current search results
        var pins = {};
        var url = 'http://data.tmsapi.com/v1.1/movies/showings?startDate=' + $('#startDate').val() + '&zip=' + $('#zipcode').val() + '&radius='+ $('#radius').val() + '&api_key=razswfzzubnqy49ry2km9ce9';
        $.get(url).then(function(data) {
            // Populates showTimes and Map
            data.forEach((d) => d.showtimes.forEach(function(s) {
                var theatre_name = s.theatre.name;
                var title = d.title;
                var time = s.dateTime;
                if (showTimes.has(theatre_name)) {
                    var listings = showTimes.get(theatre_name);
                    if (listings.has(title)) {
                        var movie = listings.get(title);
                        movie.push(time);
                    } else {
                        // var url = movieDBURL + title;
                        // $.get(url).then(function(data){
                        //
                        // }.bind(this))
                        var showtimes = [];
                        showtimes.push(time);
                        listings.set(title, showtimes);
                    }
                } else {
                    console.log('in else')
                    var listings = new Map();
                    var showtimes = [];
                    showtimes.push(time);
                    listings.set(title, showtimes);
                    showTimes.set(theatre_name, listings);

                    // Google Places API
                    var seattle = new window.google.maps.LatLng(47.609895,-122.330259);
                    googleMap = new window.google.maps.Map(document.getElementById('gmap'), {
                     api_key: 'AIzaSyAiuF-jDh08voLNMBlWXDZUmv14EorSsoM',
                     center: seattle,
                     zoom: 15
                    });
                    var request = {
                     location: seattle,
                     radius: '100000',
                     query: theatre_name
                    };
                    console.log(seattle);
                    console.log(googleMap);
                    var callback = function (results, status) {
                     if (status == window.google.maps.places.PlacesServiceStatus.OK) {
                       for (var i = 0; i < results.length; i++) {
                         var loc = results[i].geometry.location;
                         var lat = loc.lat();
                         var lng = loc.lng();
                         var loc_str = lat + ' ' + lng;
                         pins[loc_str] = theatre_name;
                         var marker = this.L.marker([lat, lng]);
                         marker.on('click', this.pinClick);
                         marker.addTo(this.map);
                         var latlng = this.L.latLng(lat, lng);
                         this.map.setView(latlng, 10);
                       }
                     }
                    }.bind(this)
                    var service = new window.google.maps.places.PlacesService(googleMap);
                    service.textSearch(request, callback);
                }
            }.bind(this)))
        }.bind(this), function(error) {
            alert('Error in grabbing movie listings');
        });
        this.setState({searchResults: showTimes, pins: pins});
    },
    addEvent:function(){
        console.log('newEvent');
        console.log(window.newEvent);
        var newEvent = window.newEvent;
        var user = firebase.auth().currentUser.email;
        var friends = [];
        var newListing = {
          'ListingInfo':newEvent,
          'friends':[user]
        }
        console.log(newListing);
        var database = firebase.database();
        var listings = database.ref('Listings');
        listings.push(newListing);
    },
    pinClick: function(event) {
        console.log(event.target._latlng);
        var lat = event.target._latlng.lat;
        var lng = event.target._latlng.lng;
        var loc = lat + ' ' + lng;
        console.log(this.state.pins);
        var key = this.state.pins[loc];
        console.log(key);
        var listings = this.state.searchResults.get(key);
        this.setState({active:[key,listings]});
        window.theatre = key;
    },
    render: function() {
        var data = this.state.searchResults;
        var pins = this.state.pins;
        var active = this.state.active;

        var results = null;
        if(active){
          results =  <ResultsTable addEvent={this.addEvent} window={window} data={this.state.active}/>
        }
        else {
          results =
              <div className='col s6'>
                <h3>[Placeholder]</h3>
              </div>
        }


        return (
            <div className='row'>
              <div className='input-field col s6'>
                <input id='zipcode' type='text' name='zip'></input>
                <label htmlFor='zipcode'>Enter a Zipcode (US and Canada)</label>
              </div>
              <div className='col s6'>
                <label htmlFor='startDate'>StartDate</label>
                <input placeholder='StartDate' id='startDate' type="date" className="datepicker" min={this.startDate} max={this.endDate}/>
              </div>
              <div className="range-field col s11">
                <label htmlFor='radius'>Max Radius(Miles)</label>
                <input id='radius' type="range" min="5" max="20" />
              </div>
              <div className='col s1'>
                <button id='searchButton' onClick={this.getListings} className="btn-floating btn-large waves-effect waves-light green"><i className="material-icons">search</i></button>
              </div>
              <div className='col s6' ref={(node) => {this.root = node;}}>
                {/* <div id="loader"></div> */}
              </div>
                <div id="gmap"></div>
                {results}
            </div>
        )

    }
  })

  export default AddPage;
