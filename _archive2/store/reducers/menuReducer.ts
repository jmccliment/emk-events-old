import { IAction } from '../actions/IAction';
import { Types } from '../actions/menuActions';

export interface IMenuState {
  isOpen: boolean;
}

const menuReducer = (state: IMenuState = { isOpen: false }, action: IAction) => {
  switch(action.type) {
  case Types.OpenMenu: {
    return {
      ...state,
      isOpen: true
    };
  }
  case Types.CloseMenu: {
    return {
      ...state,
      isOpen: false
    };
  }
  }
  return state;
}

export default menuReducer;