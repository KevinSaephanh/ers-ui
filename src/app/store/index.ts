import { AuthEffects } from "./effects/auth.effects";
import { ReimbursementEffects } from "./effects/reimbursements.effects";
import { createFeatureSelector } from "@ngrx/store";
import { AuthState, AuthReducer } from "./reducers/auth.reducer";
import {
  ReimbState,
  ReimbursementReducer
} from "./reducers/reimbursement.reducer";

export interface AppState {
  auth: AuthState;
  reimbursement: ReimbState;
}

export const RootEffects = [AuthEffects, ReimbursementEffects];

export const RootReducer = {
  auth: AuthReducer,
  reimbursement: ReimbursementReducer
};

export const selectAuthState = createFeatureSelector<AppState>("auth");

export const selectReimbState = createFeatureSelector<AppState>(
  "reimbursement"
);
