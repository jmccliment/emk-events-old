import React, { Component } from 'react';
import Notifications from './Notifications';
import EventList from '../events/EventList';
import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux';

class Dashboard extends Component {
  render() {
    const { projects, events } = this.props;

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
    projects: state.project.projects,
    events: state.event.events
  };
};

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);