import React from 'react';
import { NavLink } from 'react-router-dom';
import addStyles from './Style';

const SignedOutLinks = (props) => {
  const { classes } = props;
  return (
    <ul className={classes.linkList}>
      <li className={classes.linkListItem}><NavLink className={classes.linkListItemLink} to='/signup'>Sign Up</NavLink></li>
      <li className={classes.linkListItem}><NavLink className={classes.linkListItemLink} to='/signin'>Login</NavLink></li>
    </ul>
  );
}

export default addStyles(SignedOutLinks);