import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { signUp } from '../../store/actions/authActions';

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

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  }

  handleChange = (e) => this.setState({
    [e.target.id]: e.target.value
  });

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  }

  render() {
    const { auth, authError, classes } = this.props;

    if (auth.uid) return <Redirect to='/' />
    return (
      <div className={classes.container}>
        <form onSubmit={this.handleSubmit}>
          <Typography variant="h4" color="textSecondary" gutterBottom>
            Sign Up
          </Typography>
          <TextField label="Email" type="email" id="email" className={classes.textField} onChange={this.handleChange}  />
          <TextField label="Password" type="password" id="password" className={classes.textField} onChange={this.handleChange} />
          <TextField label="Last Name" type="text" id="lastName" className={classes.textField} onChange={this.handleChange} />
          <TextField label="First Name" type="text" id="firstName" className={classes.textField} onChange={this.handleChange} />
          <Button color="primary" onClick={this.handleSubmit}>Sign Up</Button>
          <Typography>{authError}</Typography>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  auth: state.firebase.auth,
  authError: state.auth.authError
})

const mapDispatchToProps = (dispatch) => ({
  signUp: (newUser) => dispatch(signUp(newUser))
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles)
)(SignUp);
