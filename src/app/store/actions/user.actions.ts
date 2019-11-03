import { UserActionTypes } from "./user.action-types";
import { ActionParent } from "./action-parent";

export class CreateUserAction implements ActionParent {
  type = UserActionTypes.CREATE;

  constructor(public payload: any) {}
}

export class GetUserAction implements ActionParent {
  type = UserActionTypes.GET;

  constructor(public payload: any) {}
}
