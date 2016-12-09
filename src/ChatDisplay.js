import React from 'react';
import './ChatDisplay.css';
import firebase from 'firebase';

var ChatDisplay = React.createClass({
  getInitialState:function(){
      return({chats:null})
  },
  save() {
    // connect to firebase database
    // search for the current key
    // grab the chat (which has been updated in Chat.js)
    // render.
    var listings = firebase.database().ref('Listings');
    listings.orderByKey().equalTo(this.props.id).once('value').then(function(snapshot){
      var value = snapshot.val();

      var key = Object.keys(value);
      var chat = value[key].chat;
      console.log('log meeeeeee', chat);




      // listings.child(this.props.chatInfo).set({
      //   'ListingInfo':listings[key].ListingInfo,
      //   'chat':chat,
      //   'friends':listings[key].friends
      // })
    }.bind(this));
    // firebase.database().ref('Listings').on('child_modified')


  },
  render() {
    this.save();
    var chats = this.props.text;
      return (
        <div id="chatBox" className="container">
          {chats.map((d,i)=>{
            return(
              <p key={i}>{d}</p>
            )
          })

          }
        </div>
      )
   }
})

export default ChatDisplay;
