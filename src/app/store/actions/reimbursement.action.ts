import { ActionParent } from "./action-parent";
import { ReimbursementActionTypes } from "./reimbursement.action-types";

export class AddReimbursement implements ActionParent {
  type = ReimbursementActionTypes.ADD;

  constructor(public payload: any) {}
}
