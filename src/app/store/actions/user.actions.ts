import { Action } from "@ngrx/store";
import { User } from "../../models/User";

export enum UserActionTypes {
  CREATE_USER = "[USER] Create User",
  GET_USER = "[USER] Get User"
}

export class CreateUserAction implements Action {
  readonly type = UserActionTypes.CREATE_USER;

  constructor(public payload: User) {}
}

export class GetUserAction implements Action {
  readonly type = UserActionTypes.GET_USER;

  constructor(public payload: User) {}
}

export type UserAction = CreateUserAction | GetUserAction;
