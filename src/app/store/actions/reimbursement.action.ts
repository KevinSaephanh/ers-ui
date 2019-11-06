import { ReimbursementActionTypes } from "./reimbursement.action-types";
import { Action } from "@ngrx/store";

export class Add implements Action {
  readonly type = ReimbursementActionTypes.ADD;
  constructor(public payload: any) {}
}

export class Get implements Action {
  readonly type = ReimbursementActionTypes.GET;
  constructor(public payload: any) {}
}

export class GetAll implements Action {
  readonly type = ReimbursementActionTypes.GET_ALL;
  constructor(public payload: any) {}
}

export class GetUsersReimbs implements Action {
  readonly type = ReimbursementActionTypes.GET_USERS_REIMBS;
  constructor(public payload: any) {}
}

export class GetSuccess implements Action {
  readonly type = ReimbursementActionTypes.GET_SUCCESS;
  constructor(public payload: any) {}
}

export class GetFail implements Action {
  readonly type = ReimbursementActionTypes.GET_FAIL;
  constructor(public payload: any) {}
}

export class Update implements Action {
  readonly type = ReimbursementActionTypes.UPDATE;
  constructor(public payload: any) {}
}

export class UpdateSuccess implements Action {
  readonly type = ReimbursementActionTypes.UPDATE_SUCCESS;
  constructor(public payload: any) {}
}

export class UpdateFail implements Action {
  readonly type = ReimbursementActionTypes.UPDATE_FAIL;
  constructor(public payload: any) {}
}

export type All =
  | Add
  | Get
  | GetAll
  | GetUsersReimbs
  | GetSuccess
  | GetFail
  | Update
  | UpdateSuccess
  | UpdateFail;
