import React from 'react';
import { connect } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { ListItemText } from '@material-ui/core';
import * as R from 'ramda';

import IMenuItem from './IMenuItem';
import Roles from '../auth/Roles';
import { logout } from '../../store/actions/authActions';


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
  },
  navLink: {
    textDecoration: 'none',
    fontFamily: 'Roboto',
  }
};

const BuildCheckInMenuItem: () => IMenuItem = () => (
  { path: '/checkIn', primaryText: 'Check In', roles: [Roles.LoggedOut, Roles.Student, Roles.Instructor, Roles.Admin] }
);

const BuildSignOutMenuItem: (signOut: () => null) => IMenuItem = (signOut) => (
  { onClick: signOut, primaryText: 'Sign Out', roles: [Roles.Admin, Roles.Instructor, Roles.Student] }
);

const BuildStudentHomeMenuItem: () => IMenuItem = () => (
  { path: '/student', primaryText: 'Student Home', roles: [Roles.Student]}
)

const BuildAdminHomeMenuItem: () => IMenuItem = () => (
  { path: '/admin', primaryText: 'Admin Home', roles: [Roles.Admin]}
)

const BuildInstructorHomeMenuItem: () => IMenuItem = () => (
  { path: '/instructor', primaryText: 'Instructor Home', roles: [Roles.Instructor]}
)

const BuildSignInMenuItem: () => IMenuItem = () => (
  { path: '/signin', primaryText: 'Sign In', roles: [Roles.LoggedOut] }
);

const BuildManageEventsMenuItem: () => IMenuItem = () => (
  { path: '/events', primaryText: 'Manage Events', roles: [Roles.Admin]}
);

const BuildManageEventTypesMenuItem: () => IMenuItem = () => (
  { path: '/eventTypes', primaryText: 'Manage Event Types', roles: [Roles.Admin]}
)

const Menu = (props) => {
  const { classes, signOut, profile } = props;
  const menuItems: IMenuItem[] = [
    BuildCheckInMenuItem()
    , BuildStudentHomeMenuItem()
    , BuildInstructorHomeMenuItem()
    , BuildAdminHomeMenuItem()
    , BuildManageEventsMenuItem()
    , BuildManageEventTypesMenuItem()
    , BuildSignInMenuItem()
    , BuildSignOutMenuItem(signOut)
  ];
  
  const roles = profile && profile.roles || [''];
  
  return (
    <List component="nav">
      {menuItems.filter((item) => R.intersection(roles, item.roles).length > 0)
        .map((item) => { 
          if(item.path) {
            return (
              <NavLink to={item.path} className={classes.navLink} key={item.primaryText}>
                <ListItem button>
                  <ListItemText primary={item.primaryText} />
                </ListItem>
              </NavLink>
            )
          } else if(item.onClick) {
            return (
              <ListItem button onClick={item.onClick} key={item.primaryText}>
                <ListItemText primary={item.primaryText} />
              </ListItem>
            )
          }
        })
      }
    </List>
  );
}

const mapStateToProps = ({firebase}) => ({
  profile: firebase.profile
});

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(logout())
});

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Menu));
