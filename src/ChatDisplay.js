import React from 'react';
import './ChatDisplay.css';

var ChatDisplay = React.createClass({

  render() {
      return (
        <div id="chatBox" className="container">
          {this.props.text.map(function(d, i) {
            return(
              <div className="indVidualChat">
                <img src="http://cdn3-www.dogtime.com/assets/uploads/gallery/pembroke-welsh-corgi-dog-breed-pictures/prance-8.jpg" />
                <p key={'text'+ i}>

                  {d}
                </p>
              </div>
            )
          }.bind(this))}
          <p>

          </p>
        </div>
      )
   }
})

export default ChatDisplay;
