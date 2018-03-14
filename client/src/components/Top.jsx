import React from 'react';
import styles from './../app.css';

import Dropdown from './Dropdown.jsx';

class Top extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurantSearch: '',
      locationSearch: '',
      restaurants: [
        'place1',
        'place2',
        'place3',
      ],
      restaurantsHref: [
        '--9e1ONYQuAa-CB_Rrw7Tw',
        '--cjBEbXMI2obtaRHNSFrA',
        '--DaPTJW3-tB1vP-PfdTEg',
      ],
    };
  }

  updateRestaurantSearch = (event) => {
    let restaurantSearch = event.target.value;

    this.setState({restaurantSearch});
  }

  updateLocationSearch = (event) => {
    let locationSearch = event.target.value;

    this.setState({locationSearch});
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
          <span className="search-one">
            <span className="search-title">Find</span>
            <div className="dropdown">
              <input className="searchbar" placeholder="tacos, cheap dinner, Max's"
                onChange={this.updateRestaurantSearch}
              />
              {this.state.restaurantSearch !== '' ?
                <Dropdown items={this.state.restaurants} hrefs={this.state.restaurantsHref}/>
                : undefined
              }
            </div>
          </span>
          <span className="search-two">
            <span className="search-title">Near</span>
            <input className="searchbar" placeholder="current city goes here"
              onChange={this.updateLocationSearch}
            />
          </span>
          <span className="search-button"><a href="#"><img className="search-icon" src="http://www.pvhc.net/img2/lnuceeldknrdpozttbxm.png" /></a></span>
        </span>
        <span className="sign-up"><a href="/signup" onClick={this.props.goSignup}>Sign Up</a></span>
      </div>
    );
  }
}

export default Top;