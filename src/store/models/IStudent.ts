export interface IStudent {
  id: number;
  firstName: string;
  lastName: string;
};

enum ActionTypes {
}

export const reducer = (state: IStudent[] = [], action: any) => {
  switch (action.type) {
    default:
      return state;
  }
}
