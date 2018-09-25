import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import * as actions from '../actions';

const User = props => {
  const { user, login, logout } = props;
  return (
    <div>
      {user ? 
        <div>
          <Typography variant="h6">Welcome, {user.displayName}</Typography>
          <Button onClick={() => logout()}>Log Out</Button>
        </div>
        :
        <div>
          <Button onClick={() => login()}>Log In</Button>
        </div>
      }
    </div>
  );
};

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps, actions)(User);