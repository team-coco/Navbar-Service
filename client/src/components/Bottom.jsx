import React from 'react';

export default function Bottom() {
  return (
    <div className="bottom">
      <span className="bottom-left">
        <span className="restaurants">
          <img className="icon" src="https://i.imgur.com/BD9gZQZ.png" />
          Restaurants
        </span>
        <span className="nightlife">
          <img className="icon" src="https://i.imgur.com/mXR9DiS.png" />
          Nightlife
        </span>
        <span className="home-services">
          <img className="icon" src="https://i.imgur.com/WCdJVCf.png" />
          Home Services
          <div className="dropdown-content">
            <a className="dropdown-item" href="#">Air Conditioning and Heating</a><p />
            <a className="dropdown-item" href="#">Contractors</a><p />
            <a className="dropdown-item" href="#">Electricians</a><p />
            <a className="dropdown-item" href="#">Home Cleaners</a><p />
            <a className="dropdown-item" href="#">Landscapes</a><p />
            <a className="dropdown-item" href="#">Locksmiths</a><p />
            <a className="dropdown-item" href="#">Movers</a><p />
            <a className="dropdown-item" href="#">Painters</a><p />
            <a className="dropdown-item" href="#">Plumbers</a><p />
          </div>
        </span>
        <span className="buffer"></span>
        <span className="write-a-review">Write a Review</span>
        <span className="events">Events</span>
        <span className="talk">Talk</span>
      </span>
      <span className="bottom-right">
        <span className="sign-in">Log In</span>
      </span>
    </div>
  )
}
