import { UserAction, UserActionTypes } from "../actions/user.actions";

const initialState = {
  isAuthenticated: false,
  user: {}
};

export const UserReducer = (state = initialState, action: UserAction) => {
  switch (action.type) {
    case UserActionTypes.GET_USER:
      return state;
    case UserActionTypes.CREATE_USER:
      return state;
    default:
      return state;
  }
};
