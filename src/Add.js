import React from 'react';
import $ from 'jquery'

// Gets data from GraceNote and puts it into
// a Map where the keys are Theatres, and the values are Maps of movie titles and showtimes.
var AddPage = React.createClass({
    getInitialState: function() {
        return ({searchResults: null});
    },
    getListings: function(event) {
        var url = 'http://data.tmsapi.com/v1.1/movies/showings?startDate=2016-12-01&zip=' + $('#zipcode').val() + '&api_key=razswfzzubnqy49ry2km9ce9';
        $.get(url, function(data, error) {
            var showTimes = new Map();
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
                    theatre_name.replace(' ', '+');
                    // var url = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=' + theatre_name + '&key=AIzaSyDV1UvPHRKcGMRDyfNKwRo4YB2A1afrqoM';
                    // $.get(url, function(data, error) {
                    //     console.log(data.name);
                    //     console.log(data.formatted_address);
                    // })
                }
            }));
            this.setState({searchResults: showTimes});
        }.bind(this));
    },
    render: function() {
        var data = this.state.searchResults;
        if (data) {
            console.log(data);
        }

        return (
            <div>
                <input id='zipcode' style={{
                    'marginTop': '20px',
                    'marginLeft': '400px'
                }} type='text' name='zip' placeholder='enter your zip'></input>
                <button onClick={this.getListings}>Go!</button>
            </div>

        )
    }
})

export default AddPage;
