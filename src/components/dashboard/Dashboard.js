import React, { Component } from 'react';
import Notifications from './Notifications';
import EventList from '../events/EventList';
import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
  render() {
    const { projects, events, auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> //ROUTE GUARD
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <EventList events={events} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m5 offset -m1">
            <Notifications />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.firestore.ordered.projects,
    events: state.firestore.ordered.events, 
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = () => ({});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{
    collection: 'projects'
  }, {
    collection: 'events'
  }])
)(Dashboard);