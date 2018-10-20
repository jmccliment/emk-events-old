import { LOGIN_RESPONSE, LOGOUT_RESPONSE } from '../actions/types';

export default (state = null, action) => {
  console.log('user reducer state', state);
  switch(action.type) {
  case LOGIN_RESPONSE:
    console.log('action', action);
    return action.payload;
  case LOGOUT_RESPONSE:
    return null;
  default:
    return state;
  }
};
