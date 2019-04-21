import React from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const DisconnectedRouteGuard = (props) => { 
  const { auth, profile, allow, deny, to, children } = props;

  const isAllowed = allow || (() => !!deny);
  const isDenied = deny || (() => false);
  const gate = (auth, profile) => !isDenied(auth, profile) && !!isAllowed(auth, profile);
  return gate(auth, profile) ? <div>{children}</div> : <Redirect to={to} />
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

const ConnectedRouteGuard = connect(mapStateToProps)(DisconnectedRouteGuard);

const RedirectIfUserIsNotSignedIn = ({to, children}) => <ConnectedRouteGuard allow={(auth) => auth && auth.uid} to={to}>{children}</ConnectedRouteGuard>

export { 
  DisconnectedRouteGuard,
  ConnectedRouteGuard,
  RedirectIfUserIsNotSignedIn
};
export default ConnectedRouteGuard;
