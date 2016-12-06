// Choose which authentication page to be on
import React from 'react';

var Router = React.createClass({
    render() {
        // Text / buttonText options
        let text = this.props.authOption === 'sign-up' ? 'Already signed up?' : 'Lack an account?'
        let buttonText = this.props.authOption === 'sign-up' ? 'Sign In' : 'Sign Up'
        return(
            <div className="contain">
                <p className="buttonLabel">
                    <em>{text}</em>
                    <br></br>
                    {/* <br></br> */}
                    <button onClick={this.props.handleClick} className="btn btn-primary">{buttonText}</button>
                </p>
            </div>
        );
    }
});

export default Router;
