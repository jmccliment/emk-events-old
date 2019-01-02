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
      dispatch({type: types.CREATE_EVENT, payload: event})
    }).catch((err) => {
      dispatch({type: types.CREATE_EVENT_ERROR, payload: err})
    })
  }
}

const initState = {
  events: [
    { id: '1', title:  'Some Event', date: '1/12/19' },
    { id: '2', title:  'Some Other Event', date: '2/12/19' },
    { id: '3', title:  'Yet Another Event', date: '3/12/19' }
  ]
};

const reducer = (state = initState, action) => {
  switch(action.type) {
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