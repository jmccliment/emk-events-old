import { LOGIN_RESPONSE, LOGOUT_RESPONSE } from '../actions/types';

export default (state = null, action) => {
  switch(action.type) {
  case LOGIN_RESPONSE:
    return action.payload;
  case LOGOUT_RESPONSE:
    return null;
  default:
    return state;
  }
};
