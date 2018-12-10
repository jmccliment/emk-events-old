import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import _ from 'lodash';

class EventTypeList extends Component {
  static propTypes = {
    fetchEventTypes: PropTypes.func.isRequired,
    eventTypes: PropTypes.object.isRequired
  };

  state = {
    name: ''
  };

  componentWillMount() {
    this.props.fetchEventTypes();
  }

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  }

  handleFormSubmit = event => {
    const { name } = this.state;
    const { addEventType } = this.props;
    event.preventDefault();
    addEventType({ name });
    this.setState({ name: '' });
  }

  render() {
    const { eventTypes } = this.props;
    const { name } = this.state;

    return (
      <div>
        <ul>
          {_.map(eventTypes, (value, key) => {
            return (
              <li key={key}>{value.name}</li>
            );
          })}
        </ul>
        <form onSubmit={this.handleFormSubmit}>
          <div><label htmlFor="name">Event Type:</label><input type="text" value={name} onChange={this.handleNameChange} id="name" /></div>  
          <div><input type="submit" value="Submit" /></div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ eventTypes }) => ({ eventTypes });
export default connect(mapStateToProps, actions)(EventTypeList);