
import React from 'react';
import firebase from 'firebase';
import FirebaseConfig from './Config';
import SignUp from './SignUp';
import SignIn from './SignIn';
import SignOut from './SignOut';
import Router from './Router';
import AuthenticatedPages from './AuthenticatedPages';
import './App.css';

// Create app
var App = React.createClass({
    getInitialState(){
        return{checked:false, user:null, authOption:'sign-in'}
    },

    // When component mounts, check the user
    componentDidMount() {
        firebase.initializeApp(FirebaseConfig);
        firebase.auth().onAuthStateChanged((user) => {
            if (this.state.checked !== true) {
                if(user) {
                    this.setState({user:user})
                }
            }
            this.setState({checked:true})
        });
    },

    // Sign up for an account
    signUp(event){
        event.preventDefault();

        // Get form values
        let email = event.target.elements['email'].value;
        let password = event.target.elements['password'].value;
        let displayName = event.target.elements['displayName'].value;

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((user) => {
                user.updateProfile({
                    displayName: displayName
                }).then(() => {
                    this.setState({user:firebase.auth().currentUser});
                })
            }).catch(function(error) {
              alert(error.message);
            });

        event.target.reset();
    },

    // Sign into an account
    signIn (event){
        event.preventDefault();

        // Get form values
        let email = event.target.elements['email'].value;
        let password = event.target.elements['password'].value;

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                this.setState({user:firebase.auth().currentUser});
            }).catch(function(error) {
              alert(error.message);
            });

        event.target.reset();

    },

    // Sign out of an account
    signOut() {
        firebase.auth().signOut().then(() => {
            this.setState({user:null});
        });
    },

    // Route between 'sign-up' and 'sign-in'
    routeLogin() {
        let option = this.state.authOption === 'sign-in' ? 'sign-up' : 'sign-in';
        this.setState({authOption:option});
    },

    render() {

        // Determine which 'authenticate' component should be shown
        if(this.state.authOption === 'sign-up') {
            var authComponent = <SignUp submit={this.signUp}/>
        }
        else {
            authComponent = <SignIn submit={this.signIn}/>
        }
        return(

          <div className="App-container">
            <div className="App-header">
              {/* <button className="btn">Sign Up</button> */}

              <h1>Here's to Bravo...</h1>
            </div>

            <p className="App-intro">
              {/* <i>Landing/Login/Signup page. Anyone can see. Remember to remove this!</i> */}
            </p>


            <div>
                {!this.state.user &&
                    <div>
                        {authComponent}
                        <Router handleClick={this.routeLogin} authOption={this.state.authOption} />
                    </div>

                }
                {this.state.user &&
                    <section>
                        <SignOut submit={this.signOut}/>
                        <AuthenticatedPages user={this.state.user.displayName}/>
                    </section>
                }
            </div>
          </div>

        )
    }
});
export default App;
