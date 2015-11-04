/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './Profile.css';
import withStyles from '../../decorators/withStyles';
const TextField = require('material-ui/lib/text-field');
import Link from '../Link';


@withStyles(styles)
class Profile extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };
  

  render() {
    const title = 'My Profile';
    this.context.onSetTitle(title);
    return (
      <div className="Profile">
        <div className="Profile-container">
          <h1>{title}</h1>
          <a className="Navigation-link" href="/welcomepage" onClick={Link.handleClick}>Welcome Page</a>
          <div><TextField hintText="First and Last Name" /></div>
          <div><TextField hintText="Current School" /></div>
          <div><TextField hintText="Email" /></div>
          <div><TextField hintText="Address" /></div>
          <div><TextField hintText="Phone Number" /></div>
          <div><TextField hintText="Birthdate" /></div>
        </div>
      </div>
    );
  }

}

export default Profile;
