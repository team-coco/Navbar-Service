import React from 'react';
import ReactDOM from 'react-dom';
import Top from './components/top.jsx';
import Bottom from './components/bottom.jsx';
import $ from 'jquery';
import styles from './app.css';

export default class Navbar extends React.Component {
  constructor(){
    super();
    this.state = {
      test: true
    }
  }

  componentDidMount(){
    // getRestarantLocationFromDB
  }

  getRestaurantLocationFromDB(){
  // this gets our rest. ID from the browser window.
  let url = window.location.href.split('/').pop();
  url = url.split('?');
  if (url.length > 1) {
    let urlParams = url[1].split('&');
    urlParams = urlParams.reduce((acc, param) => {
      param = param.split('=');
      acc[param[0]] = param[1];
      return acc;
    }, {id: url[0]});
  }
  let restaurantID = url[0]

  $.ajax({
    url: 'http://127.0.0.1:3033/navbar/location',
    type: 'GET',
    data: {id:restaurantID},
    success: (data) => {
      console.log('GET review success!', data);
    },
    error: (data) => {
      console.log('GET failed!')
    }
  });
}

  goHome(){
    $.ajax({
      url: `http://127.0.0.1:3033/home`,
      type: 'GET',
      success: (data) => {
        console.log('home GET sucessful', data)
      },
      error: (data) => {
        console.log('home GET error', data)
      }
    })
  }

  goSignUp(){
    $.ajax({
      url: `http://127.0.0.1:3033/signup`,
      type: 'GET',
      success: (data) => {
        console.log('signup GET sucessful', data)
      },
      error: (data) => {
        console.log('signup GET error', data)
      }
    })
  }

  render(){
    return (

      <div>
        <Top goSignUp={this.goSignUp.bind(this)} goHome={this.goHome.bind(this)}/>
        <Bottom />
      </div>
    )
  }
}

window.Navbar = Navbar;
ReactDOM.render(<Navbar />, document.getElementById('navbar'));
