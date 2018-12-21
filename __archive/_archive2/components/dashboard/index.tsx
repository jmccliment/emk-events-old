import React, { Component } from 'react';
import { connect } from 'react-redux';

const dashboard = ({auth, profile}) => (
  <div>
    <pre>{JSON.stringify(profile, null, 2)}</pre>
    <pre>{JSON.stringify(auth, null, 2)}</pre>
  </div>
);

const mapStateToProps = ({firebase}) => ({auth: firebase.auth, profile: firebase.profile});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(dashboard);