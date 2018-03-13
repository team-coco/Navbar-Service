import React from 'react';
import styles from './../app.css';

export default function Top(props) {
  return (
    <div className="top">
      <span className="logo">
        <a onClick={props.goHome} href="/home">
        <img className="logo-pic" src="https://cdn.drawception.com/images/panels/2012/4-9/KTb4sW8wYC-6.png" />
        </a>
      </span>
      <span className="search">
        <span className="search-one">
          <span className="search-title">Find</span>
          <input className="searchbar" placeholder="tacos, cheap dinner, Max's" />
        </span>
        <span className="search-two">
          <span className="search-title">Near</span>
          <input className="searchbar" placeholder="current city goes here"/>
        </span>
        <span className="search-button"><a href="#"><img className="search-icon" src="http://www.pvhc.net/img2/lnuceeldknrdpozttbxm.png" /></a></span>
      </span>
      <span className="sign-up"><a href="/signup" onClick={props.goSignup}>Sign Up</a></span>
    </div>
  )
}
