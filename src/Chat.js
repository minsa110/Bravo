import React from 'react';
import ChatDisplay from './ChatDisplay.js';
import './Chat.css';
import firebase from 'firebase';
// import $ from 'jquery';

var Chat = React.createClass({
  getInitialState() {
    return ({text: []});
  },
  save() {
    var user = firebase.auth().currentUser.displayName
    var val = this.refs.newText.value;
    var listings = firebase.database().ref('Listings');
    listings.orderByKey().equalTo(this.props.chatInfo).once('value').then(function(snapshot){
      var value = snapshot.val();
      console.log('Value Before:', value);
      var key = Object.keys(value);
      var chat = value[key].chat;


      console.log('Chat:', chat);
      console.log('Value After:', value);

      var newArray = this.state.text;
      newArray.push(user + ': ' + val);
      console.log(newArray);
      value[key].chat = newArray;
      console.log('MOLAALALALAL', listings)
      // var test = value[key];
      // test.set({
      //   'ListingInfo':value[key].ListingInfo,
      //   'chat':newArray,
      //   'friends':value[key].friends
      // })
      this.setState({text: newArray})

      // listings.child(this.props.chatInfo).set({
      //   'ListingInfo':listings[key].ListingInfo,
      //   'chat':chat,
      //   'friends':listings[key].friends
      // })
    }.bind(this));
    // firebase.database().ref('Listings').on('child_modified')


  },

  render() {
    return(
      <div id="chat">
        <div id="title">
          <h4>{this.props.chatInfo}</h4>
        </div>

        <ChatDisplay id={this.props.chatInfo} text={this.state.text} />

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
