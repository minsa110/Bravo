import React from 'react';
import ChatDisplay from './ChatDisplay.js';
import './Chat.css';
import firebase from 'firebase';
// import $ from 'jquery';

var Chat = React.createClass({
  getInitialState() {
    return ({text: [], theatre:null});
  },
  componentWillMount:function(){
    // var user = firebase.auth().currentUser.displayName
    // var val = this.refs.newText.value;
    var listings = firebase.database().ref('Listings');
    listings.orderByKey().equalTo(this.props.chatInfo).once('value').then(function(snapshot){
      var value = snapshot.val();
      var key = Object.keys(value);
      var theatre = value[key].ListingInfo['title'];
      this.setState({theatre: theatre})
    }.bind(this))
  },
  save:function() {
    var user = firebase.auth().currentUser.displayName
    var val = this.refs.newText.value;
    var listings = firebase.database().ref('Listings');
    listings.orderByKey().equalTo(this.props.chatInfo).once('value').then(function(snapshot){
      var value = snapshot.val();
      var key = Object.keys(value);
      var chat = value[key].chat;

      var ListingInfo = value[key].ListingInfo;
      var friends = value[key].friends;

      var newMessage = user + ': ' + val;
      if(chat[0] == 0){
        chat[0] = newMessage;
      }
      else {
        chat.push(newMessage);
      }
      listings.child(this.props.chatInfo).set({
        ListingInfo:ListingInfo,
        chat:chat,
        friends:friends
      });

      // var test = value[key];
      // test.set({
      //   'ListingInfo':value[key].ListingInfo,
      //   'chat':newArray,
      //   'friends':value[key].friends
      // })
      this.setState({text: chat})

      // listings.child(this.props.chatInfo).set({
      //   'ListingInfo':listings[key].ListingInfo,
      //   'chat':chat,
      //   'friends':listings[key].friends
      // })
    }.bind(this));
  },
  render() {
    return(
      <div id="chat">
        <div id="title">
          <h4>{this.state.theatre}</h4>
        </div>

        <ChatDisplay key={this.props.chatInfo} id={this.props.chatInfo} text={this.state.text} />

        <div id="chatMessage">
          <div className="input-field">
            <input ref="newText" type="text" />
            <button onClick={this.save} className="btn">SENT</button>
          </div>
        </div>

      </div>
    )
  }
})

export default Chat;
