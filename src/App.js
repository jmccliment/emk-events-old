import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import EventDetails from './components/events/EventDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';
import CreateEvent from './components/events/CreateEvent';
import EventTypeDetails from './components/eventTypes/EventTypeDetails';
import EventTypeList from './components/eventTypes/EventTypeList';
import EventSignIn from './components/events/SignIn';
import FilterableSelectableStudentList from './components/students/SelectableStudentList';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/project/new' component={CreateProject} />
            <Route exact path='/events/new' component={CreateEvent} />
            <Route path='/project/:id' component={ProjectDetails} />
            <Route exact path='/eventTypes' component={EventTypeList} />
            <Route path='/events/:id/signin' component={EventSignIn} />
            <Route path='/events/:id' component={EventDetails} />
            <Route path='/eventTypes/:id' component={EventTypeDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/ssltest' component={FilterableSelectableStudentList} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
