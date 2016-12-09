import React from 'react';
import './ChatDisplay.css';
import firebase from 'firebase';

var ChatDisplay = React.createClass({
  render() {
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
