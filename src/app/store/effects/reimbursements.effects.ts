import { Injectable } from "@angular/core";

import { Actions, Effect, ofType } from "@ngrx/effects";
import { ReimbursementService } from "src/app/services/reimbursement.service";
import { ReimbursementActionTypes } from "../actions/reimbursement.action-types";
import { of, Observable } from "rxjs";
import {
  GetSuccess,
  GetFail,
  UpdateSuccess,
  UpdateFail,
  AddSuccess,
  AddFail,
  GetUsersReimbs,
  GetAll
} from "../actions/reimbursement.action";

@Injectable()
export class ReimbursementEffects {
  constructor(
    private actions$: Actions,
    private reimbService: ReimbursementService
  ) {}

  @Effect()
  getUserReimbs$: Observable<any> = this.actions$
    .ofType(ReimbursementActionTypes.GET_USERS_REIMBS)
    .map((action: GetUsersReimbs) => action.payload)
    .switchMap(payload =>
      this.reimbService
        .getUserReimbs(payload)
        .map(reimbs => {
          console.log(reimbs);
          return new GetSuccess(reimbs);
        })
        .catch(error => {
          return of(new GetFail(error));
        })
    );

  @Effect()
  getReimbs$: Observable<any> = this.actions$
    .ofType(ReimbursementActionTypes.GET_ALL)
    .map((action: GetAll) => action.payload)
    .switchMap(payload => {
      return this.reimbService.getAll(payload);
    })
    .map(reimbs => {
      return new GetSuccess(reimbs);
    })
    .catch(error => {
      return of(new GetFail(error));
    });

  @Effect({ dispatch: false })
  getSuccess$: Observable<any> = this.actions$.pipe(
    ofType(ReimbursementActionTypes.GET_SUCCESS)
  );

  @Effect({ dispatch: false })
  getFail$: Observable<any> = this.actions$.pipe(
    ofType(ReimbursementActionTypes.GET_FAIL)
  );

  @Effect()
  addReimb$: Observable<any> = this.actions$
    .ofType(ReimbursementActionTypes.ADD)
    .switchMap(payload => {
      return this.reimbService.add(payload);
    })
    .map(reimb => {
      return new AddSuccess(reimb);
    })
    .catch(error => {
      return of(new AddFail({ error }));
    });

  @Effect({ dispatch: false })
  addSuccess$: Observable<any> = this.actions$.pipe(
    ofType(ReimbursementActionTypes.ADD_SUCCESS)
  );

  @Effect({ dispatch: false })
  addFail$: Observable<any> = this.actions$.pipe(
    ofType(ReimbursementActionTypes.ADD_FAIL)
  );

  @Effect()
  update$: Observable<any> = this.actions$
    .ofType(ReimbursementActionTypes.UPDATE)
    .switchMap(payload => {
      return this.reimbService.update(payload);
    })
    .map(reimb => {
      return new UpdateSuccess(reimb);
    })
    .catch(error => {
      return of(new UpdateFail({ error }));
    });

  @Effect({ dispatch: false })
  updateSuccess$: Observable<any> = this.actions$.pipe(
    ofType(ReimbursementActionTypes.UPDATE_SUCCESS)
  );

  @Effect({ dispatch: false })
  updateFail$: Observable<any> = this.actions$.pipe(
    ofType(ReimbursementActionTypes.UPDATE_FAIL)
  );
}
