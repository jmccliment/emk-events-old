import { log } from '../logging/Logger';

const types = {
  CREATE_STUDENT: 'CREATE_STUDENT',
  CREATE_STUDENT_ERROR: 'CREATE_STUDENT_ERROR'
};

const createStudent = (student) => (dispatch, getState, { getFirestore, getFirebase }) => {
  const firestore = getFirestore();
  firestore.collection('students').add({
    ...student,
    createdAt: new Date()
  }).then(() => {
    dispatch({ type: types.CREATE_STUDENT, payload: student });
  }).catch((err) => {
    dispatch({ type: types.CREATE_STUDENT_ERROR, payload: err });
  });
};

const initState = {
  students: []
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case types.CREATE_STUDENT:
      log('created student');
      log(JSON.stringify(action.payload, null, 2));
      return state;
    case types.CREATE_STUDENT_ERROR:
      log('create student error');
      log(JSON.stringify(action.payload, null, 2));
      return state;
    default:
      return state;
  }
}

/* STUDENT, so far:
{ firstName: 'Larry', lastName: 'Lovell', rank: 'black', degree: '2nd', grade: '3rd' }
*/

export { types, createStudent, reducer };