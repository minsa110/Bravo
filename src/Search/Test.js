// import React from 'react'
//
// var Test = React.createClass({
//     componentDidMount: function() {
//         var map;
//         var service;
//         var infowindow;
//
//         var google = window.google;
//
//         function initialize() {
//             var pyrmont = new google.maps.LatLng(-33.8665433, 151.1956316);
//
//             map = new google.maps.Map(document.getElementById('map'), {
//                 center: pyrmont,
//                 zoom: 15
//             });
//
//             var request = {
//                 location: pyrmont,
//                 radius: '500',
//                 query: 'restaurant'
//             };
//
//             service = new google.maps.places.PlacesService(map);
//             service.textSearch(request, callback);
//         }
//
//         function callback(results, status) {
//             if (status == google.maps.places.PlacesServiceStatus.OK) {
//                 for (var i = 0; i < results.length; i++) {
//                     var place = results[i];
//                     console.log(results[i]);
//                 }
//             }
//         }
//     },
//     render:function(){
//       return(
//         <h1>It worked</h1>
//       )
//     }
// });
//
// export default Test;
