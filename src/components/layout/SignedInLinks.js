import React from 'react';
import { NavLink } from 'react-router-dom';
import addStyles from './Style';
import Avatar from '@material-ui/core/Avatar';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { signOut } from '../../store/actions/authActions';

const SignedInLinks = (props) => {
  const { classes, signOut } = props;
  return (
    <ul className={classes.linkList}>
      <li className={classes.linkListItem}><NavLink className={classes.linkListItemLink} to='/project/new'>New Project</NavLink></li>
      <li className={classes.linkListItem}><NavLink className={classes.linkListItemLink} to='/events/new'>New Event</NavLink></li>
      <li className={classes.linkListItem}><a onClick={signOut}>Log Out</a></li>
      <li className={classes.linkListItem}><NavLink to='/'><Avatar>EMK</Avatar></NavLink></li>
    </ul>
  );
}

const mapStateToProps = (state, ownProps) => ({});
const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOut())
});

export default compose(
  addStyles,
  connect(mapStateToProps, mapDispatchToProps)
)(SignedInLinks);