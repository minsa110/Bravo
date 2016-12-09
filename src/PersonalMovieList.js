import React from 'react';
import Chat from './Chat.js';
import MovieDisplay from './MovieDisplay.js';
import './PersonalMovieList.css'
import firebase from 'firebase'

var PersonalMovieList = React.createClass({
  getInitialState() {
    return({data: this.props.data,
            activeChat: null})
  },
  setChat:function(event) {
    // var val = this.refs.newText.value;
    var listings = firebase.database().ref('Listings');
    var id = event.target.id;
    listings.orderByKey().equalTo(id).once('value').then(function(snapshot){
      var value = snapshot.val();
      var key = Object.keys(value);
      var title = value[key].ListingInfo['title'];
      var chat = value[key].chat;
      this.setState({activeChat:{id:key[0],chat:chat}, activeTitle:title});
    }.bind(this))
  },
  componentWillMount() {
    var listings = [];
    for(var i = 0; i < this.props.keys.length; i++){
      var obj = {
        key:this.props.keys[i],
        val:this.props.data[i]
      }
      listings.push(obj);
    }
    this.setState({data: listings});
  },
  render() {
    var activeChat;
    if(this.state.activeChat){
      activeChat = <Chat title={this.state.activeTitle} chatInfo={this.state.activeChat}/>;
    }
    return (
      <div>
          <div className="flexbox-container">
            <div id="movieBox" className="flex-column">
              <h4>Movie List</h4>
              <div id="movieList" className="row">
                  {this.state.data.map((d,i) => <MovieDisplay key={'key-' + i} id={d.key} data={d.val.ListingInfo} setChat={this.setChat}/>)}
              </div>
            </div>
            <div className="flex-column">
              {activeChat}
            </div>
          </div>

      </div>
    )
  }
})

export default PersonalMovieList;
