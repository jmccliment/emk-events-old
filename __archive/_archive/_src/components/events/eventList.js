import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import _ from 'lodash';

class EventList extends Component {
 static propTypes = {
    fetchEventTypes: PropTypes.func.isRequired,
    fetchEvents: PropTypes.func.isRequired,
    eventTypes: PropTypes.object.isRequired,
    events: PropTypes.object.isRequired
  };

  state = {
    name: '',
    eventTypeId: '',
    date: ''
  };

  componentWillMount() {
    this.props.fetchEvents();
    this.props.fetchEventTypes();
  }
  render() {
    const { /* events, */ eventTypes } = this.props;
    // const { name, eventTypeId, date } = this.state;

    return (
      <div>
        <select id="selectedEventType">
          {_.map(eventTypes, (value, key) => {
            return (
              <option key={key} value={key}>{value.name}</option>
            )
          })}
        </select>
        <ul>
          
        </ul>
        
      </div>
    );
  }
}

const mapStateToProps = ({ events, eventTypes }) => ({ events, eventTypes });
export default connect (mapStateToProps, actions)(EventList
);
