import React, { Component } from 'react';
import { connect } from 'react-redux';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from '../../config/firebase';
import uiConfig from '../../config/firebaseUI';
import { Redirect } from 'react-router-dom';

import { loginSuccessful } from '../../store/actions/authActions';

const Login = ({loginSuccess, auth}) => {
  uiConfig.callbacks = uiConfig.callbacks || {};
  uiConfig.callbacks.signInSuccessWithAuthResult = (authResult) => {
      loginSuccess(authResult.user);
      return false;
    }
  return (auth.uid ? 
    <Redirect to="/" /> :
    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
  )
}

const mapStateToProps = ({ auth, firebase }) => ({
  authError: auth.authError,
  auth: firebase.auth,
});

const mapDispatchToProps = (dispatch) => ({
  loginSuccess: (user) => dispatch(loginSuccessful(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);