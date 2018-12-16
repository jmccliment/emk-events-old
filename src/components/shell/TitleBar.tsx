import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import * as menuActions from '../../store/actions/menuActions';

const styles = (theme) => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
});

const TitleBar = ({ openMenu, classes }) => (
  <AppBar position="static">
    <Toolbar>
      <IconButton className={classes.menuButton} onClick={openMenu}>
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" className={classes.grow}>
        East Mesa Karate Events
      </Typography>
    </Toolbar>
  </AppBar>
);

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => ({
  openMenu: () => dispatch(menuActions.openMenu())
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, { withTheme: true })(TitleBar));
