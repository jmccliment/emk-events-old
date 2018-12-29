import { IAction } from '../actions/IAction'
import { IStudent } from './IStudent';

export interface ICheckIn {
  id?: string;
  event: string;
  studentId: number;
  authorId: string;
  createdAt: Date;
}

enum ActionTypes {
  CREATE_CHECK_IN = 'Check-In created successfully',
  CREATE_CHECK_IN_ERROR = 'Check-In create failed',
  DELETE_CHECK_IN = 'Check-In deleted successfully',
  DELETE_CHECK_IN_ERROR = 'Check-In delete failed',
}

export const reducer = (state: any, action: IAction) => {
  switch (action.type) {
    case ActionTypes.CREATE_CHECK_IN:
      return state;
    case ActionTypes.CREATE_CHECK_IN_ERROR:
      return state;
    case ActionTypes.DELETE_CHECK_IN:
      return state;
    case ActionTypes.DELETE_CHECK_IN_ERROR:
      return state;
    default:
      return state;
  }
}

export const createCheckIn = (student: IStudent, event: string) =>
  (dispatch: any, getState: any, { getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;

    let checkIn: ICheckIn = {
      studentId: student.id,
      event,
      authorId,
      createdAt: new Date()
    };
    firestore.collection('check-ins')
      .add(checkIn)
      .then(() => dispatch({ type: ActionTypes.CREATE_CHECK_IN, payload: checkIn }))
      .catch((err) => dispatch({ type: ActionTypes.CREATE_CHECK_IN_ERROR, payload: err }));
  }
