import React from 'react';
import ChatDisplay from './ChatDisplay.js';
import './Chat.css';
import firebase from 'firebase'

var Chat = React.createClass({
  getInitialState() {
    return ({text: []});
  },
  save() {
    var val = this.refs.newText.value;
    firebase.database().ref('Listings').orderByKey().equalTo(this.props.chatInfo).once('value').then(function(snapshot){
      var value = snapshot.val();
      console.log('Value Before:', value);
      var key = Object.keys(value);
      var chat = value[key].chat;
      console.log('Chat:', chat);
      console.log(typeof chat);
      console.log('Value After:', value);
      value.child(this.props.chatInfo).set({
        'ListingInfo':value.ListingInfo,
        'chat':chat,
        'friends':value.friends
      })
    });
    // firebase.database().ref('Listings').on('child_modified')
    var newArray = this.state.text;
    newArray.push(val);
    console.log(newArray);
    this.setState({text: newArray})

  },

  render() {
    return(
      <div id="chat">
        <div id="title">
          <h4>{this.props.chatInfo}</h4>
        </div>

        <ChatDisplay text={this.state.text} />

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
