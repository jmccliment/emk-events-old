import { IAction } from '../actions/IAction';
import { Types } from '../actions/eventActions';
import { IEvent } from '../models';


const eventsReducer = (state: IEvent[] = [], action: IAction) => {
  switch (action.type) {
  case Types.CreateSuccess:
    console.log('Created event', action.payload);
    return state;
  case Types.CreateError:
    console.error('Error creating event', action.payload);
    return state;
  default:
    return state;
  }
}

export default eventsReducer;
