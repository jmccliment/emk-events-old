import * as firebase from 'firebase';

export const uiConfig = {
  signInSuccessUrl: '/',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ],
  signinFlow: 'popup',
  tosUrl: '/tos'
};
