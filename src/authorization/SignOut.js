// Sign up
import React from 'react';
import './SignOut.css';

var SignOut = React.createClass({
    render() {
        return(
            <button onClick={this.props.submit} className="btn btn-primary sign-out">Sign Out</button>
        )
    }
});

export default SignOut;
