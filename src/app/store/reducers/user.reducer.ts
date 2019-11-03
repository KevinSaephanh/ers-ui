import { ActionParent } from "../actions/action-parent";

const initState = {
  isAuthenticated: false,
  user: null,
  error: null
};

export const UserReducer = (state = initState, action: ActionParent) => {
  switch (action.type) {
    default:
      return state;
  }
};
