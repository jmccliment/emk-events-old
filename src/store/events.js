const types = {
  CREATE_EVENT: 'CREATE_EVENT',
  CREATE_EVENT_ERROR: 'CREATE_EVENT_ERROR',
  REGISTER_FOR_EVENT: 'REGISTER_FOR_EVENT',
  REGISTER_FOR_EVENT_ERROR: 'REGISTER_FOR_EVENT_ERROR',
  SIGN_IN_TO_EVENT: 'SIGN_IN_TO_EVENT',
  SIGN_IN_TO_EVENT_ERROR: 'SIGN_IN_TO_EVENT_ERROR'
};

const createEvent = (event) => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    const firestore = getFirestore();
    firestore.collection('events').add({
      ...event,
      authorId: 12345,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: types.CREATE_EVENT, payload: event })
    }).catch((err) => {
      dispatch({ type: types.CREATE_EVENT_ERROR, payload: err })
    })
  }
}

const registerStudentForEvent = (eventId, studentId) => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    const firestore = getFirestore();
    firestore.collection('eventRegistrations').add({
      eventId,
      studentId,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: types.REGISTER_FOR_EVENT, payload: {} })
    }).catch((err) => {
      dispatch({ type: types.REGISTER_FOR_EVENT_ERROR, payload: err })
    })
  }
}

const signStudentInForEvent = (registrationId) => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    const firestore = getFirestore();
    const collection = firestore.collection('eventRegistrations');
    const registrationDoc = collection.doc(registrationId);
    console.log(registrationDoc);

  }
}

const initState = {
  events: []
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case types.CREATE_EVENT:
      console.log('created event');
      console.table(action.payload);
      return state;
    case types.CREATE_EVENT_ERROR:
      console.log('create event error');
      console.table(action.payload);
      return state;
    case types.REGISTER_FOR_EVENT:
      console.log('event registration');
      console.table(action.payload);
      return state;
    case types.REGISTER_FOR_EVENT_ERROR:
      console.log('event registration error');
      console.table(action.payload);
      return state;
    case types.SIGN_IN_TO_EVENT:
      console.log('event sign in');
      console.table(action.payload);
      return state;
    case types.SIGN_IN_TO_EVENT_ERROR:
      console.log('event sign in error');
      console.table(action.payload);
      return state;
    default:
      return state;
  }
}

export { types, createEvent, registerStudentForEvent, signStudentInForEvent, reducer };