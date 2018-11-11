import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/icons/Person';

const User = props => {
  const { user, logout } = props;
  return (
    <div>
      {user && user.displayName && user.photoUrl && ( 
        <Avatar alt={user.displayName} src={user.photoURL} onClick={logout} />
      )}
      {user && (!user.displayName || !user.photoUrl) && (
        <Avatar>
          <PersonIcon />
        </Avatar>
      )}
    </div>
  );
};

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps, actions)(User);