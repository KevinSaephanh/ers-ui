import { AuthState, AuthReducer } from "./reducers/auth.reducer";
import {
  ReimbState,
  ReimbursementReducer
} from "./reducers/reimbursement.reducer";

export interface AppState {
  auth: AuthState;
  reimbursement: ReimbState;
}

export const RootReducer = {
  auth: AuthReducer,
  reimbursement: ReimbursementReducer
};
