import { combineReducers } from 'redux';
import authReducer from './authReducer';
import projectReducer from './projectReducer';
import { reducer as eventReducer } from '../events';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  event: eventReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;