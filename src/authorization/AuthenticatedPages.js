// Authenticated components
import React from 'react';
import { IndexRoute, Router, Route, Link, hashHistory } from 'react-router';
//import firebase from 'firebase';


var AuthenticatedPages = React.createClass({

    render() {
      return (
        <div className="App">
        <div className = "navbar">
          <Link className="link" activeClassName='active' to="/">Home</Link>
          <Link className="link" activeClassName='active' to="/page-2">Page2</Link>
        </div>
        <div className="children">
          {this.props.children}
        </div>
        </div>
      )
    }
});

export default AuthenticatedPages;
