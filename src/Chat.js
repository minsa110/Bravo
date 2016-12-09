import React from 'react';
import ChatDisplay from './ChatDisplay.js';
import './Chat.css';
import firebase from 'firebase';

var Chat = React.createClass({
  save:function() {
    var user = firebase.auth().currentUser.displayName
    var val = this.refs.newText.value;
    var listings = firebase.database().ref('Listings');
    console.log(typeof this.props.chatInfo.id);
    console.log(this.props.chatInfo.id);

    listings.orderByKey().equalTo(this.props.chatInfo.id).once('value').then(function(snapshot){
      var value = snapshot.val();
      var key = Object.keys(value);
      var chat = value[key].chat;

      var ListingInfo = value[key].ListingInfo;
      var friends = value[key].friends;

      var newMessage = user + ': ' + val;
      if(chat[0] == 'Start a conversation!'){
        chat[0] = newMessage;
      }
      else {
        chat.push(newMessage);
      }
      listings.child(this.props.chatInfo.id).set({
        ListingInfo:ListingInfo,
        chat:chat,
        friends:friends
      });
      this.setState({text: chat})
    }.bind(this));
  },
  render() {
    return(
      <div id="chat">
        <div id="title">
          <h4>{this.props.title}</h4>
        </div>
        <ChatDisplay key={this.props.chatInfo.id} text={this.props.chatInfo.chat} />
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
