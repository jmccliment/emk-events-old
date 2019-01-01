import React from 'react';
import { NavLink } from 'react-router-dom';
import addStyles from './Style';
import Avatar from '@material-ui/core/Avatar';

const SignedInLinks = (props) => {
  const { classes } = props;
  return (
    <ul className={classes.linkList}>
      <li className={classes.linkListItem}><NavLink className={classes.linkListItemLink} to='/project/new'>New Project</NavLink></li>
      <li className={classes.linkListItem}><NavLink className={classes.linkListItemLink} to='/events/new'>New Event</NavLink></li>
      <li className={classes.linkListItem}><NavLink className={classes.linkListItemLink} to='/'>Log Out</NavLink></li>
      <li className={classes.linkListItem}><NavLink to='/'><Avatar>EMK</Avatar></NavLink></li>
    </ul>
  );
}

export default addStyles(SignedInLinks);