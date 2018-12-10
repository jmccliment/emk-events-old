import React from 'react';
import Menu from './menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Hidden from '@material-ui/core/Hidden';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

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
  console.log('open', open);
  console.log('openMenu', openMenu);
  console.log('closeMenu', closeMenu);
  console.log('classes', classes);
  console.log('theme', theme);
  return (
    <nav>
      <Hidden smUp implementation="css">
        <SwipeableDrawer open={open} onOpen={openMenu} onClose={closeMenu}  className={classes.swipeableDrawer} classes={{paper: classes.swipeableDrawerPaper}} >
          <Menu />
        </SwipeableDrawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer variant="permanent" className={classes.permanentDrawer} classes={{paper: classes.permanentDrawerPaper}} >
          <Menu  className={classes.toolbar} />
        </Drawer>
      </Hidden>
    </nav>
  )
};


export default withStyles(styles, { withTheme: true })(MenuDrawer);