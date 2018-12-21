import { SHOW_MENU, HIDE_MENU } from '../actions/types';

export default (state = { isOpen: false}, action) => {
  switch(action.type) {
  case SHOW_MENU:
    return {...state, isOpen: true };
  case HIDE_MENU:
    return {...state, isOpen: false };
  default:
    return state;
  }
};
