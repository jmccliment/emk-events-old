import { IAction } from '../actions/IAction';
import { Types } from '../actions/eventTypeActions';
import { IEventType } from '../models';


const eventTypesReducer = (state: IEventType[] = [], action: IAction) => {
  switch (action.type) {
  case Types.CreateSuccess:
    console.log('Created event type', action.payload);
    return state;
  case Types.CreateError:
    console.error('Error creating type', action.payload);
    return state;
  default:
    return state;
  }
}

export default eventTypesReducer;
