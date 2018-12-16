import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './components/dashboard';
import SignIn from './components/auth/SignIn';
import EventTypeList from './components/events/EventTypeList';
import EventDetails from './components/events/EventDetails';
import CreateEventType from './components/events/CreateEventType';
import CreateEvent from './components/events/CreateEvent';

export default () => (
  <Switch> 
    <Route exact path="/" component={Dashboard} /> 
    <Route path='/signin' component={SignIn} />
    <Route exact path='/eventTypes' component={EventTypeList} />
    <Route exact path='/eventTypes/new' component={CreateEventType} />
    <Route exact path='/eventTypes/:eventTypeId/events/new' component={CreateEvent} />
    <Route exact path='/eventTypes/:eventTypeId/events' component={({match}) => (<div>Event List. Requested Param: {match.params.eventTypeId}</div>)} />
    <Route exact path='/events/:eventId' component={EventDetails} />
  </Switch>
);