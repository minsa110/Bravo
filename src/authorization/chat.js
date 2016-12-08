import React from 'react';
import TweetContainer from './TweetContainer';
import firebase from 'firebase';
import FirebaseConfig from './Config';
import SignUp from './SignUp';
import SignIn from './SignIn';
import SignOut from './SignOut';
import { Link } from 'react-router';

var Chat = React.createClass({
  render() {
    return (
      <section>
        <TweetContainer user = {this.state.user.displayName}/>
      </section>
    )
  }
});

export default Chat;
