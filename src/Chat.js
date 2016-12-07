import React from 'react';
import ChatDisplay from './ChatDisplay.js';
import './Chat.css';

var Chat = React.createClass({
  render() {
    return(
      <div>
        <ChatDisplay test={this.props.title} />
        <div class="textBox">
          <div class="row">
            <form class="col s6">
              <div class="row">
                <div class="input-field col s6">
                  <textarea id="textarea1" class="materialize-textarea"></textarea>
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
