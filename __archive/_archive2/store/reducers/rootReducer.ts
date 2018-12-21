import { combineReducers } from 'redux';
import { firestoreReducer as firestore } from 'redux-firestore';
import { firebaseReducer as firebase } from 'react-redux-firebase';

import auth from './authReducer';
import eventTypes from './eventTypesReducer';
import events from './eventsReducer';
import menu from './menuReducer';

const rootReducer = combineReducers({
  auth,
  menu,
  eventTypes,
  events,
  firestore,
  firebase
});

export default rootReducer;