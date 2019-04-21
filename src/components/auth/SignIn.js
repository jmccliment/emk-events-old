import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { signIn } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';

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

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = (e) => this.setState({
    [e.target.id]: e.target.value
  });

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
  }

  render() {
    const { classes, auth, authError } = this.props;
    if (auth.uid) return <Redirect to='/' />
    return (
      <div className={classes.container}>
        <form onSubmit={this.handleSubmit}>
          <Typography variant="h4" color="textSecondary" gutterBottom>
            Sign In
          </Typography>
          <TextField label="Email" type="email" id="email" className={classes.textField} onChange={this.handleChange} />
          <TextField label="Password" type="password" id="password" className={classes.textField} onChange={this.handleChange} />
          <Button color="primary" onClick={this.handleSubmit}>Login</Button>
          <div>{authError ? <p>{authError}</p> : <p></p>}</div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  authError: state.auth.authError,
  auth: state.firebase.auth
});

const mapDispatchToProps = (dispatch) => ({
  signIn: (creds) => dispatch(signIn(creds))
});

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(SignIn);
