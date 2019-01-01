const types = {
  CREATE_EVENT: 'CREATE_EVENT'
};

const createEvent = (event) => {
  return (dispatch, getState) => {
    dispatch({type: types.CREATE_EVENT, event});
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
      console.table(action.event);
      break;
    default:
      break;
  }
  return state;
}

export { types, createEvent, reducer };