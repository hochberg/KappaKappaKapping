/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component } from 'react';
import styles from './Header.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';
import Navigation from '../Navigation';

@withStyles(styles)
class Header extends Component {

  render() {
    return (
      <div className="Header">
        <div className="Header-container">
          <a className="Header-brand" href="/" onClick={Link.handleClick}>
            <img className="Header-brandImg" src={require('./foxLogo.png')} width="38" height="38"/>
            <span className="Header-brandTxt">Marist College</span>
          </a>
          <Navigation className="Header-nav"/>
          <div className="Header-banner">
            <h1 className="Header-bannerTitle">Marist Transfer Tracker </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
