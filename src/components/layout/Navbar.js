import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { compose } from 'redux';

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  link: {
    color: '#FFF'
  }
}

const Navbar = (props) => {
  const { classes, auth, profile } = props;
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />
  return (
    <AppBar position="static">
      <Toolbar>
        <Link to="/" className={classes.link}>
          <Typography variant="h6" color="inherit" className={classes.grow}>East Mesa Karate Events Online</Typography>
        </Link>
        {links}
      </Toolbar>
    </AppBar>
  )
}

const mapStateToProps = (state) => ({
  auth: state.firebase.auth,
  profile: state.firebase.profile
});

export default compose(
  withStyles(styles),
  connect(mapStateToProps)
)(Navbar);