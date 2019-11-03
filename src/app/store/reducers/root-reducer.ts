import { UserReducer } from "./user.reducer";
import { ReimbursementReducer } from "./reimbursement.reducer";

export const RootReducer = {
  user: UserReducer,
  reimbursements: ReimbursementReducer
};
