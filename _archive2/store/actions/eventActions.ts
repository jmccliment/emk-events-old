import { IAction } from './IAction';
import { IEvent } from '../models';

export enum Types {
  CreateSuccess = 'Event Create Success',
  CreateError = 'Event Create Error'
};

const createSuccessAction: (event: IEvent) => IAction = (event) => ({ type: Types.CreateSuccess, payload: event});
const createErrorAction: (err: any) => IAction = (err) => ({ type: Types.CreateError, payload: err });

export const createEvent = (event:IEvent) => 
  (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const { auth } = getState().firebase;
    const creatorId = auth.uid;
    const creatorDisplayName = auth.displayName;

    firestore.collection('events').add({
      ...event,
      creatorDisplayName, 
      creatorId,
      createdAt: new Date()
    }).then(() => dispatch(createSuccessAction(event)))
    .catch((err) => dispatch(createErrorAction(err)));
  }
