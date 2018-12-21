import React from 'react';
import Menu from './menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  permanentDrawer: {
    zIndex: - 1,
    width: 250
  },
  permanentDrawerPaper: {
    zIndex: - 1,
    width: 250,
    paddingTop: 60
  },
  swipeableDrawer: {
    width: '75%'
  },
  swipeableDrawerPaper: {
    width: '75%'
  },
  toolbar: theme.mixins.toolbar
});

const MenuDrawer = ({ open, openMenu, closeMenu, classes, theme }) => {
  console.log('classes', classes);
  console.log('theme', theme);
  return (
    <SwipeableDrawer open={open} onOpen={openMenu} onClose={closeMenu}  className={classes.swipeableDrawer} classes={{paper: classes.swipeableDrawerPaper}} >
      <Menu closeMenu={closeMenu} />
    </SwipeableDrawer>
  )
};


export default withStyles(styles, { withTheme: true })(MenuDrawer);
