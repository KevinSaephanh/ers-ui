import { ActionParent } from "../actions/action-parent";
import { ReimbursementActionTypes } from "../actions/reimbursement.action-types";

const initState = {
  reimbursements: [{}],
  reimbursement: {}
};

export const ReimbursementReducer = (
  state = initState,
  action: ActionParent
) => {
  switch (action.type) {
    case ReimbursementActionTypes.ADD:
      return { ...state, reimbursements: action.payload };
  }
};
