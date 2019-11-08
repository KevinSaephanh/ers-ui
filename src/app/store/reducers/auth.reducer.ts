import { AuthActionTypes } from "../actions/auth.action-types";
import { All } from "../actions/auth.actions";

export interface AuthState {
  readonly isAuthenticated: boolean;
  readonly user: {} | null;
  readonly error: string | null;
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
      console.log(action.payload);
      return {
        ...state,
        isAuthenticated: true,
        user: {
          id: action.payload.user.id,
          username: action.payload.user.sub,
          role: action.payload.user.role,
          expiresAt: action.payload.user.exp
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
    default:
      return state;
  }
}
