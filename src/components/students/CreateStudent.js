import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { createStudent } from '../../store/students';

const styles = (theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
});

class CreateStudent extends Component {
  state = {

  }

  handleChange = (e) => this.setState({
    [e.target.id]: e.target.value
  });

  handleSubmit = (e) => {
    e.preventDefault();
    const { createStudent, history } = this.props;
    createStudent(this.state);
    history.push('/');
  }

  render() {
    const { classes } = this.props;
    return (
      <div></div>
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.firebase.auth,
  profile: state.firebase.profile
});

const mapDispatchToProps = (dispatch) => ({
  createStudent: (student) => dispatch(createStudent(student))
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles)
)(CreateStudent);