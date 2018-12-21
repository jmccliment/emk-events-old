import { IAction } from './IAction';

export enum Types { 
  OpenMenu = 'Open Menu',
  CloseMenu = 'Close Menu'
}

const createOpenMenuAction: () => IAction = () => ({ type: Types.OpenMenu });
const createCloseMenuAction: () => IAction = () => ({ type: Types.CloseMenu });

export const openMenu = () => 
  (dispatch) => dispatch(createOpenMenuAction());
  

export const closeMenu = () => 
  (dispatch) => dispatch(createCloseMenuAction());
  
