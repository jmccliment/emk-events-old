import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const CreateStudent = (props) => {
  return (
    <div>
      This will be for adding a new student to the list.
    </div>
  );
};

const mapStateToProps = () => ({});
export default connect(mapStateToProps, actions)(CreateStudent));



