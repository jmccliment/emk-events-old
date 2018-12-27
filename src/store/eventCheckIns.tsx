import { IAction, Action } from './IAction';


enum ActionTypes {
  CheckIn = 'Event check in success',
  CheckOut = 'Event check out success',
  CheckInError = 'Event check in error',
  CheckOutError = 'Event check out error'
};

const students = [
  { id: 1, name: 'Abby Registered', status: ['registered'] },
  { id: 2, name: 'Billy Registered', status: ['registered'] },
  { id: 3, name: 'Clark Unregistered', status: ['unregistered'] },
  { id: 4, name: 'David Unregistered', status: ['unregistered'] },
  { id: 5, name: 'Emily Checkedin', status: ['registered', 'checked-in'] },
  { id: 6, name: 'Frank Checkedin', status: ['unregistered', 'checked-in'] },
];

interface IStudent {
  id: number;
  name: string;
  status: string[];
}


function createStudentDispatch(type: ActionTypes): (student: IStudent) => IAction {
  return (student: IStudent) => new Action(type, student);
}

const checkIn = (student: IStudent) =>
  (dispatch: (fn: (student: IStudent) => Action) => void) => {
    try {
      students.filter((_) => _.id === student.id && _.status[_.status.length - 1] !== 'checked-in').forEach((_) => { _.status.push('checked-in') });
      dispatch(createStudentDispatch(ActionTypes.CheckIn));
    } catch (err) {
      dispatch(createStudentDispatch(ActionTypes.CheckInError));
    }
  };

const checkOut = (student: IStudent) =>
  (dispatch: (fn: (student: IStudent) => Action) => void) => {
    try {
      students.filter((_) => _.id === student.id && _.status[_.status.length - 1] === 'checked-in').forEach((_) => { _.status.pop() });
      dispatch(createStudentDispatch(ActionTypes.CheckOut));
    } catch (err) {
      dispatch(createStudentDispatch(ActionTypes.CheckOutError));
    }
  }

const actions = {
  ActionTypes,
  checkIn,
  checkOut
};

const reducer = (state = students, action: { type: any; payload: any; }) => {
  switch (action.type) {
    case ActionTypes.CheckIn:
      console.log('checked in', action.payload);
      return state;
    case ActionTypes.CheckInError:
      console.log('check in error', action.payload);
      return state;
    case ActionTypes.CheckOut:
      console.log('checked out', action.payload);
      return state;
    case ActionTypes.CheckOutError:
      console.log('check out error', action.payload);
      return state;
    default:
      return state;

  }
}

export default { actions, reducer };