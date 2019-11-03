import { ReimbursementActionTypes } from "../actions/reimbursement.action-types";
import { Reimbursement } from "src/app/models/Reimbursement";

export interface ReimbState {
  reimbursements: Reimbursement[] | null;
  reimbursement: Reimbursement | null;
  error: string | null;
}

const initState: ReimbState = {
  reimbursements: null,
  reimbursement: null,
  error: ""
};

export const ReimbursementReducer = (state = initState, action: any) => {
  switch (action.type) {
    case ReimbursementActionTypes.ADD:
      return { ...state, reimbursements: action.payload };
    default:
      return { ...state };
  }
};
