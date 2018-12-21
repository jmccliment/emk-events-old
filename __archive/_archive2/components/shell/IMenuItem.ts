import Roles from '../auth/Roles';

export default interface IMenuItem {
  path?: string;
  onClick?: () => null;
  primaryText: string;
  roles: Roles[];
};
