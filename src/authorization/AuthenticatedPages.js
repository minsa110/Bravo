// Authenticated components
import React from 'react';
import { Link } from 'react-router';
//import firebase from 'firebase';


var AuthenticatedPages = React.createClass({

    render() {
      return (
      {/*  <div className="App">
					<div className = "navbar">
						<Link className="link" activeClassName='active' to="/page-2">Page 2</Link>
					</div>
					<div className="children">
            <p>Authenticated users only. This is the omepage.</p>
						{this.props.children}
					</div>
				</div> */},

        <div className="App">
          <p>Welcome, authenticated . Enjoy your dashboard.</p>

        </div>
      )
    }
});

export default AuthenticatedPages;
