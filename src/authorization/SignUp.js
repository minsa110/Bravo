// Sign up
import React from 'react';
import './signUp.css';

var SignUp = React.createClass({
    render() {
        return(
            <section className="container">
                <h3>Join our Community!</h3>


                <form onSubmit={this.props.submit} className="col s12 authenticate" id="sign-up">
                    {/* <div className="row"> */}


                        <div className="input-field col s12">
                            <input id="email" type="email" className="validate" />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="input-field col s12">
                            <input id="password" type="password" className="validate"/>
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="input-field col s12">
                            <input type="text" id="displayName" className="validate" />
                            <label htmlFor="displayName">Username</label>
                        </div>
                        <div className="row-pic">
                            <div className="input-field col s12">
                            	<h6>Profile Picture</h6>
                                <input type="file" id="file-uploaded" name="profilePic" />
                            </div>
                            <br></br>
                        </div>


                        {/* <div className="row-pic">
                            <div className="file-field input-field">
                                <div className="btn">
                                    <span>Profile Picture</span>
                                    <input type="file" id="file-uploaded"/>
                                </div>


                                <div className="file-path-wrapper">
                                    <input className="file-path validate" type="text"/>
                                </div>
                            </div>
                        </div> */}

                    <button className="btn btn-primary">Sign Up</button>
                </form>
            </section>
        )
    }
});

export default SignUp;
