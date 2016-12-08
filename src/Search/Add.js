import React from 'react';
import $ from 'jquery'
import ResultsTable from './ResultsTable.js'

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
        ], 4);
        var tileLayer = this.L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png')
        tileLayer.addTo(this.map);
    },
    componentWillMount: function() {
        // Get Current StartDate
        var d = new Date();
        var day = d.getDate();
        if (day < 10) {
            day = '0' + day;
        }
        this.startDate = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + day;
    },
    getListings: function(event) {
        // url to get movie listings
        var showTimes = new Map(); // holds current search results
        var pins = {};
        var url = 'http://data.tmsapi.com/v1.1/movies/showings?startDate=' + this.startDate + '&zip=' + $('#zipcode').val() + '&api_key=ywfnykbqh7mgmuuwt5rjxr56';
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
                        var showtimes = [];
                        showtimes.push(time);
                        listings.set(title, showtimes);
                    }
                } else {
                    var listings = new Map();
                    var showtimes = [];
                    showtimes.push(time);
                    listings.set(title, showtimes);
                    showTimes.set(theatre_name, listings);

                    // Google Places API
                    var url = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=' + theatre_name + '&key=AIzaSyB7r7-XK91ef8d5uahmjxLm0D45Owp18c4';
                    $.get(url).then(function(data) {
                        var loc = data.results[0].geometry.location;
                        var lat = loc.lat;
                        var lng = loc.lng;
                        var loc_str = lat + ' ' + lng;
                        pins[loc_str] = theatre_name;
                        var marker = this.L.marker([lat, lng]);
                        marker.on('click', this.pinClick);
                        marker.addTo(this.map);
                        var latlng = this.L.latLng(lat, lng);
                        this.map.setView(latlng, 10);
                    }.bind(this), function(error) {
                        alert('Error in grabbing location')
                    });
                }
            }.bind(this)))
        }.bind(this), function(error) {
            alert('Error in grabbing movie listings');
        });
        this.setState({searchResults: showTimes, pins: pins});
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
        console.log('re-render!')
        var data = this.state.searchResults;
        var pins = this.state.pins;
        var active = this.state.active;
        console.log('active: ' + active);
        return (
            <div>
                <input id='zipcode' style={{
                    'marginTop': '20px',
                    'marginLeft': '400px'
                }} type='text' name='zip' placeholder='enter your zip'></input>
                <button onClick={this.getListings}>Get Listings</button>
                <div ref={(node) => {
                    this.root = node;
                }}></div>
                <div id='results'>
                  {active && <ResultsTable data={this.state.active}/>}
                </div>
            </div>
        )

    }
  })

  export default AddPage;
