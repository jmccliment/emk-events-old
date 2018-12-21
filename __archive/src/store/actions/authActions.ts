import { Action } from './IAction';

export enum Types {
  LoginSuccess ='Login Success',
  LoginError = 'Login Error',
  LogoutSuccess = 'Logout Success',
  LogoutError = 'Logout Error'
};

const loginSuccessAction: (user: any) => Action = (user: any) => ({ type: Types.LoginSuccess, payload: user });
const loginErrorAction: (err: any) => Action = (err) => ({ type: Types.LoginError, payload: err });
const logoutSuccessAction: () => Action = () => ({ type: Types.LogoutSuccess });
const logoutErrorAction: (err: any) => Action = (err) => ({ type: Types.LogoutError, payload: err });

export const logout = () => 
  (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase.auth().signOut()
      .then(() => dispatch(logoutSuccessAction()))
      .catch((err) => dispatch(logoutErrorAction(err)));
  }

export const loginSuccessful = (user) => 
  (dispatch) => {
    dispatch(loginSuccessAction(user));
  }