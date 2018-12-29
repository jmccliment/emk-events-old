import { combineReducers } from 'redux';
import { firestoreReducer as firestore } from 'redux-firestore';
import { firebaseReducer as firebase } from 'react-redux-firebase';
import { reducer as students } from '../store/models/IStudent'
const rootReducer = combineReducers({
  firestore,
  firebase,
  students
});

export default rootReducer;