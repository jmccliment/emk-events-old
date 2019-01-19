import React, { Component } from 'react';
import Notifications from './Notifications';
import EventList from '../events/EventList';
import EventTypeList from '../eventTypes/EventTypeList';
import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { RedirectIfUserIsNotSignedIn } from '../routing/RouteGuard';

class Dashboard extends Component {
  render() {
    const { projects, events, eventTypes, notifications } = this.props;
    return (
      <RedirectIfUserIsNotSignedIn to='/signin'>
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <EventTypeList eventTypes={eventTypes} />
          </div>
        </div>
        <div className="row">
          <div className="col s12 m6">
            <EventList events={events} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications notifications={notifications} />
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m5 offset -m1">
            <Notifications notifications={notifications} />
          </div>
        </div>
      </div>
      </RedirectIfUserIsNotSignedIn>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.firestore.ordered.projects,
    events: state.firestore.ordered.events, 
    eventTypes: state.firestore.ordered.eventTypes,
    notifications: state.firestore.ordered.notifications
  };
};

const mapDispatchToProps = () => ({});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'projects' }, 
    { collection: 'events', orderBy: ['createdAt', 'desc'] }, 
    { collection: 'notifications', limit: 3, orderBy: ['time', 'desc'] },
    { collection: 'eventTypes', orderBy: ['name', 'desc']}
  ])
)(Dashboard);