import { FETCH_STUDENTS, FETCH_CLASSES, FETCH_EVENTS, FETCH_EVENT_TYPES, LOGOUT_RESPONSE, LOGIN_RESPONSE, SHOW_MENU, HIDE_MENU } from './types';
import { studentsRef, classesRef, eventsRef, eventTypesRef } from '../config/firebase';
import { auth, provider } from '../config/firebase';

export const fetchStudents = () => async dispatch => {
  studentsRef.on('value', snapshot => {
    dispatch({
      type: FETCH_STUDENTS,
      payload: snapshot.val()
    });
  });
};

export const addStudent = (student) => async dispatch => {
  studentsRef.push().set(student);
};

export const fetchClasses = () => async dispatch => {
  classesRef.on('value', snapshot => {
    dispatch({
      type: FETCH_CLASSES,
      payload: snapshot.val()
    });
  });
};

export const addClass = (_class) => async dispatch => {
  classesRef.push().set(_class);
};

export const fetchEvents = () => async dispatch => {
  eventsRef.on('value', snapshot => {
    dispatch({
      type: FETCH_EVENTS,
      payload: snapshot.val()
    });
  });
};

export const addEvent = (_event) => async dispatch => {
  eventsRef.push().set(_event);
};

export const fetchEventTypes = () => async dispatch => {
  eventTypesRef.on('value', snapshot => {
    dispatch({
      type: FETCH_EVENT_TYPES,
      payload: snapshot.val()
    });
  });
};

export const addEventType = (eventType) => async dispatch => {
  eventTypesRef.push().set(eventType);
};

export const logout = () => dispatch => {
  auth.signOut().then(() => {
    dispatch({
      type: LOGOUT_RESPONSE,
      payload: {}
    });
  });
};

export const login = () => dispatch => {
  auth.signInWithPopup(provider)
    .then(result => {
      dispatch({
        type: LOGIN_RESPONSE,
        payload: result.user
      });
    });
};

export const showMenu = () => dispatch => {
  dispatch({
    type: SHOW_MENU
  });
};

export const hideMenu = () => dispatch => {
  dispatch({
    type: HIDE_MENU
  });
};

export const loginSuccessful = user => dispatch => {
  console.log('action loginSuccessful', user);
  dispatch({
    type: LOGIN_RESPONSE,
    payload: user
  });
};

export const logoutSuccessful = () => dispatch => {
  dispatch({
    type: LOGOUT_RESPONSE
  });
};
