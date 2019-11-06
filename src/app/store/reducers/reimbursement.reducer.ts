import { ReimbursementActionTypes } from "../actions/reimbursement.action-types";
import { Reimbursement } from "src/app/models/Reimbursement";

export interface ReimbState {
  readonly reimbursements: Reimbursement[] | null;
  readonly error: string | null;
}

const initState: ReimbState = {
  reimbursements: null,
  error: ""
};

export const ReimbursementReducer = (state = initState, action: any) => {
  switch (action.type) {
    case ReimbursementActionTypes.ADD:
      return {
        ...state,
        reimbursements: state.reimbursements.push(action.payload),
        error: null
      };
    case ReimbursementActionTypes.GET_SUCCESS:
      return {
        ...state,
        reimbursements: action.payload,
        error: null
      };
    case ReimbursementActionTypes.GET_FAIL:
      return {
        ...state,
        reimbursements: null,
        error: action.payload
      };
    case ReimbursementActionTypes.UPDATE_SUCCESS:
      return state.reimbursements.filter(reimb => reimb.id !== action.id);
    case ReimbursementActionTypes.UPDATE_FAIL:
      return {
        ...state,
        error: action.payload
      };
    default:
      return { ...state };
  }
};
