import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
import theme from './config/theme';
import { auth } from './config/firebase';
import User from './components/user';
import './App.css';
import * as actions from './actions';
import CheckIn from './components/checkIn';
import Listx from './components/list';
import ClassList from './components/classes/classList';
import EventTypeList from './components/events/eventTypeList';
import EventList from './components/events/eventList';
import Menu from './components/menu';
import { uiConfig } from './config/firebaseUi';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const styles = {
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  header: {
    flexGrow: 1,
    // fontFamily: 'Julee, cursive'
  },
  list: {
    width: 450
  },
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
    textDecoration: 'none'
  }
};

class App extends Component {
  state = {
    open: false,
    user: null
  };

  componentWillMount() {
    this.props.fetchClasses();
  }

  componentDidMount() {
    const {loginSuccessful} = this.props;
    console.log('mounted');
    this.unregisterAuthObserver = auth.onAuthStateChanged(
      (user) => {
        console.log('USER', user);
        loginSuccessful(user)
      }
    );
  }

  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render() {
    const { classes, menu, showMenu, hideMenu } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <div>
            <SwipeableDrawer 
              open={menu.isOpen} 
              onOpen={ () => showMenu() } 
              onClose={ () => hideMenu() } >
              <Menu />
            </SwipeableDrawer>
            <AppBar position="fixed" >
              <Toolbar>
                <IconButton className={classes.menuButton} onClick={showMenu} >
                  <MenuIcon></MenuIcon>
                </IconButton>
                <Typography variant="h5" className={classes.header} >
                  East Mesa Karate Events
                </Typography>
                <User />
              </Toolbar>
            </AppBar>
            <div style={{height: '60px'}} />
            <Grid container spacing={24}>
              <Grid item xs={6}>
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
              </Grid>
              <Grid item xs={6}>
                <Route path="/checkin" component={CheckIn} />
                <Route path="/list" component={Listx} />
                <Route path="/classes" component={ClassList} />
                <Route path="/eventTypes" component={EventTypeList} />
                <Route path="/events" component={EventList} />
              </Grid>
            </Grid>
          </div>

        </Router>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = ({menu}) => ({ menu });
export default withStyles(styles)(connect(mapStateToProps, actions)(App));
