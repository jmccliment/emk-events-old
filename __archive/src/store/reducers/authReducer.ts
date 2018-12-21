import { IAction } from '../actions/IAction';
import { Types } from '../actions/authActions';

interface IAuthState {
  authError?: string;
};

const initialState : IAuthState = {
  authError: undefined
};

const authReducer = (state: IAuthState = initialState, action : IAction) => {
  switch(action.type) {
    case Types.LoginSuccess:
    return {
      ...state,
      authError: undefined
    };
    case Types.LoginError:
    return {
      ...state,
      authError: action.payload
    }
    case Types.LogoutSuccess:
    return {
      ...state,
      user: undefined,
      authError: undefined
    };
    case Types.LogoutError:
    return {
      ...state,
      authError: action.payload
    }
    default: 
    return state;
  }
}

export default authReducer;