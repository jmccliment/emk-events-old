import React, { Component } from 'react';
// import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions';
import _ from 'lodash';

class List extends Component {

  componentWillMount() { this.props.fetchStudents(); }

  render() {
    let { students } = this.props;

    return (
      <div>
        <ul>
          {_.map(students, (value, key) => {
            return (
              <li key={key}>{value.firstName} {value.lastName}</li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({students}) =>
{
  return {
    students
  };
};

export default connect(mapStateToProps, actions)(List);