import React from 'react';
import ChatDisplay from './ChatDisplay.js';
import './Chat.css';

var Chat = React.createClass({
  render() {
    return(
      <div>
        <ChatDisplay test={this.props.title} />
        <div className="textBox">
          <div className="row">
            <form className="col s6">
              <div className="row">
                <div className="input-field col s6">
                  <textarea id="textarea1" className="materialize-textarea"></textarea>
                  <button className="btn">Sent</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
})

export default Chat;
