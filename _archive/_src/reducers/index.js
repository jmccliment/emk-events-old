import { combineReducers } from 'redux';
import students from './studentsReducer';
import classes from './classesReducer';
import eventTypes from './eventTypesReducer';
import events from './eventsReducer';
import user from './userReducer';
import menu from './menuReducer';

export default combineReducers({
  students,
  classes,
  eventTypes,
  events,
  user,
  menu
});