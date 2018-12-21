import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import _ from 'lodash';

import CreateClass from './createClass';

const ClassList = (props) => {
  const { classes } = props;
  return (
    <div>
      <ul>
        {_.map(classes, (value, key) => {
          return (
            <li key={key}>{value.name} ({value.minAge} - {value.maxAge})</li>
          );
        })}
      </ul>
      <CreateClass />
    </div>
  );
};

ClassList.props = {
  classes: PropTypes.object.isRequried
};

const mapStateToProps = ({ classes }) => ({ classes });
export default connect(mapStateToProps, actions)(ClassList);