import { combineReducers } from 'redux';
import authReducer from './authReducer';
import projectReducer from './projectReducer';
import { reducer as eventReducer } from '../events';
import { reducer as studentReducer } from '../students';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  auth: authReducer,
  event: eventReducer,
  project: projectReducer,
  student: studentReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;