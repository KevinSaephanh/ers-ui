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
  GetAll,
  Add,
  Update,
  UploadReceipt,
  UploadReceiptSuccess
} from "../actions/reimbursement.action";
import { Router } from "@angular/router";
import { tap } from "rxjs/operators";

@Injectable()
export class ReimbursementEffects {
  constructor(
    private actions$: Actions,
    private reimbService: ReimbursementService,
    private router: Router
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
    .map((action: Add) => action.payload)
    .switchMap(payload => {
      return this.reimbService.add(payload);
    })
    .map(reimb => {
      console.log(reimb);
      new AddSuccess(reimb);
      return new UploadReceipt(reimb);
    })
    .catch(error => {
      console.log(error);
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
  uploadReceipt$: Observable<any> = this.actions$
    .ofType(ReimbursementActionTypes.UPLOAD)
    .map((action: UploadReceipt) => action.payload)
    .switchMap(payload => {
      console.log(payload);
      return this.reimbService.uploadReceipt(payload);
    })
    .map(reimb => {
      return new UploadReceiptSuccess(reimb);
    });

  @Effect({ dispatch: false })
  uploadReceiptSuccess$: Observable<any> = this.actions$.ofType(
    ReimbursementActionTypes.UPLOAD_SUCCESS
  );

  @Effect()
  update$: Observable<any> = this.actions$
    .ofType(ReimbursementActionTypes.UPDATE)
    .map((action: Update) => action.payload)
    .switchMap(payload => {
      console.log(payload);
      return this.reimbService.update(payload);
    })
    .map(reimb => {
      console.log(reimb);
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
