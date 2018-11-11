import React from 'react';
import { connect } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import * as actions from '../../actions';

const styles = {
  menuListItem: {
    padding: 0
  },
  menuButtonLink: {
    display: 'block', 
    height: '100%', 
    width: '100%', 
    paddingLeft: 24, 
    paddingTop: 11, 
    paddingBottom: 11,
    paddingRight:24,
    textDecoration: 'none',
    fontFamily: 'Roboto',
  }
};

const Menu = props => {
  const { classes, hideMenu, logout, user } = props;
  return (
    <List component="nav">
      <ListItem button className={classes.menuListItem}>
        <Link component='div' to="/checkin" className={classes.menuButtonLink} onClick={ () => hideMenu() } >Check In</Link>
      </ListItem>
      {!user && (
        <ListItem button className={classes.menuListItem}>
          <Link to="/login" className={classes.menuButtonLink} onClick={ () => hideMenu() }>Log in</Link>
        </ListItem>
      )}
      {user && (
        <ListItem button className={classes.menuListItem}>
          <Link to="/list" className={classes.menuButtonLink} onClick={ () => hideMenu() }>List Checked in students</Link>
        </ListItem>
      )}
      {user && (
        <ListItem button className={classes.menuListItem}>
          <Link to="/classes" className={classes.menuButtonLink} onClick={ () => hideMenu() }>Manage Classes</Link>       
        </ListItem>
      )}
      {user && (
        <ListItem button className={classes.menuListItem}>
          <Link to="/eventTypes" className={classes.menuButtonLink} onClick={ () => hideMenu() }>Manage Event Types</Link>
        </ListItem>
      )}
      {user && (
        <ListItem button className={classes.menuListItem}>
          <Link to="/events" className={classes.menuButtonLink} onClick={ () => hideMenu() }>Manage Events</Link>         
        </ListItem>
      )}
      {user && (
        <ListItem button className={classes.menuListItemButton} onClick={ logout }>
          Log Out
        </ListItem>
      )}
    </List>
  );
};

const mapStateToProps = ({ user }) => ({ user });
export default withStyles(styles)(connect(mapStateToProps, actions)(Menu));