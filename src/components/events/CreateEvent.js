import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { createEvent } from '../../store/events';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { RedirectIfUserIsNotSignedIn } from '../routing/RouteGuard';

const styles = (theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  }
});


class CreateEvent extends Component {
  state = {
    title: '',
    content: ''
  }

  handleChange = (e) => this.setState({
    [e.target.id]: e.target.value
  });

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createEvent(this.state);
    this.props.history.push('/');
  }

  render() {
    const { classes } = this.props;
    return (
      <RedirectIfUserIsNotSignedIn to='/signin'>
        <div className={classes.container}>
          <form onSubmit={this.handleSubmit}>
            <Typography variant="h4" color="textSecondary" gutterBottom>
              Create new event
            </Typography>
            <TextField label="Title" type="text" id="title" className={classes.textField} onChange={this.handleChange} />
            <TextField label="Event Content" multiline type="text" id="content" className={classes.textField} onChange={this.handleChange} />
            <Button color="primary" onClick={this.handleSubmit}>Create</Button>
          </form>
        </div>
      </RedirectIfUserIsNotSignedIn>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createEvent: (event) => dispatch(createEvent(event))
  }
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles)
)(CreateEvent);
