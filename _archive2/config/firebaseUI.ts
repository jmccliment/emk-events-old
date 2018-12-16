import firebase from 'firebase';
import firebaseUI from 'firebaseui';

const uiConfig:firebaseUI.auth.Config = {
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.PhoneAuthProvider.PROVIDER_ID
  ],
  signInFlow: 'popup',
};

export default uiConfig;