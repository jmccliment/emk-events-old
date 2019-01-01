import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

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
  const { classes } = props;
  return (
    <AppBar position="static">
      <Toolbar>
        <Link to="/" className={classes.link}>
          <Typography variant="h6" color="inherit" className={classes.grow}>East Mesa Karate Events Online</Typography>
        </Link>
        <SignedInLinks />
        <SignedOutLinks />
      </Toolbar>
    </AppBar>
  )
}

export default withStyles(styles)(Navbar);