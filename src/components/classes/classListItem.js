import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const ClassListItem = (props) => {
  const { name, minAge, maxAge } = props;
  return (
    <ul>
      <li></li>
    </ul>
  );
}

const mapStateToProps = () => ({});
export default connect(mapStateToProps, actions)(ClassListItem);