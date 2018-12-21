import { Action } from './IAction';

export enum Types {
  CreateSuccess = 'Event Type Create Success',
  CreateError = 'Event Type Create Error'
};

const createSuccessAction: (eventType: any) => Action = (eventType) => ({ type: Types.CreateSuccess, payload: eventType});
const createErrorAction: (err: any) => Action = (err) => ({ type: Types.CreateError, payload: err });

export const createEventType = (eventType) => 
  (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const { auth } = getState().firebase;
    const creatorId = auth.uid;
    const creatorDisplayName = auth.displayName;

    firestore.collection('eventTypes').add({
      ...eventType,
      creatorDisplayName, 
      creatorId,
      createdAt: new Date()
    }).then(() => dispatch(createSuccessAction(eventType)))
    .catch((err) => dispatch(createErrorAction(err)));
  }
