import React from 'react';
import styles from './../app.css';
import axios from 'axios';

import Searchbar from './Searchbar.jsx';
import Dropdown from './Dropdown.jsx';

class Top extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurantSearch: '',
      locationSearch: '',
      restaurants: [],
      restaurantsHref: [],
    };
  }

  updateRestaurantSearch = (input) => {
    let restaurantSearch = input;

    this.setState({restaurantSearch});
  }

  updateLocationSearch = (input) => {
    let locationSearch = input;

    this.setState({locationSearch});
  }

  queryRestaurants = (query) => {
    if (query === '') {
      return;
    }


    return axios.get('/navbar/business/' + encodeURIComponent(this.state.locationSearch) + '/' + encodeURIComponent(query))
      .then((res) => {
        let restaurants = res.data;
        restaurants = restaurants.map((restaurant) => {
          return {
            id: restaurant.id,
            name: `${restaurant.name}, ${restaurant.city}`,
          };
        });
        return restaurants;
      });
  }

  queryCities = (query) => {
    if (query === '') {
      return;
    }

    return axios.get('/navbar/city/' + encodeURIComponent(query))
      .then((res) => {
        return res.data;
      });
  }

  render() {
    return (
      <div className="top">
        <span className="logo">
          <a onClick={this.props.goHome} href="/home">
          <img className="logo-pic" src="https://cdn.drawception.com/images/panels/2012/4-9/KTb4sW8wYC-6.png" />
          </a>
        </span>
        <span className="search">
          <Searchbar title='Find' hint='tacos, cheap dinner, Max&apos;s'
            search={this.queryRestaurants} onChange={this.updateRestaurantSearch}
          />
          <Searchbar title='Near' hint='current city goes here'
            search={this.queryCities} onChange={this.updateLocationSearch}
          />
          <span className="search-button"><a href="#"><img className="search-icon" src="http://www.pvhc.net/img2/lnuceeldknrdpozttbxm.png" /></a></span>
        </span>
        <span className="sign-up"><a href="/signup" onClick={this.props.goSignup}>Sign Up</a></span>
      </div>
    );
  }
}

export default Top;