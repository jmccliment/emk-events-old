import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Shell from './components/shell';
import Dashboard from './components/dashboard';
import SignIn from './components/auth/SignIn';
import EventTypeList from './components/events/EventTypeList';
import EventDetails from './components/events/EventDetails';
import CreateEventType from './components/events/CreateEventType';
import CreateEvent from './components/events/CreateEvent';

import './App.css';

const drawerWidth = 500;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    marginTop:'60px'
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }
  state: any;
  props: any;
  render() {
    const { classes } = this.props;
    return (
      <BrowserRouter>
        <Shell>
          <Switch> 
            <Route exact path="/" component={Dashboard} /> 
            <Route path='/signin' component={SignIn} />
            <Route exact path='/eventTypes' component={EventTypeList} />
            <Route exact path='/eventTypes/new' component={CreateEventType} />
            <Route exact path='/eventTypes/:eventTypeId/events/new' component={CreateEvent} />
            <Route exact path='/eventTypes/:eventTypeId/events' component={({match}) => (<div>Event List. Requested Param: {match.params.eventTypeId}</div>)} />
            <Route exact path='/events/:eventId' component={EventDetails} />
          </Switch>
        </Shell>
      </BrowserRouter>
    )
  }
}

export default withStyles(styles)(App);
