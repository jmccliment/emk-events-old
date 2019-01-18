const types = {
  CREATE_EVENT: 'CREATE_EVENT',
  CREATE_EVENT_ERROR: 'CREATE_EVENT_ERROR'
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
    default:
      return state;
  }
}

export { types, createEvent, reducer };