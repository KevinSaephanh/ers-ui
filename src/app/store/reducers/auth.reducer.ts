import { AuthActionTypes } from "../actions/auth.action-types";
import { All } from "../actions/auth.actions";

export interface AuthState {
  isAuthenticated: boolean;
  user: {};
  error: string | null;
}

const initState: AuthState = {
  isAuthenticated: false,
  user: null,
  error: null
};

export function AuthReducer(state = initState, action: All): AuthState {
  switch (action.type) {
    case AuthActionTypes.SIGNUP_FAIL: {
      return {
        ...state,
        error: "Error occurred replace this with something meaningful"
      };
    }
    case AuthActionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        user: {
          id: action.payload.id,
          username: action.payload.username,
          role: action.payload.role,
          token: action.payload.token
        },
        error: null
      };
    }
    case AuthActionTypes.LOGIN_FAIL: {
      return {
        ...state,
        error: "Incorrect username and/or password"
      };
    }
    case AuthActionTypes.LOGOUT: {
      return initState;
    }
    case AuthActionTypes.LOAD_USER: {
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        error: null
      };
    }
    default:
      return state;
  }
}
