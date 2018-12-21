import React from 'react';
import { uiConfig } from '../config/firebaseUi';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { auth } from '../config/firebase';

const Login = () => {
  return (
    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
  );
};

export default Login;