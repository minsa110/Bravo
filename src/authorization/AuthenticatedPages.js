// Authenticated components
import React from 'react';
import { Link } from 'react-router';
import PersonalHomePage from '../PersonalHomePage.js';
import firebase from 'firebase';

import Notification from '../Notification.js';

import $ from 'jquery'


var AuthenticatedPages = React.createClass({
    getInitialState:function(){
      return({notifications:null});
    },
    componentDidMount:function(){
      var users = firebase.database().ref('users');
      users.on('value', function(snapshot) {
          var data = snapshot.val();
          window.data = data;

          var key = Object.keys(data)[0];

          var values = data[key];

          this.setState({notifications:values.notifications});
          // updateNotifications();
      }.bind(this));
    },
    handleInvite:function(){
      var users = firebase.database().ref('users');
      users.on('value', function(snapshot) {
          console.log(data);
          var data = snapshot.val();
          // updateNotifications();
      });
    },
    updateNotifications:function(){
        var notifications = this.state.notifications;
        notifications.pop();
        this.setState({notifications:notifications});
    },
    deny:function(event){
        var notificationID = event.currentTarget.id;
        console.log(notificationID + ' will now be deleted');
        var notification = event.target.id;
        $('#'+notification).remove();
    },
    render() {
      return (
        <div className="App">
          <p>Welcome, authenticated . Enjoy your dashboard.</p>
          {this.state.notifications && this.state.notifications.map((d,i)=><Notification accept={this.accept} deny={this.deny} key={'notification-' + i} theKey={'notification-' + i}/>)}
          {<PersonalHomePage />}
        </div>
      )
    }
});

export default AuthenticatedPages;
