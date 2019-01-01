import { combineReducers } from 'redux';
import authReducer from './authReducer';
import projectReducer from './projectReducer';
import { reducer as eventReducer } from '../events';

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  event: eventReducer
});

export default rootReducer;