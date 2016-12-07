import React from 'react';
import './ChatDisplay.css';

var ChatDisplay = React.createClass({

  render() {
      return (
        <div id="chatBox" className="container">
          <h4>{this.props.test}</h4>
        </div>
      )
   }
})

export default ChatDisplay;
